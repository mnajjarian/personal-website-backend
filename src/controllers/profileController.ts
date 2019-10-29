import  { Request, Response }  from "express";
import { IProfileModel } from '../models/profile';
import { model } from "mongoose";

require('../models/profile');
const Profile = model<IProfileModel>('Profile');

export class ProfileController {
    create(req: Request, res: Response): void {
        const profile = new Profile(req.body)
        profile.save()
        .then(profile => {
          res.status(200).json(profile)  
        }) 
    };
    async getProfile(req: Request, res: Response): Promise<Response> {
        const profile = await Profile.find({})
        return res.send(profile)
    }
}