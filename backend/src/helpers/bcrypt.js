const bcrypt = require("bcrypt")
const bcryptHelpers = {}

bcryptHelpers.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  return hash
}

bcryptHelpers.comparePassword = async (password, passwordUser) => {
  const match = await bcrypt.compare(password, passwordUser)
  return match
}

module.exports = bcryptHelpers