import * as passport from "passport";
import * as mongoose from "mongoose";
import * as localStrategy from "passport-local";
import * as crypto from "crypto";
import { UserModel } from "../models/user";

function validPassword(password: string, hash: string, salt: string): boolean {
  const hashVerify = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");
  return hash === hashVerify;
}

const LocalStrategy = localStrategy.Strategy;

require("../models/user");
const User = mongoose.model("User");

passport.use(
  new LocalStrategy(function(
    username: string,
    password: string,
    cb: CallableFunction
  ): void {
    User.findOne({ username })
      .then((user: UserModel) => {
        if (!user) {
          return cb(null, false);
        }

        const isValid = validPassword(password, user.hash, user.salt);
        if (isValid) {
          return cb(null, user);
        } else {
          return cb(null, false);
        }
      })
      .catch((err: Error) => {
        cb(err);
      });
  })
);

passport.serializeUser(function(user: UserModel, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(userId, cb) {
  User.findById(userId, function(err, user) {
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
});
