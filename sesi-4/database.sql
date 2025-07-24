-- Active: 1714909454857@@127.0.0.1@5432@library
-- DDL
CREATE DATABASE library;

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  author VARCHAR(100)
  -- genre_id INT, -- salah
);

CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE
);

-- MANY to MANY
CREATE TABLE book_genres (
  book_id INT REFERENCES books(id),
  genre_id INT REFERENCES genres(id),
  PRIMARY KEY (book_id, genre_id)
);

-- ALTER
ALTER TABLE books ADD COLUMN pages INT;

-- DML
INSERT INTO books (title, author, pages) VALUES 
('Laskar Pelangi', 'Andrea Hirata', 529),
('Bumi Manusia', 'Pramoedya Ananta Toer', 329),
('Edensor', 'Andrea Hirata', 1120);
SELECT * FROM books;

INSERT INTO genres (name) VALUES 
('Fiction'), ('Education'), ('Adventure'), ('Historical');
SELECT * FROM genres;

INSERT INTO book_genres (book_id, genre_id) VALUES
(1, 1), (1, 2), (2, 1), (2, 4), (3, 1), (3, 3);
SELECT * FROM book_genres;

UPDATE books SET pages = 331 WHERE id = 2;
DELETE FROM books WHERE id = 3;

-- DML Lainnya
-- Ambil pages yang genap
SELECT * FROM books WHERE pages % 2 = 0;
-- Ambil pages paling kecil
SELECT * FROM books ORDER BY pages DECS LIMIT 1;
-- Menggunakan subquery
SELECT * FROM books WHERE pages = (SELECT MAX(pages) FROM books);

-- akalin di programming untuk di jadikan lower case
-- harap hati-hati penggunaan function bawaan, apalagi kalo di taruh di index
-- bisa lambat
-- akalin dengan membuat index khusus lower author
CREATE INDEX idx_lower_author ON books(LOWER(author));
SELECT * FROM books WHERE LOWER(author) LIKE '%andrea%';


-- JOIN
SELECT b.id, b.title, b.author, g.name FROM books b 
JOIN book_genres bg ON bg.book_id = b.id
JOIN genres g ON g.id = bg.genre_id;

-- GROUP BY, HAVING
-- Group by fiction
SELECT g.name, COUNT(g.id) as total_buku FROM books b 
JOIN book_genres bg ON bg.book_id = b.id
JOIN genres g ON g.id = bg.genre_id
GROUP BY g.name HAVING COUNT(g.id) > 1;

