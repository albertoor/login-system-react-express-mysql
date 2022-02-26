const express = require("express")
const dotenv = require("dotenv")
const app = express()
dotenv.config()
const cors = require("cors")

var corsOptions = {
  origin: process.env.ORIGIN
}

// Settings
app.set('port', process.env.PORT || 8000)


// Middlewares
app.use(express.json())
app.use(cors(corsOptions));


// Routes
app.use(require("./routes/auth"))

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
})