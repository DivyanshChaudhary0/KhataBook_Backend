
require('dotenv').config()
const app = require("./src/app");

const connectDB = require("./src/db/db")
connectDB();

app.listen(process.env.PORT ,function(){
    console.log("app is running on 3000");
})