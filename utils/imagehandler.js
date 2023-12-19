const express = require('express');
const imageHandler = express();
const cloudinary = require('cloudinary').v2;
const bodyParser = require('body-parser');
require('dotenv').config()

imageHandler.use(bodyParser.json());
imageHandler.use(bodyParser.urlencoded({ extended: true }));

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

imageHandler.get('/', (req, res, next) => {
    res.json({ message: "Server is responding to Cloudinary."});
    next();
});

imageHandler.post('/image-upload', (req, res) => {
    const data = {
        image: req.body.image,
    }

    cloudinary.uploader.upload(data.image)
    .then((res) => {
        res.status(200).send({
            message: "Image upload successful!",
            res,
        });
    }).catch((err) => {
        res.status(500).send({
            message: "Image upload failed.",
            err,
        });
    });
});

module.exports = imageHandler;