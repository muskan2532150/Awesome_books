import Books from './books.js';

const addTitle = document.getElementById('Title');
const addAuthor = document.getElementById('Author');

function getlocalStorage() {
  return JSON.parse(localStorage.getItem('Book Details'));
}

function setlocalStorage(store) {
  localStorage.setItem('Book Details', JSON.stringify(store));
}

class BookDetails {
  constructor(book = []) {
    this.storedBooks = book;
  }

  addBook(book) {
    setlocalStorage(this.storedBooks);
    console.log(this.storedBooks);
    const displayContainer = document.querySelector('.book-display-container');
    const bookContainer = document.createElement('div');
    bookContainer.className = 'book-container';
    bookContainer.innerHTML = `
        <p class="book-title">"${book.title}" by ${book.author}</p>
        <button class="remove-btn">Remove</button>
    `;
    displayContainer.appendChild(bookContainer);
  }

  removeBook(index, n = 1) {
    this.storedBooks.splice(index, n);
    setlocalStorage(this.storedBooks);
  }
}

const store = new BookDetails();

const addToBook = document.querySelector('.book-form');
addToBook.addEventListener('submit', () => {
  // creat a new objet and add to it
  const title = addTitle.value;
  const author = addAuthor.value;
  const book = new Books(title, author);
  //  Push the book obj to array
  store.storedBooks.push(book);
  // add book to List
  store.addBook(book);
  
});

const getbooks = getlocalStorage();
console.log(getbooks);
if (getbooks != null) {
  getbooks.forEach((bk) => {
    store.addBook(bk);
    store.storedBooks.push(bk);
    console.log(bk);
  });
} 

const removeBooks = document.querySelectorAll('.remove-btn');
removeBooks.forEach((book, index) => {
  book.addEventListener('click', () => {
    store.removeBook(index);
    book.parentElement.remove();
  });
});
