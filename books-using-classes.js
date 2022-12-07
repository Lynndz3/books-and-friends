// //array to store bookObjects (books + ratings)
let bookCollection = [];

let table = document.querySelector('#favoriteBooks');
let tableBody = table.getElementsByTagName('tbody')[0];
let columnCount = table.rows[0].cells.length;

const addBookButton = document.querySelector('#addBook');
const bookModal = new bootstrap.Modal(document.getElementById('addBookModal'), {});
const submitBookButton = document.querySelector('#submit-book');

const ratingModal = new bootstrap.Modal(document.getElementById('ratingModal'), {});
const submitRatingButton = document.querySelector('#submit-rating');

submitBookButton.addEventListener("click", function(e) {
    let bookNum = addBook();
    let ratingNum = addRating(bookNum);
    addTableRow(bookNum, ratingNum);
    bookModal.hide();
});

submitRatingButton.addEventListener("click", function(e) {
    let bookNum = e.target.parentElement.parentElement.rowIndex - 2;
})

class User {
    constructor(name, username) {
        this.name = name;
        this.username = username;
    }
}

class Book {
    constructor(title, author, genre) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        //each book can have multiple readers/ratings
        this.ratings = [];
    }
}


function addBook() {
    let newBook = new Book();
    newBook.title = document.querySelector('#title').value;
    newBook.author = document.querySelector('#author').value;
    let allGenres = document.getElementById("genre");
    newBook.genre = allGenres.options[allGenres.selectedIndex].text;
    bookCollection.push(newBook);
    console.log(bookCollection);
    return bookCollection.length - 1;
}


function addRating(bookNum) {
    let newRating = {};
    newRating.reader = document.querySelector('#reader').value;
    let allRatings = document.querySelector('#rating');
    newRating.rating = allRatings.options[allRatings.selectedIndex].text;
    newRating.comments = document.querySelector('#comments').value;
    bookCollection[bookNum].ratings.push(newRating);
    return bookCollection[bookNum].ratings.length - 1;
}

addBookButton.addEventListener('click', function() {
    clearModal();
    bookModal.show();
});


function addTableRow(bookNum, ratingNum) {
    //for every book in the collection / bookCollection that we want to insert
        // create a new row
        let newRow = tableBody.insertRow(-1);

        let ratingButtonCell = newRow.insertCell(0);
        let button = document.createElement('button');
        button.innerHTML = "add rating";
        button.classList = "btn btn-primary rate-button";
        button.type = "button";
        ratingButtonCell.appendChild(button);
        const addRatingButton = document.querySelector('.rate-button');
        addRatingButton.addEventListener('click', function(e) {
            console.log(e.target.parentElement.parentElement.rowIndex);
            ratingModal.show();
        })

        // insert a new cell for each new value
        let newTitleCell = newRow.insertCell(1);
        populateCells(bookCollection[bookNum].title, newTitleCell);

        let newAuthorCell = newRow.insertCell(2);
        populateCells(bookCollection[bookNum].author, newAuthorCell);

        let newGenreCell = newRow.insertCell(3);
        populateCells(bookCollection[bookNum].genre, newGenreCell);

        let newReaderCell = newRow.insertCell(4);
        populateCells(bookCollection[bookNum].ratings[ratingNum].reader, newReaderCell);

        let newRatingCell = newRow.insertCell(5);
        populateCells(bookCollection[bookNum].ratings[ratingNum].rating, newRatingCell);
        
        if (bookCollection[bookNum].ratings[ratingNum].comments != '') {
            let commentsModal = new bootstrap.Modal(document.getElementById('commentsModal'), {});
            let comments = document.querySelector('#commentsModal .modal-body');
            let p = document.createElement('p');
            comments.appendChild(p);
            let commentValue = document.createTextNode(bookCollection[bookNum].ratings[ratingNum].comments);
            p.appendChild(commentValue);
            let br = document.createElement('br');
            newRatingCell.appendChild(br);
            let commentLink = document.createElement('a');
            commentLink.innerHTML = "View comments";
            commentLink.style.fontSize = '12px';
            commentLink.style.color = 'blue';
            commentLink.style.textDecorationLine = 'underline';
            newRatingCell.appendChild(commentLink);
            commentLink.addEventListener('click', function() {
                commentsModal.show();
            })
        }
}

function populateCells(value, newCell) {
 let newCellValue = document.createTextNode(value);
 newCell.appendChild(newCellValue);
}

function clearModal() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.getElementById("genre").selected;
    document.querySelector('#reader').value = '';
    document.querySelector('#rating').selected;
    document.querySelector('#comments').value = '';
}