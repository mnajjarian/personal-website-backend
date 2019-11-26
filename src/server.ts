import * as express from "express";
import { config } from "dotenv";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as mongoose from "mongoose";
import * as morgan from "morgan";
import * as session from "express-session";
import * as passport from "passport";
import * as cors from "cors";
import * as helmet from "helmet";
import router from "./routes/index";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);
if (process.env.NODE_ENV !== "production") {
  config();
}

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
mongoose
  .connect(process.env.MONGODB_URI || "", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("connected to database ", process.env.MONGODB_URI);
    return null;
  })
  .catch((err: Error) => {
    console.log(err);
    return null;
  });
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig");

app.use("/", router);

app.use("/public", express.static("public"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
