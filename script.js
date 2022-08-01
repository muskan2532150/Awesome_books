let books = {
    Title: String,
    Author : String
};

const BookDetails = [];

const Add = document.getElementById('Add');
const Title = document.getElementById('Title');
const Author = document.getElementById('Author');

Add.onclick = function () {
books.Title = Title.value;
books.Author = Author.value;
BookDetails.push(books);
console.log(BookDetails);
localStorage.setItem('Book Details',JSON.stringify(BookDetails));
}
