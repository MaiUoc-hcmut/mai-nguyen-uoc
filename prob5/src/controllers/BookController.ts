const Book = require('../db/model/book');
import { Request, Response, NextFunction } from 'express';
import { Op } from 'sequelize';

class BookController {

    // [POST] /books
    createBook = async (req: Request, res: Response, _next: NextFunction) => {
        try {
            const body = req.body;

            const newBook = await Book.create({ ...body });

            res.status(201).json(newBook);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }

    // [GET] /books
    getBookList = async (req: Request, res: Response, _next: NextFunction) => {
        try {
            const { category, author } = req.query;

            let categoryCondition: any[] = [];
            let authorCondition: any[] = [];


            if (!category) {

            } else if (Array.isArray(category)) {
                categoryCondition.push(...category);
            } else {
                categoryCondition.push(category);
            }

            if (!author) {

            } else if (Array.isArray(author)) {
                authorCondition.push(...author);
            } else {
                authorCondition.push(author);
            }

            let queryOption = {
                where: {
                    [Op.and]: [
                        categoryCondition.length ? { category: categoryCondition } : {} ,
                        authorCondition.length ? { author: authorCondition } : {} ,
                    ]
                }
            }

            const books = await Book.findAll(queryOption);

            res.status(200).json(books);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }

    // [GET] /books/:id
    getBookDetail = async (req: Request, res: Response, _next: NextFunction) => {
        try {
            const id = req.params.id;

            const book = await Book.findByPk(id);
            if (!book) return res.status(404).json({ message: "Book not found!" });

            res.status(200).json(book);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }

    // [PUT] /books/:id
    updateBookDetail = async (req: Request, res: Response, _next: NextFunction) => {
        try {
            const id = req.params.id;
            const book = await Book.findByPk(id);
            if (!book) return res.status(404).json({ message: "Book bot found!" });

            const body = req.body;
            await book.update(body);

            res.status(200).json(book);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }

    // [DELETE] /books/:id
    deleteBook = async (req: Request, res: Response, _next: NextFunction) => {
        try {
            const id = req.params.id;
            const book = await Book.findByPk(id);
            if (!book) return res.status(404).json({ message: "Book bot found!" });

            await book.destroy();

            res.status(200).json({
                message: "Book has been deleted!",
                id
            });
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
}


module.exports = new BookController();