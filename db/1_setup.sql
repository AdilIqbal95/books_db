DROP TABLE IF EXISTS books;

CREATE TABLE books (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    authorid int FOREIGN KEY NOT NULL
);

DROP TABLE IF EXISTS authors;

CREATE TABLE authors (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    birthplace varchar(255) NOT NULL
);
