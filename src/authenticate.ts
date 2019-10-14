import * as bcrypt from 'bcrypt';
import * as passport from 'passport';
import * as jwt from 'jsonwebtoken';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from './models/user';

exports.local = passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.getToken = (user) => {
    return jwt.sign(user, process.env.SECRET_KEY, { expiresIn: 3600 })
}

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;

exports.jwtPassport = passport.use(new JwtStrategy(opts, 
    (jwt_payload, done) => {
        console.log('Jwt Payload: ', jwt_payload);
        User.findOne({ _id: jwt_payload._id }, (err, user) => {
            if(err) {
                return done(err, false)
            }
            else if(user) {
                return done(null, user)
            }
            else {
                return done(null , false)
            }
        });
    }));

exports.verifyUser = passport.authenticate('jwt', { session: false });

