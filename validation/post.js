const Validator = require("validator");
const { isEmpty } = require("./helper");
const { MIN_POST_SIZE, MAX_POST_SIZE } = require("./CONSTANTS");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (
    !Validator.isLength(data.text, { min: MIN_POST_SIZE, max: MAX_POST_SIZE })
  ) {
    errors.text = `Post must be between ${MIN_POST_SIZE} and ${MAX_POST_SIZE} characters`;
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
