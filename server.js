const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');


//initialize dotenv method
dotenv.config ( {path:'config.env'} );
const app = express();
const PORT = process.env.PORT || 5000;

//Log requests with Morgan
app.use(morgan('tiny'));

//parse requiests to body parser
app.use(bodyParser.urlencoded({extended: true})); 

//set view engine
app.set("view engine","ejs");
//load assets
app.use('/css', express.static(path.resolve(__dirname,"assets/css")));
app.use('/js', express.static(path.resolve(__dirname,"assets/js")));



app.get("/", (req, res) => {
   res.render("index");
})

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
})