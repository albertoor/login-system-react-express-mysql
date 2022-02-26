const passwordValidator = require("password-validator")
const emailValidator = require("email-validator")
const validationHelpers = {}

validationHelpers.validatePassword = (password) => {
  var schema = new passwordValidator()
  schema
    .is().min(8)
    .is().max(255)
    .has().uppercase()
    .has().lowercase()
    .has().digits(2)

  return {
    validPwd: schema.validate(password),
    rulesPwd: schema.validate(password, { details: true })
  }
}

validationHelpers.validateEmail = (email) => {
  return emailValidator.validate(email)
}

module.exports = validationHelpers


