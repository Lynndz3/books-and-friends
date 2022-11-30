let bookCollection = [];

let table = document.querySelector('#favoriteBooks');
let tableBody = table.getElementsByTagName('tbody')[0];
// let modal = document.getElementById('#addBookModal');
let columnCount = table.rows[0].cells.length;

const addBook = document.querySelector('#addBook');

const modal = new bootstrap.Modal(document.getElementById('addBookModal'), {});

function Book() {
    this.title = title,
    this.author = author,
    this.genre = genre,
    this.reader = reader,
    this.rating = rating,
    this.comments = comments
    }

    function addBooktoTable(bookNum) {
        //for every book in the collection / bookCollection that we want to insert
            // create a new row
            let newRow = tableBody.insertRow(-1);
            // insert a new cell for each new value
            let newTitleCell = newRow.insertCell(0);
            populateCells(bookCollection[bookNum].title, newTitleCell);

            let newAuthorCell = newRow.insertCell(1);
            populateCells(bookCollection[bookNum].author, newAuthorCell);

            let newGenreCell = newRow.insertCell(2);
            populateCells(bookCollection[bookNum].genre, newGenreCell);

            let newReaderCell = newRow.insertCell(3);
            populateCells(bookCollection[bookNum].reader, newReaderCell);

            let newRatingCell = newRow.insertCell(4);
            populateCells(bookCollection[bookNum].rating, newRatingCell);
            
            if (bookCollection[bookNum].comments != '') {
                let commentsModal = new bootstrap.Modal(document.getElementById('commentsModal'), {});
                let comments = document.querySelector('#commentsModal .modal-body');
                let p = document.createElement('p');
                comments.appendChild(p);
                let commentValue = document.createTextNode(bookCollection[bookNum].comments);
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

function addBookToCollection() {
    let newBook = new Book();
    newBook.title = document.querySelector('#title').value;
    newBook.author = document.querySelector('#author').value;
    let allGenres = document.getElementById("genre");
    newBook.genre = allGenres.options[allGenres.selectedIndex].text;
    newBook.reader = document.querySelector('#reader').value;
    let allRatings = document.querySelector('#rating');
    newBook.rating = allRatings.options[allRatings.selectedIndex].text;
    newBook.comments = document.querySelector('#comments').value;
    bookCollection.push(newBook);
    modal.hide();
    return bookCollection.length - 1;
}

addBook.addEventListener('click', function(e) {
    clearModal();
    modal.show();
})

let addNewBook = document.querySelector('#submit');

addNewBook.addEventListener("click", function(e) {
    let bookNum = addBookToCollection();
    addBooktoTable(bookNum);
});