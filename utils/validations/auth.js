const { check } = require('express-validator');

module.exports = {
  signupSchema: [
    check('name')
      .exists()
      .withMessage('No name specified')
      .trim()
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Name cannot be blank')
      .isLength({ min: 2 })
      .withMessage('Name should not be less than 2 characters')
      .matches(/^[A-Za-z ]+$/)
      .withMessage('Name must contain only letters and spaces'),

    check('username')
      .trim()
      .exists().withMessage('Username is required')
      .isLength({ min: 2, max: 20 })
      .withMessage('Username should be between 2 to 20 characters')
      .customSanitizer(userName => userName.toLowerCase()),

    check('email')
      .exists()
      .withMessage('No email specified')
      .trim()
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Email cannot be blank')
      .isEmail()
      .withMessage('Invalid email')
      .customSanitizer(email => email.toLowerCase()),
    
    check('password')
      .exists()
      .withMessage('Password is required')
      .trim()
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('No password specified')
      .isLength({ min: 5, max: 16 })
      .withMessage('Password should be between 8 to 15 characters')
      .isAlphanumeric()
      .withMessage('Password must be alphanumeric')
  ],

  signinSchema: [
    check('email')
      .exists()
      .withMessage('No email specified')
      .trim()
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Email cannot be blank')
      .isEmail()
      .withMessage('Invalid email')
      .customSanitizer(email => email.toLowerCase()),
    
    check('password')
      .exists()
      .withMessage('Password is required')
      .trim()
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('No password specified')
      .isLength({ min: 5, max: 16 })
      .withMessage('Password should be between 8 to 15 characters')
      .isAlphanumeric()
      .withMessage('Password must be alphanumeric')
  ]
}
