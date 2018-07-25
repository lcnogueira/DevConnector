const Validator = require("validator");
const { isEmpty } = require("./helper");
const {
  MIN_NAME_SIZE,
  MAX_NAME_SIZE,
  MIN_PASSWORD_SIZE,
  MAX_PASSWORD_SIZE
} = require("./CONSTANTS");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // if(Validator.isEmpty(data.name)){
  //   errors.name = "Name field is required"
  // }

  //Validate name
  if (
    !Validator.isLength(data.name, { min: MIN_NAME_SIZE, max: MAX_NAME_SIZE })
  ) {
    errors.name = `Name must be between ${MIN_NAME_SIZE} and ${MAX_NAME_SIZE} characters`;
  }
  if (Validator.isEmpty(data.name)) errors.name = "Name field is required";

  //Validate email
  if (Validator.isEmpty(data.email)) errors.email = "Email field is required";
  if (!Validator.isEmail(data.email)) errors.email = "Email is invalid";

  //Validate password and confirm password
  if (Validator.isEmpty(data.password))
    errors.password = "Password field is required";
  if (
    !Validator.isLength(data.password, {
      min: MIN_PASSWORD_SIZE,
      max: MAX_PASSWORD_SIZE
    })
  ) {
    errors.password = `Password must be between ${MIN_PASSWORD_SIZE} and ${MAX_PASSWORD_SIZE} characters`;
  }

  if (Validator.isEmpty(data.password2))
    errors.password2 = "Confirm Password field is required";

  if (!Validator.equals(data.password, data.password2))
    errors.password2 = "Passwords must match";

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
