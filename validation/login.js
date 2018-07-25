const Validator = require("validator");
const { isEmpty } = require("./helper");
const {
  MIN_NAME_SIZE,
  MAX_NAME_SIZE,
  MIN_PASSWORD_SIZE,
  MAX_PASSWORD_SIZE
} = require("./CONSTANTS");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  //Validate email
  if (!Validator.isEmail(data.email)) errors.email = "Email is invalid";
  if (Validator.isEmpty(data.email)) errors.email = "Email field is required";

  //Validate password
  if (Validator.isEmpty(data.password))
    errors.password = "Password field is required";

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
