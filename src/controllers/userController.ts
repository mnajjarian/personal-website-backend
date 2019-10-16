import { Router, Request, Response, NextFunction } from 'express';
import * as bodyParser from 'body-parser';
import * as passport from 'passport';
import * as mongoose from 'mongoose';
import { IUserModel } from '../models/user';

require('../models/user');
const User = mongoose.model<IUserModel>('User');


export class UserController {
    async signUp(req: Request, res: Response): Promise<void> {
        const { email, firstName, lastName, password } = req.body;
        const user = await new User({ email, firstName, lastName });
        try {
            const newUser = await User.register(user, password)
            res.json(newUser);
        } catch (error) {
            console.log(error)
            res.status(500).send(error.message)
        }
    }

    signIn(req: Request, res: Response, next: NextFunction): void {
        passport.authenticate(
            'local',
            (err: Error, user: IUserModel, info: any) => {
              if (err) return res.status(500).json(err.message);
      
              if (!user) return res.status(400).json(info.message);
      
              req.login(user, err => {
                if (err) return res.status(500).json(err.message);
      
                res.json(user);
              });
            }
          )(req, res, next);       
    }
}

/* const login = async (req: Request, res: Response) => {
    const token: string = authenticate.getToken({ _id: req.user._id })
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ success: true, token: token, status: 'You are Successfully login!' })
}

const signUp = (req: Request, res: Response) => {
    User.register(new User({ username: req.body.username }),
    req.body.password, (err: Error) => {
        if(err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({ err: err })
        }
        else {
            passport.authenticate('local', (req: Request, res: Response) => {
                const token: string = authenticate.getToken({ _id: req.user._id });
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({ success: true, token: token, status: 'Registration Successful!' })
            });
        }
    })
} */


