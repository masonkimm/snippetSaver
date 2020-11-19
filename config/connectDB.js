// const { heroku } = require("./creds");
// const { creds }

// var connection = null;

// if (process.env.database) {
//   var herokuApp = require('./creds');
//   heroku = {
//     host: herokuApp.host,
//     user: herokuApp.user,
//     password: herokuApp.password,
//     database: herokuApp.database,
//     port: herokuApp.port,
//   };
// } else {
//   var creds = require('../creds.json');
//   local = {
//     host: creds.host,
//     user: creds.user,
//     password: creds.pw,
//     database: creds.database,
//     port: creds.port,
//   };
// }

// module.exports = {
//   local: {
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "rlatjdwls",
//     database: "snippetSaver",
//   },
//   heroku:{
//     host: "h2cwrn74535xdazj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//     port: 3306,
//     user: "kbc85gjsfz5f5n6q",
//     password: "fa1n6kzm4zt2oxnn",
//     database: "sm2rw2jg4ynipots",
//   }
// };
var localCreds = require('./creds');
var webCreds = require('./creds')

module.exports = {
  local: {
    host: localCreds.db.host,
    port: localCreds.db.port,
    user: localCreds.db.user,
    password: localCreds.db.password,
    database: localCreds.db.database,
  },
  heroku:{
    host: webCreds.db.host,
    port: webCreds.db.port,
    user: webCreds.db.user,
    password: webCreds.db.password,
    database: webCreds.db.database,
  }
};
