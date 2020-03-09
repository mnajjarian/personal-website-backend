import * as mongoose from "mongoose";
import * as session from "express-session";
import * as connectMongo from "connect-mongo";
import { config } from "dotenv";

if (process.env.NODE_ENV !== "production") {
  config();
}

const MongoStore = connectMongo(session);

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true)
mongoose.set("useNewUrlParser", true)

mongoose
  .connect(process.env.MONGODB_URI || "")
  .then(() => {
    console.log("connected to database ", process.env.MONGODB_URI);
    return null;
  })
  .catch((err: Error) => {
    console.log(err);
    return null;
  });

export const sessionStore = new MongoStore({
  mongooseConnection: mongoose.createConnection(process.env.MONGODB_URI),
  collection: "sessions"
});
