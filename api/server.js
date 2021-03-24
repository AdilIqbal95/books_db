const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

// Root route
server.get('/', (req, res) => res.send('wow, world!'))

const db = require ('./dbConfig')

function getBooks() {
    return new Promise (async (resolve, reject) => {
        try {
            let bookData = await db.query(`SELECT * FROM books`);
            let book = bookData.rows
            console.log(book)
            resolve (book);
        } catch (err) {
            reject('books not found');
        }
    })
}

//all books

server.get('/books', async (req,res) => res.send(
    await getBooks()
))

module.exports = server