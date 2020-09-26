//console.log("This is JS college library website");
//Feature to add
//1. Store all the data to the localStorage
//2. Give another column as an option to delete the book
//3. Add a scrooll bar to the view;

//Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//Display Constructor
function Display() {

}


//Add methods to display prototype
Display.prototype.add = function (book) {
    console.log("Adding to UI");
    let tableBody = document.getElementById('tableBody');
    let uiStringTemp = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>`;
    tableBody.innerHTML += uiStringTemp;
}


//Implement the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}


//Implement the validate function
Display.prototype.validate = function (book) {

    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    } else {
        return true;
    }

}


//show success or error messange function
Display.prototype.show = function (type, displayMsg) {
    let message = document.getElementById('message');
    let boldText;
    if (type === 'success') {
        boldText = 'Success';
    } else {
        boldText = 'Error';
    }
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>${boldTextboldText}: </strong> ${displayMsg}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = '';
    }, 2000);

}


//Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFromSubmit);

function libraryFromSubmit(e) {
    console.log("You have submitted library form")
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    //  grab  programming fiction english 
    let programming = document.getElementById('programming');
    let fiction = document.getElementById('fiction');
    let english = document.getElementById('english');


    if (programming.checked) {
        type = programming.value;
    } else if (fiction.checked) {
        type = fiction.value;
    } else if (english.checked) {
        type = english.value;
    }

    //if anyone submit create book object
    let book = new Book(name, author, type);
    console.log(book);

    //Display object
    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added! ');
    } else {
        //show error to the user
        display.show('danger', 'Sorry you cannot add this book. ')
    }


    e.preventDefault();
}
