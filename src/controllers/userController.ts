import { Router, Request, Response, NextFunction } from "express";
import * as bodyParser from "body-parser";
import * as passport from "passport";
import * as mongoose from "mongoose";
import * as bcrypt from "bcrypt";
import { IUserModel } from "../models/user";
import * as jwt from "jsonwebtoken";

require("dotenv").config();
require("../models/user");

var cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
});

const User = mongoose.model<IUserModel>("User");

export class UserController {
  getUsers(req: Request, res: Response): void {
    User.find({})
      .then(users => {
        res.json(users);
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
      (err: Error, result: any) => {
        console.log(result);
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
    const { email, firstName, lastName, password } = req.body;
    const user = await new User({
      email,
      firstName,
      lastName,
      imageUrl: "",
      bio: ""
    });
    User.register(user, password)
      .then(user => {
        res.json(user);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error.message);
      });
  }
  signIn(req: Request, res: Response, next: NextFunction): void {
    passport.authenticate(
      "local",
      (err: Error, user: IUserModel, info: any) => {
        if (err) return res.status(500).json(err.message);

        if (!user) return res.status(400).json(info.message);

        req.login(user, err => {
          if (err) return res.status(500).json(err.message);
          const userForToken = {
            email: user.email,
            id: user._id
          };
          let token = jwt.sign(userForToken, process.env.JWT_SECRET, {
            expiresIn: "1d"
          });
          res.send({
            success: true,
            name: user.fullName(),
            id: user._id,
            token
          });
        });
      }
    )(req, res, next);
  }
}
