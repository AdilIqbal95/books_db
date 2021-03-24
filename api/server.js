const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

// Root route
server.get('/', (req, res) => res.send('wow, world!'))

function getBooks() {
    return new Promise (async (resolve, reject) => {
        try {
            let bookData = await db.query(`SELECT * FROM books`);
            let book = bookData.rows
            resolve (book);
        } catch (err) {
            reject('books not found');
        }
    })
}

//all books
const db = require ('./dbConfig')

server.get('/books', (req,res) => res.send(
    getBooks()
))

module.exports = server