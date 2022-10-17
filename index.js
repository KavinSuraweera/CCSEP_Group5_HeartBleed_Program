import express from 'express'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import https from "https";
import path from 'path';
import fs from 'fs';
import * as url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// const mongoose = require('mongoose');

import usersRoutes from './routes/users.js'

const app = express();
const PORT = process.env.PORT || 5050;

const DB_URL = 'mongodb+srv://kavin:kavin123@cluster0.aazvzmq.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
    console.log("**---> Connected to the database <---**");
}).catch((err) => {
    console.log(err.message);
})

app.use(bodyParser.json())

app.use(`/users`, usersRoutes);

app.get('/', (req, res, next) => {
    res.send('Hello from SSL Server.')
});

const sslServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert','cert.pem'))
}, app);

sslServer.listen(PORT, () => console.log(`secure server 🚀🔑 on port : https://localhost:${PORT}`))


// app.listen(PORT, () => console.log(`Server running on port : http://localhost:${PORT}`));






