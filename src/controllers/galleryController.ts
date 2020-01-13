/* eslint-disable @typescript-eslint/camelcase */
import { Request, Response } from "express";


require("dotenv").config();
require("../models/user");

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
});

export class GalleryController {
  removeAssets = (req: Request, res: Response): void => {
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
  removeOne = (req: Request, res: Response): void => {
    cloudinary.uploader.destroy(
      req.params.id,
      { invalidate: true },
      (err: Error, result: any) => {
        if (err) {
          console.log(err);
        }
        res.json(result);
        console.log(result)
      }
    );
  };
}
