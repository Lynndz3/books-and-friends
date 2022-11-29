let bookCollection = [];

let table = document.querySelector('#favoriteBooks');
let tableBody = table.getElementsByTagName('tbody')[0];
console.log(tableBody);
let columnCount = table.rows[0].cells.length;

function Book() {
    this.title = title,
    this.author = author,
    this.genre = genre,
    this.rater = rater,
    this.rating = rating,
    this.comments = comments
    }

function addBooktoTable(bookNum) {
    //for every book in the collection / bookCollection that we want to insert
        // create a new row
        let newRow = tableBody.insertRow(-1);
        // insert a new cell for each new value
        let newTitleCell = newRow.insertCell(0);
        let newAuthorCell = newRow.insertCell(1);
        let newGenreCell = newRow.insertCell(2);
        let newRatedByCell = newRow.insertCell(3);
        let newRatingCell = newRow.insertCell(4);
        let newCommentCell = newRow.insertCell(5);
        //fill the new cell with the text from the bookCollection element (book object)
        let title = document.createTextNode(bookCollection[bookNum].title);
        newTitleCell.appendChild(title);

        let author = document.createTextNode(bookCollection[bookNum].author);
        newAuthorCell.appendChild(author);

        let genre = document.createTextNode(bookCollection[bookNum].genre);
        newGenreCell.appendChild(genre);

        let ratedBy = document.createTextNode(bookCollection[bookNum].rater);
        newRatedByCell.appendChild(ratedBy);

        let rating = document.createTextNode(bookCollection[bookNum].rating);
        newRatingCell.appendChild(rating);

        let comments = document.createTextNode(bookCollection[bookNum].comments);
        newCommentCell.appendChild(comments);
    }

function addBookToCollection() {
    let newBook = new Book();
    let newTitle = document.querySelector('#title').value;
    let newAuthor = document.querySelector('#author').value;
    let allGenres = document.getElementById("genre");
    let selectedGenre = allGenres.options[allGenres.selectedIndex].text;
    let newRater = document.querySelector('#rater').value;
    let allRatings = document.querySelector('#rating');
    let newRating = allRatings.options[allRatings.selectedIndex].text;
    let newComment = document.querySelector('#comments').value;
    newBook.title = newTitle;
    newBook.author = newAuthor;
    newBook.genre = selectedGenre;
    newBook.rater = newRater;
    newBook.rating = newRating;
    newBook.comments = newComment;
    bookCollection.push(newBook);
    modal.style.display = "none";
    return bookCollection.length - 1;
}

function clearModal() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.getElementById("genre").value = 'none';
    document.querySelector('#rater').value = '';
    document.querySelector('#rating').value = 'blank';
    document.querySelector('#comments').value = '';
}


let addNewBook = document.querySelector('#submit');

addNewBook.addEventListener("click", function(e) {
    let newBook = addBookToCollection();
    addBooktoTable(newBook);
    console.log(e);
});

//addNewBook.addEventListener("click", addBooktoTable);


///////////////// Modal Functionality //////////////

let modal = document.getElementById("addBookModal");

// Get the button that opens the modal
let btn = document.getElementById("addBook");

// Get the <span> element that closes the modal
let close = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  clearModal();
  modal.style.display = "block";

}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}