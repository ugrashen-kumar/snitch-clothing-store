import { body, validationResult } from "express-validator";

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateRegisterUser = [
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("Invalid Email Formate"),
  body("contact")
    .notEmpty()
    .withMessage("Contact is required")
    .matches(/^\d{10}$/)
    .withMessage("Contact must be a 10-digit number"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must have 6 character in length"),
  body("fullname")
    .notEmpty()
    .withMessage("Fullname is required")
    .isLength({ min: 2 })
    .withMessage("full name must have 2 character in length"),
  body("isSeller")
    .isBoolean()
    .withMessage("isSeller must have a Boolean value"),
  validateRequest,
];

export const validateLoginUser = [
  body("email").isEmail().withMessage("Invalid email format"),
  body("password").notEmpty().withMessage("Password is required"),
  validateRequest,
];
