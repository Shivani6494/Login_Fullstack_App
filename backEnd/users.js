const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const UsersSchema = new Schema(
  {
    regemail: Number,
    regusername: String,
    regpassword: String ,
    regconfirmpassword: String
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Users", UsersSchema,"users");