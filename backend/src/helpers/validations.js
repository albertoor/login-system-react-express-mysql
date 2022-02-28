const passwordValidator = require("password-validator")
const emailValidator = require("email-validator")
const validationHelpers = {}

validationHelpers.validatePassword = (password) => {
  var schema = new passwordValidator()
  schema
    .is().min(8, "Should have a minimum length of 8 characters")
    .is().max(255)
    .has().uppercase(1, 'Maximun 1 char in uppercase please')
    .has().lowercase(1, 'Maximun 1 char in lowecase please')
    .has().digits(2, 'Minimun 2 digits')

  return {
    validPwd: schema.validate(password),
    rulesPwd: schema.validate(password, { details: true })
  }
}

validationHelpers.validateEmail = (email) => {
  return emailValidator.validate(email)
}

module.exports = validationHelpers


