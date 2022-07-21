console.log('Our college library website');
showBooks();
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    constructor() {

    }
    // add(book) {
    //     let addBook = localStorage.getItem('addBook');
    //     let bookObj;
    //     if (addBook == null) {
    //         bookObj = [];
    //     }
    //     else {
    //         bookObj = JSON.parse(addBook)
    //     }
    //     let uiString = "";
    //     bookObj.forEach(function (element) {
    //         uiString = `
    //         <tbody>
    //                        <tr>                      
    //                            <td>${element.name}</td>
    //                            <td>${element.author}</td>
    //                            <td>${element.type}</td>
    //                         </tr>   
    //        </tbody>               
    //                        `
    //     })
    //     let tBody = document.getElementById('tableBody');
    //     tBody.innerHTML += uiString;
    //     localStorage.setItem('addBook', JSON.stringify(bookObj));


    // }
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
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

    let display = new Display();
    if (display.validate(book)) {

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
        showBooks(book);

    }

    else {
        display.show('danger', 'Sorry you cannot add this book');
    }


    e.preventDefault();



    console.log('You have submitted library form');

}

function showBooks() {
    let addBook = localStorage.getItem("addBook");
    if (addBook == null) {
        bookObj = [];
    } else {
        bookObj = JSON.parse(addBook);
    }
    let uiString = "";
    bookObj.forEach(function (element, index) {

        uiString += `
               <tbody>
                            <tr>     
                               <td>${index+1})</td>
                               <td>${element.name}</td>
                               <td>${element.author}</td>
                               <td>${element.type}</td>
                               <td>Delete it!</td>
                            </tr>   
                </tbody>               
                        `

    });
    let tBody = document.getElementById('tableBody');
    if (bookObj.length != 0) {
        tBody.innerHTML = uiString;
    }
    else {
        tBody.innerHTML = `Your added books will display here!`;
    }
}


