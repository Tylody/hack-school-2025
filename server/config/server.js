// import dotenv
const dotenv = require('dotenv');

dotenv.config();

// create config object witH PORT
const config = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
};

module.exports = config;
