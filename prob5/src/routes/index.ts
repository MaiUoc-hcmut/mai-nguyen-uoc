const BookRouter = require('./book');
import { Express } from "express";

function route (app: Express) {
    app.use('/api/v1/books', BookRouter);
}

module.exports = route;