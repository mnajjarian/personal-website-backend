import * as passport from 'passport';
import * as mongoose from 'mongoose';

require('./models/user');
const User = mongoose.model('User');

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


