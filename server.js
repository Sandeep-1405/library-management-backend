const express = require('express');
const cors = require('cors');
const connectToDb = require('./db');
const studentRouter = require('./routes/studentRoutes');
const dotenv = require('dotenv').config();
const path = require('path');
const bookRouter = require('./routes/bookRoutes');
const libraryRouter = require('./routes/libraryRoutes');

const app = express();

app.use(express.json());
app.use(cors());

connectToDb();

app.use("/uploads", express.static(path.join(__dirname,"uploads")));

app.use('/api/student',studentRouter);
app.use('/api/book',bookRouter);
app.use('/api/library',libraryRouter);

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Server Started on ${port} port`);
})