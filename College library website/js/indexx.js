console.log('Our college library website');
// showBooks()


// function Book(name, author, type) {
//     this.name = name;
//     this.author = author;
//     this.type = type;
// }
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

//Display constructor
class Display {
    constructor() {

    }
    //Add methods to display prototype
    add(book) {
        let addBook = localStorage.getItem('addBook');
        let bookObj;
        if (addBook == null) {
            bookObj = [];
        }
        else {
            bookObj = JSON.parse(addBook)
        }
        let uiString = "";
        bookObj.forEach(function (element) {
            uiString = `
            <tbody>
                           <tr>                      
                               <td>${element.name}</td>
                               <td>${element.author}</td>
                               <td>${element.type}</td>
                            </tr>   
           </tbody>               
                           `
        })
        let tBody = document.getElementById('tableBody');
        // if (bookObj.length != 0) {
            tBody.innerHTML += uiString;
        // }
        // else {
        //     tBody.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes`;
        // }
       // bookObj.push(book);
        localStorage.setItem('addBook', JSON.stringify(bookObj));


    }
    //Implement the clear function
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
    //Implement the validate function
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }
    show(type, displayMessage) {
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message!</strong> ${displayMessage}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`

        setTimeout(() => {
            message.innerHTML = ``;
        }, 2000);

    }
}


// function Display() {

// }
// //Add methods to display prototype
// Display.prototype.add = function (book) {
//     let tableBody = document.getElementById('tableBody');
//     let uiString = `
//      <tbody>
//                     <tr>                      
//                         <td>${book.name}</td>
//                         <td>${book.author}</td>
//                         <td>${book.type}</td>
//                      </tr>   
//     </tbody>               
//                     `


//     tableBody.innerHTML += uiString;

// }
// //Implement the clear function
// Display.prototype.clear = function () {
//     let libraryForm = document.getElementById('libraryForm');
//     libraryForm.reset();
// }
// //Implement the validate function
// Display.prototype.validate = function (book) {
// if(book.name.length<2 || book.author.length<2){
//     return false;
// }
// else{
//     return true;
// }
// }
// Display.prototype.show = function(type, displayMessage){
//     let message = document.getElementById('message');
//     message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
//     <strong>Message!</strong> ${displayMessage}
//     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//   </div>`

// setTimeout(() => {
//     message.innerHTML = ``;
// }, 2000);

// }
//Add submit event listener
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }



    let book = new Book(name, author, type);
    e.preventDefault();

    let display = new Display();
    if (display.validate(book)) {   //agr display.validate true return kr rha hai toh isko run kr do ni toh else part ko run kra do 


        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added');

        let addBook = localStorage.getItem('addBook');
        if (addBook == null) {
            bookObj = [];
        }
        else {
            bookObj = JSON.parse(addBook)
        }
        bookObj.push(book);
        localStorage.setItem('addBook', JSON.stringify(bookObj));
    }

    else {
        //Show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }

    //   ye tareeka local storage me data save krane ke liye thik nahi hai kyoki jaise hi aap add pr click kr rhe toh wo empty form bi local storage me submit kr le rha hai




    console.log('You have submitted library form');

}

//fxn to show the books.

// function showBooks() {
//     let addBook = localStorage.getItem('addBook');
//     if (addBook == null) {
//         bookObj = [];
//     }
//     else {
//         bookObj = JSON.parse(addBook)
//     }
//     let html = "";
//     bookObj.forEach(function(){
//          html+=`
//          `
//     })

// }



//Extra features to add
// 1) Store all the data to the local Storage
// 2) Give another column as an option to delete the book
// 3) Add a scroll bar to the view
