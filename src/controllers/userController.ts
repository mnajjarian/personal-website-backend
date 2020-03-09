/* eslint-disable @typescript-eslint/camelcase */
import { Request, Response, NextFunction } from "express";
import * as passport from "passport";
import * as mongoose from "mongoose";
import { UserModel } from "../models/user";
import * as crypto from "crypto";
import { UserInterface, CloudinaryInterface } from "interfaces/user";
require("dotenv").config();
require("../models/user");

function genPassword(password: string): { salt: string; hash: string } {
  const salt = crypto.randomBytes(32).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");

  return {
    salt: salt,
    hash: hash
  };
}

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
});

const User = mongoose.model<UserModel>("User");

const formatUser = (user: UserInterface): UserInterface => {
  return {
    _id: user._id,
    isAdmin: user.isAdmin,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    title: user.title,
    imageUrl: user.imageUrl,
    bio: user.bio
  };
};
export class UserController {
  getUsers(req: Request, res: Response): void {
    User.find({})
      .then(users => {
        res.json(users.map(u => formatUser(u)));
      })
      .catch(error => {
        console.log(error);
      });
  }
  updateUser(req: Request, res: Response): void {
    const userId = req.params.id;
    cloudinary.uploader.destroy(
      req.body.publicId,
      { invalidate: true },
      (err: Error, result: CloudinaryInterface) => {
        console.log("result: ", result);
      }
    );

    User.findByIdAndUpdate(userId, req.body.obj, { new: true })
      .then(updatedUser => {
        res.json(updatedUser.toJSON());
      })
      .catch(error => {
        console.log(error);
        res.status(400).send({ Error: "malformatted id" });
      });
  }
  async signUp(req: Request, res: Response): Promise<void> {
    const { username, firstName, lastName, password } = req.body;
    const { salt, hash } = genPassword(password);

    const user = await new User({
      isAdmin: true,
      username,
      firstName,
      lastName,
      imageUrl: "",
      title: "",
      bio: "",
      hash,
      salt
    });

    user
      .save()
      .then(user => {
        res.send({
          success: true,
          name: user.fullName(),
          id: user._id
        });
      })
      .catch(err => {
        res.json({ success: false, error: err.errmsg });
      });
  }
  signIn(req: Request, res: Response, next: NextFunction): void {
    passport.authenticate(
      "local",
      (err: Error, user: UserModel, info: { message: string }) => {
        if (err)
          return res
            .status(500)
            .json({
              success: false,
              error: "username or password is incorrect"
            });

        if (!user) return res.status(400).json(info.message);

        req.login(user, err => {
          if (err) return res.status(500).json(err.message);
          res.send({
            success: true,
            name: user.fullName(),
            id: user._id
          });
        });
      }
    )(req, res, next);
  }
  logout(req: Request, res: Response): void {
    req.logout();
    res.redirect("/");
  }
  auth(req: Request, res: Response): Response {
    console.log(req.isAuthenticated())
    if (req.isAuthenticated()) {
      return res.json({ auth: true });
    } else {
      return res.json({ auth: false });
    }
  }
}
