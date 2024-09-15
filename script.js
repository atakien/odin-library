const formEl = document.querySelector("form");
const cardContainer = document.querySelector(".cards-container");

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
    
    addBookToLibrary();
    
    console.log(myLibrary);
});

function Book(title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}

function addBookToLibrary() {
    cardContainer.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const cardTemplate = `
        <div><span>Title:</span> ${book.title}</div>
        <div><span>Author:</span> ${book.author}</div>
        <div><span>Pages:</span> ${book.page}</div>
        <div><span>Already Read:</span> ${book.read}</div>
        <div><span>Book Number:</span> ${index + 1}</div>
        <button class="close-button" data-index="${index}">+</button>`;

        const cardElement = document.createElement('div');
        cardElement.innerHTML = cardTemplate;
        cardElement.className = "book-card";
        cardContainer.appendChild(cardElement);
    });

    const removeButtons = document.querySelectorAll(".close-button");
    removeButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const index = e.target.getAttribute("data-index");
            myLibrary.splice(index, 1); 
            addBookToLibrary(); 
        });
    });
}
