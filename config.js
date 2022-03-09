// import dotenv for local variables
const dotenv = require('dotenv').config();

// export this module to use it on index
module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'local_development',
    URI:  process.env.URI ||  'mongodb://localhost/todolist',
    PORT: process.env.PORT || 27017
}