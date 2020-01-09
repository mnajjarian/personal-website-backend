import * as express from "express";
import { config } from "dotenv";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as mongoose from "mongoose";
import * as morgan from "morgan";
import * as passport from "passport";
import * as cors from "cors";
import * as helmet from "helmet";
import * as path from 'path';
import router from "./routes/index";

const app = express();

app.use(helmet());
app.use(cors());
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

app.use(express.static("build"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig");


app.use("/api", router);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'), (err) => {
    if(err) {
      res.status(500).send(err)
    }
  })
})


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
