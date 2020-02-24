import  { Request, Response }  from "express";
import { ProfileModel } from '../models/profile';
import { model } from "mongoose";

require('../models/profile');
const Profile = model<ProfileModel>('Profile');

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