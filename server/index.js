const express = require("express");
const cors = require("cors")
const app = express();
const dbConnetion = require("./config/database")
const route = require("./Routes/route")
require("dotenv").config();


dbConnetion();
const PORT = process.env.PORT || 5000;
app.use(cors({
     origin:"*",
}))
app.use(express.json());
app.use("/api/v1",route)
app.get("/",(req,res) => {
     return res.json({
         success:true,
         message:"your server is up and running..."
     })
})

app.listen(PORT,() => {
     console.log(`app is listinng at port ${PORT}`)
})