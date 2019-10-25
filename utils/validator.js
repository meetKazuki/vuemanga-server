const { matchedData, validationResult } = require('express-validator');

module.exports = (schemas) => {
  const validatorCheck = (req, res, next) => {
    const errors = validationResult(req);
    req = { ...req, ...matchedData(req) };

    if (!errors.isEmpty()) {
      const mapErrors = Object
        .entries(errors.mapped())
        .reduce(
          (accumulator, [key, value]) => {
            accumulator[key] = value.msg;
            return accumulator;
          }, {}
        );
      return res.status(400).json(mapErrors);
    }
    return next();
  };
  return [...(schemas.length && [schemas]), validatorCheck];
};
