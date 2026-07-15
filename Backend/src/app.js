import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import authRouter from "./routes/auth.route.js";
import productRouter from './routes/product.routes.js'
import cors from "cors";
import passport, { strategies } from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { config } from "./config/config.js";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
// Ye middleware HTML forms se aane wale data ko parse karta hai, taaki aap req.body me us data ko access kar sako.👇
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(cors({
//     origin: "http://localhost:5173",
//     methods: [ "GET", "POST", "PUT", "DELETE" ],
//     credentials: true
// }))

app.use(passport.initialize());

passport.use(
  new GoogleStrategy(
    {
      clientID: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    },
  ),
);

// Health cheackup
// app.get("/", (req, res) => {
//   res.send("Hello from backend");
// });

app.use("/api/auth", authRouter);
app.use("/api/products", productRouter)

export default app;
