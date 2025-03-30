const express = require('express');
const PORT = 8001;
const path = require('path');
const app = express();
const URL = require('./models/url.js');
const cookieParser = require('cookie-parser');

const { connectToMongoDB } = require('./module.js');
const { restrictToLoggedInUserOnly , checkAuth } = require('./middlewares/auth.js');

const urlRoute = require('./routes/url.js');
const staticRoute = require('./routes/staticRouter.js')
const userRoute = require('./routes/user.js');

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
.then((res) => {
  console.log("Mongo-db connected");
}).catch((err) => {
  console.log("There is error in connecting mongoDb", err);
})

app.use(express.json());
app.use(express.urlencoded({extended : false})); 
app.use(cookieParser());

app.use("/url", restrictToLoggedInUserOnly , urlRoute);
app.use('/', checkAuth , staticRoute);
app.use('/user', userRoute);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))