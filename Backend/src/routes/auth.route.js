import express from 'express'
import { Router } from 'express'
import {validateLoginUser, validateRegisterUser} from '../validator/auth.validator.js'
import {register, login, googleCallback, getMe} from '../controllers/auth.controller.js'
import passport from 'passport'
// import { config } from 'dotenv'
import { config } from '../config/config.js'
import { authenticateUser } from '../middlewares/auth.middleware.js'


const router = Router()

router.post('/register', validateRegisterUser, register)

router.post('/login', validateLoginUser, login)

// Google Login
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// Google Callback
// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "/login",
//     session: false, // JWT use kar rahe ho to false
//   }),
//   (req, res) => {
//     res.send("Google Login Successful");
//   }
// );

router.get("/google/callback",
    passport.authenticate("google", {
        session: false,
        failureRedirect : config.NODE_ENV == "development" ?  'http://localhost:5173/login' : '/login'
    }),
    googleCallback,
)

/**
 * @route GET /api/auth/me
 * @description Get the authenticated user's profile
 * @access Private
 */
router.get('/me', authenticateUser, getMe)



export default router