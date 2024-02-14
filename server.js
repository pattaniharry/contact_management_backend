const {Constants} = require("../constants");
const express = require("express"); 
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();/*dot env is a middle ware used to connect and env file which is used to deifne PORT and stuff  */



const app = express();
const port = process.env.PORT || 5000 ;

app.use(express.json()); // it is a built in middleware to parse the json received from the client 
app.use("/api/contacts", require("./routes/ContactRoutes"));
app.use(errorHandler);

app.listen(port,() => {
    console.log(`server is running on port${port}`)
})


