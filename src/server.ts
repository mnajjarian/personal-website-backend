import * as express from "express";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";

import * as morgan from "morgan";
import * as passport from "passport";
import * as session from "express-session";
import { sessionStore } from "./config/database";
import * as cors from "cors";
import * as helmet from "helmet";
import * as path from "path";
import router from "./routes/index";

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("build"));
app.use(cookieParser());
app.use(morgan("dev"));

app.use(helmet());

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      sameSite: true,
      secure: true
    }
  })
);

require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", router);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
