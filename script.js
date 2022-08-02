const addTitle = document.getElementById('Title');
const addAuthor = document.getElementById('Author');

class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

function getlocalStorage() {
  return JSON.parse(localStorage.getItem('Book Details'));
}

function setlocalStorage(store) {
  localStorage.setItem('Book Details', JSON.stringify(store));
  console.log(store);
}

class BookDetails {
  constructor(book = []) {
    this.storedBooks = book;
  }
  addBook = function(book) {
    const displayContainer = document.querySelector('.book-display-container');
    displayContainer.innerHTML += `
            <p class="book-title">${book.title}</p>
            <p class="book-author">${book.author}</p>
            <button class="remove-btn">remove</button>
            <hr>
        `;
  }

  removeBook = function(index, n = 1) {
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
  // store in local storage
  setlocalStorage(store.storedBooks);
});

function load() {
  const getbooks = getlocalStorage();
  if (getbooks != null) {
    getbooks.forEach((bk) => {
      store.addBook(bk);
      store.storedBooks.push(bk);
      console.log(store.storedBooks);
    });
  }
}

// Load books
load();

const close = document.querySelectorAll('.remove-btn');
close.forEach((ele, index) => {
  ele.addEventListener('click', () => {
    store.removeBook(index);
    // setTimeout(window.location.reload(), 2000);
  });
});
