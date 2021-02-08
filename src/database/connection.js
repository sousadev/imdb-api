const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindOne: true,
  useFindAndUpdate: false,
  //useFindOneAndDelete: true,
};

mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_DATABASE}.mongodb.net/data?retryWrites=true&w=majority`,
  options
);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Database connetion: OK!');
});

module.exports = db;
