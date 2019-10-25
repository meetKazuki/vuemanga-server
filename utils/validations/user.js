const { check, param } = require('express-validator');

module.exports = {
  profileSchema: [
    check('name')
      .optional()
      .trim()
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('name cannot be blank')
      .isLength({ min: 2 })
      .withMessage('name should be between 2 to 15 characters')
      .matches(/^[A-Za-z ]+$/)
      .withMessage('name must contain only letters and spaces'),

    check('username')
      .optional()
      .trim()
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('username cannot be blank')
      .isLength({ min: 2, max: 20 })
      .withMessage('username should be between 2 to 20 characters')
      .customSanitizer(userName => userName.toLowerCase()),
  ],

  usernameSchema: [
    param('username')
      .optional()
      .trim()
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('username cannot be blank')
      .isLength({ min: 2, max: 20 })
      .withMessage('username should be between 2 to 20 characters')
      .customSanitizer(userName => userName.toLowerCase()),
  ]
};
