require( 'dotenv' ).config();
const mongoose = require('mongoose');

module.exports = function() {
  const db = (process.env.MODE === "DEV" ? process.env.DB_DEV : process.env.DB_PRODUCTION);
  mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log(`Connected to database...`));
}