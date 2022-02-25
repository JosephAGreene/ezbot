require( 'dotenv' ).config();
const passport = require("passport");
const session = require('express-session');
const Store = require('connect-mongo');

module.exports = function(app) {
  const db = (process.env.MODE === "DEV" ? process.env.DB_DEV : process.env.DB_PRODUCTION);
  app.use( session({
    secret: process.env.PASSPORT_SECRET,
    cookie: {
      maxAge: 60000 * 60 * 24
    }, 
    resave: false,
    saveUninitialized: false,
    store: Store.create({mongoUrl: db})
  }));
  app.use(passport.initialize());
  app.use(passport.session());
}