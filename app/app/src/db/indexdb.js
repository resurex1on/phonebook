const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/usersdb", { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
  console.log('db is working!')
})
