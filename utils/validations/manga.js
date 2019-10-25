const { check } = require('express-validator');

module.exports = {
  createMangaSchema: [
    check('mangaId')
      .exists()
      .withMessage('mangaId is required')
      .trim()
      .isString()
      .withMessage('Invalid mangaId'),

    check('status')
      .exists()
      .withMessage('specify manga status')
      .trim()
      .custom(
        (value) => ['READING', 'DROPPED', 'ONHOLD', 'COMPLETED', 'PLANNED'].includes(value)).withMessage('Invalid manga status'),
    
    check('name')
      .exists()
      .withMessage('No manga name specified')
      .trim()
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Manga name cannot be blank')
      .isLength({ min: 2 })
      .withMessage('Manga name should not be less than 2 characters'),
  ],
};
