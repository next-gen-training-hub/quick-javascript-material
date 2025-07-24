// {} => object
const books = [
  {
    id: 1,
    title: 'Laskar Pelangi',
    author: 'Andrea Hirata',
    genre: ['Fiction', 'Education'],
  },
  {
    id: 2,
    title: 'Bumi Manuasia',
    author: 'Pramoedya Ananta Toer',
    genre: ['Fiction', 'Historical'],
  },
  {
    id: 3,
    title: 'Edensor',
    author: 'Andrea Hirata',
    genre: ['Fiction', 'Advanture'],
  },
];

// looping modern
books.forEach((book) => {
  console.log(book);
});

// map --> return array baru
const newBook = books.map((book) => {
  return {
    id: book.id,
    title: book.title,
  };
});

console.log(newBook);

// WHERE id = 1 -> 1x ketemu ya sudah berhenti
const bookID = 1;
const bookByID = books.find((b) => b.id === 1);
console.log(bookByID);

// WHERE author = Andrea Hirata
const bookAuthor = 'Andrea';
const bookByAuthor = books.filter(
  (b) => b.author.toLowerCase() === bookAuthor.toLowerCase()
);
console.log(bookByAuthor);

// WHERE author LIKE Andrea Hirata
const bookAuthor2 = 'Andrea';
const bookByAuthorLike = books.filter((b) =>
  b.author.toLowerCase().includes(bookAuthor2.toLowerCase())
);
console.log(bookByAuthorLike);
