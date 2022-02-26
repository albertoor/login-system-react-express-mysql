const db = require("../db/db")
const bcryptHelpers = require("../helpers/bcrypt")
const validationHelpers = require("../helpers/validations")
const jwt = require("jsonwebtoken")

const queryToCheckEmail = "SELECT email FROM users WHERE email = ?"
const queryToInsertUser = "INSERT INTO users (email, password, fullname) VALUES (?,?,?)"
const queryToCheckUserCredentials = "SELECT * FROM users WHERE email = ?;"

// Register new user controller
exports.registerHandle = (req, res) => {
  const { email, password, fullname } = req.body
  const { validPwd, rulesPwd } = validationHelpers.validatePassword(password)
  const validEmail = validationHelpers.validateEmail(email)
  let errors = []

  if (!email && !fullname && !password) errors.push("Please fill fields")

  if (errors.length === 1) {
    res.json({ success: false, message: errors.flat() })
  } else {
    if (validPwd === false) errors.push(rulesPwd.map((detail) => detail.message))
    if (validEmail === false) errors.push("Email not valid example@gmail.com")
    if (errors.length === 0) {
      db.query(queryToCheckEmail, [email], async (err, rows, fields) => {
        if (!err) {
          if (rows.length > 0)
            res.json({ success: false, message: ["Email number already exits"] })
          else {
            let passwordHashed = await bcryptHelpers.encryptPassword(password)
            db.query(queryToInsertUser, [email, passwordHashed, fullname], (err, rows, fields) => {
              if (!err) res.status(200).json({ success: true, message: "Account created" })
              else console.log(err)
            })
          }
        } else console.log(err)
      })
    } else res.json({ success: false, message: errors.flat() })
  }
}

// Login user 
exports.loginHandle = (req, res) => {
  const { email, password } = req.body

  db.query(queryToCheckUserCredentials, [email], async (err, rows, fields) => {
    if (err) console.log(err)
    else if (rows.length > 0) {
      console.log(rows)
      const match = await bcryptHelpers.comparePassword(password, rows[0].password)
      if (match) {
        const id = rows[0].id
        const token = jwt.sign({ id }, process.env.DB_SECRET_JWT, {
          expiresIn: 300
        })
        res.status(200).json({ token: token, id: rows[0].id })
      } else res.json({ auth: false, message: "Wrong email or password" })
    } else res.json({ message: "User doesn't exist" })
  })
}

// IsAuthenticated
exports.isAuthenticated = (req, res) => { }






