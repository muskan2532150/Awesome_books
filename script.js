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
    const displayContainer = document.querySelector('.book-display-container');
    const bookContainer = document.createElement('div');
    bookContainer.className = 'book-container';
    const id = this.storedBooks.length + 1;
    bookContainer.setAttribute('id', id);
    bookContainer.innerHTML = `
        <p class="book-title">"${book.title}" by ${book.author}</p>
        <button class="remove-btn">Remove</button>
    `;
    displayContainer.appendChild(bookContainer);
  }

  removeBook(id) {
    for (let i = 0; i < this.storedBooks.length; i += 1) {
      if (this.storedBooks[i].id === parseInt(id, 10)) {
        this.storedBooks.splice(i, 1);
      }
    }
    setlocalStorage(this.storedBooks);
  }
}
const store = new BookDetails();

const addToBook = document.querySelector('.book-form');
addToBook.addEventListener('submit', () => {
  // creat a new objet and add to it
  const title = addTitle.value;
  const author = addAuthor.value;
  const id = store.storedBooks.length + 1;
  const book = new Books(title, author, id);
  //  Push the book obj to array
  store.storedBooks.push(book);
  // add book to List
  store.addBook(book);
  setlocalStorage(store.storedBooks);
  bookSection.classList.add('active');
  contact.classList.remove('active');
  addBook.classList.remove('active');
});

const getbooks = getlocalStorage();
if (getbooks != null) {
  getbooks.forEach((bk) => {
    store.addBook(bk);
    store.storedBooks.push(bk);
  });
}

const removeBooks = document.querySelectorAll('.remove-btn');
removeBooks.forEach((book) => {
  book.addEventListener('click', () => {
    store.removeBook(book.parentElement.id);
    book.parentElement.remove();
  });
});


// --
const navLink = document.querySelectorAll('.nav');
const contact = document.querySelector(".contact")
const bookSection = document.querySelector(".display-area");
const addBook = document.querySelector(".add-book");

console.log(navLink)
navLink.forEach((link,index) => {
  link.addEventListener('click', ()=>{
    // console.log(link)
    if(index===2){
      contact.classList.add('active');
      addBook.classList.remove('active');
      bookSection.classList.remove('active');
    } else if(index===0){
    bookSection.classList.add('active');
    contact.classList.remove('active');
    addBook.classList.remove('active');
    }
    else {
      addBook.classList.add('active');
      bookSection.classList.remove('active');
      contact.classList.remove('active');
    }
  })
});