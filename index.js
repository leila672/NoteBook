const express = require('express');
const cors = require('cors');
const prisma = require('./prisma');
const body_parser = require("body-parser");
const noterouter = require('./Routes/noteRoute')

const app = express()


const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

//******* Middlewraes */
app.use((request, response, next) => {
    console.log("First MW.... ", request.url, request.method);
    next();
});

//Routers 
app.use(cors());
app.use(express.json()) // json
app.use(body_parser.urlencoded({ extended: false }))//form
app.use(noterouter);

//Not FOUND
app.use((request, response) => {
    response.status(404).send("Page is Not Found");
});

//Error MiddleWrae
app.use((error, request, response, next) => {   //Function.length
    let status = error.status || 500;
    response.status(status).json({ message: error + "" }); //error-> deploy "something went wrong"
});





