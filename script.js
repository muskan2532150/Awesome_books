const addTitle = document.getElementById("Title")
const addAuthor = document.getElementById("Author")
class books {
  constructor(title, author){
    this.title = title;
    this.author = author;
  }
}

class displayBooks {
  static display() {
    const storedBooks = [
      {
        title: 'Title 1',
        author: 'Author 1'
      }, 
      {
        title: 'Title 2',
        author: 'Author 2'
      }
    ];
    const books = storedBooks;
    books.forEach(book => displayBooks.addBook(book))
  }

  static addBook(book){
    const displayContainer = document.querySelector(".book-display-container")
    displayContainer.innerHTML += `
      <p class="book-title">${book.title}</p>
      <p class="book-author">${book.author}</p>
      <button class="remove-btn">remove</button>
      <hr>
    `
  }


}

const addBook = document.querySelector('.book-form')
addBook.addEventListener('submit', (e) =>{
  e.preventDefault();
  //creat a new objet and add to it
  const title = addTitle.value;
  const author = addAuthor.value;

  const book = new books(title, author);

  //add book to List
  displayBooks.addBook(book)
})

//Load books
document.addEventListener('DOMContentLoaded', displayBooks.display)

