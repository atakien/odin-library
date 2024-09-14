const formEl = document.querySelector("form");
const libraryContainer = document.querySelector(".library-container");

const myLibrary = [];

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const bookTitleEl = document.querySelector(".title-input").value;
    const authorEl = document.querySelector(".author-input").value;
    const pageEl = document.querySelector(".page-input").value;
    const radioEl = document.querySelector("input[name='read']:checked");

    const readStatus = radioEl ? radioEl.id : "Not specified";

    const bookInfo = new Book(bookTitleEl, authorEl, pageEl, readStatus);
    myLibrary.push(bookInfo);
    formEl.reset();
    
    addBookToLibrary(bookInfo);
    
    console.log(myLibrary);
});

function Book(title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}

function addBookToLibrary(book) {
    const cardTemplate = `
        <div class="book-card">
            <div><span>Title:</span> ${book.title}</div>
            <div><span>Author:</span> ${book.author}</div>
            <div><span>Pages:</span> ${book.page}</div>
            <div><span>Already read:</span> ${book.read}</div>
            <button class="close-button">+</button>
        </div>`;
    
    const cardElement = document.createElement('div');
    cardElement.innerHTML = cardTemplate;
    
    libraryContainer.appendChild(cardElement);
}
