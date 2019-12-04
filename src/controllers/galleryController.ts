import { Router, Request, Response, NextFunction } from "express";
import * as bodyParser from "body-parser";
import * as passport from "passport";
import * as mongoose from "mongoose";
import * as bcrypt from "bcrypt";
import { IUserModel } from "../models/user";
import * as jwt from "jsonwebtoken";

require("dotenv").config();
require("../models/user");

let cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
});

export class GalleryController {
  removeAssets = (req: Request, res: Response) => {
    cloudinary.v2.api.delete_resources(
      req.body,
      { invalidate: true },
      (err: Error, result: any) => {
        if (err) {
          console.log(err);
        }
        res.json(result);
      }
    );
  };
  removeOne = (req: Request, res: Response) => {
    cloudinary.uploader.destroy(
      req.params.id,
      { invalidate: true },
      (err: Error, result: any) => {
        if (err) {
          console.log(err);
        }
        res.json(result);
      }
    );
  };
}
