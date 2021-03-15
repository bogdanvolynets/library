const body = document.querySelector('body');
const addBookBtn = document.querySelector('#addBook');
const submitBookBtn = document.querySelector('#submitBook');
const closeBtn = document.querySelector('#close');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const numberOfPages = document.querySelector('#numberOfPages');
const isRead = document.querySelector('#isRead');
const form = document.querySelector('#form');
const board = document.querySelector('#board');

let myLibrary = [{
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    numberOfPages: 310,
    hasBeenReaded: true
}];

addBookBtn.addEventListener('click', displayForm);

closeBtn.addEventListener('click', displayForm);

submitBookBtn.addEventListener('click', addBookToLibrary);

class Book { 
    constructor(title, author, numberOfPages, hasBeenReaded) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.hasBeenReaded = hasBeenReaded;
    // this.info = function() { 
    //     return `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${this.hasBeenReaded}`;
    // }
}
}

function addBookToLibrary() {
    if (title.value && author.value && numberOfPages.value) {
        myLibrary.push(
            new Book(title.value, author.value, numberOfPages.value, isRead.checked));
            clearInputs();
            loopAndDisplayBooks();
            displayForm();
        }
        else { alert('Enter the Values');
    }
}

function loopAndDisplayBooks() {
    board.textContent = '';
    for(let i=0; i < myLibrary.length; i++) {
        const div = document.createElement('div');
        //div.setAttribute('data-book', `${i}`);
        const deleteBook = document.createElement('span');
        deleteBook.id = 'deleteBook';
        deleteBook.textContent = '✖';
        deleteBook.onclick = function() {
            myLibrary.splice(i, 1);
            loopAndDisplayBooks();
        }
        const heading = document.createElement('h2');
        heading.textContent = `${myLibrary[i].title}`
        const paragraph1 = document.createElement('p');
        paragraph1.textContent = `Author: ${myLibrary[i].author}`;
        const paragraph2 = document.createElement('p');
        paragraph2.textContent = `Number of Pages: ${myLibrary[i].numberOfPages}`;
        const isReadLabel = document.createElement('label');
        isReadLabel.setAttribute('for', 'read');
        isReadLabel.textContent = 'Readed?';
        const isReadCheckbox = document.createElement('input');
        isReadCheckbox.setAttribute('type', 'checkbox');
        isReadCheckbox.id = 'read';
        isReadCheckbox.checked = myLibrary[i].hasBeenReaded;
        const checkboxDiv = document.createElement('span');
        checkboxDiv.classList.add('box-of-checkbox');
        checkboxDiv.appendChild(isReadLabel);
        checkboxDiv.appendChild(isReadCheckbox);
        div.appendChild(deleteBook);
        div.appendChild(heading);
        div.appendChild(paragraph1);
        div.appendChild(paragraph2);
        //div.appendChild(isReadLabel);
        div.appendChild(checkboxDiv);
        board.appendChild(div);
    }
}

function displayForm() { 
    form.classList.toggle('hidden');
    body.classList.toggle('blur');
}

function clearInputs() {
    title.value = '';
    author.value = '';
    numberOfPages.value = '';
    isRead.checked = false;
}

loopAndDisplayBooks();