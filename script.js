const addTitle = document.getElementById("Title");
const addAuthor = document.getElementById("Author");

class books {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

const storedBooks = [
    //   {
    //     title: 'Title 1',
    //     author: 'Author 1'
    //   }, 
    //   {
    //     title: 'Title 2',
    //     author: 'Author 2'
    //   }
];


function addBook(book) {
    const displayContainer = document.querySelector(".book-display-container")
    displayContainer.innerHTML += `
      <p class="book-title">${book.title}</p>
      <p class="book-author">${book.author}</p>
      <button class="remove-btn">remove</button>
      <hr>
  `

}

const addToBook = document.querySelector('.book-form')
addToBook.addEventListener('submit', (e) => {
    e.preventDefault();
    //creat a new objet and add to it
    const title = addTitle.value;
    const author = addAuthor.value;

    const book = new books(title, author);
    storedBooks.push(book);
    //add book to List
    addBook(book);
    localStorage.setItem('Book Details', JSON.stringify(storedBooks));

})

function load() {

    let getbooks = JSON.parse(localStorage.getItem('Book Details'));
    if (getbooks != null) {
        getbooks.forEach(bk => {
            addBook(bk);
            storedBooks.push(bk);
        })
    }
}

//Load books
load();


const close = document.querySelectorAll('.remove-btn');
close.forEach((ele,index) => {
    ele.addEventListener('click',()=>{
       storedBooks.splice(index,1);
       localStorage.setItem('Book Details', JSON.stringify(storedBooks));
       
    })     
});
