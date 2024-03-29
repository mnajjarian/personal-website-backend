import * as express from "express";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as compression from "compression";
import * as morgan from "morgan";
import * as passport from "passport";
import * as session from "express-session";
import { sessionStore } from "./config/database";
import * as cors from "cors";
import * as helmet from "helmet";
import * as path from "path";
import router from "./routes";

const corsConfig =
  process.env.NODE_ENV !== "production"
    ? {
        origin: "http://localhost:3000",
        credentials: true,
      }
    : {
        origin: process.env.DOMAIN_URL,
        credentials: true,
      };

process.on("uncaughtException", (e) => {
  console.log(e);
  process.exit(1);
});
process.on("unhandledRejection", (e) => {
  console.log(e);
  process.exit(1);
});
const app = express();

app.use(compression());
app.use(cors(corsConfig));
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
      //secure: true,
      //domain: process.env.DOMAIN_URL,
      httpOnly: true,
      sameSite: true,
    },
  })
);

require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", router);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

const { PORT = 3001 } = process.env;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
