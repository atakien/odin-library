const formEl = document.querySelector("form");
const libraryContainer = document.querySelector(".library-container");

const myLibrary = [];

// Event listener for form submission
formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get values from the form
    const bookTitleEl = document.querySelector(".title-input").value;
    const authorEl = document.querySelector(".author-input").value;
    const pageEl = document.querySelector(".page-input").value;
    const radioEl = document.querySelector("input[name='read']:checked");

    const readStatus = radioEl ? radioEl.id : "Not specified";

    // Create a new book object
    const bookInfo = new Book(bookTitleEl, authorEl, pageEl, readStatus);
    myLibrary.push(bookInfo);
    formEl.reset();
    
    // Add the new book to the library
    addBookToLibrary(bookInfo);
    
    console.log(myLibrary);
});

// Constructor function for Book
function Book(title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}

// Function to add a book card to the library
function addBookToLibrary(book) {
    // Define the template for a book card
    const cardTemplate = `
        <div class="book-card">
            <div><span>Title:</span> ${book.title}</div>
            <div><span>Author:</span> ${book.author}</div>
            <div><span>Pages:</span> ${book.page}</div>
            <div><span>Already read:</span> ${book.read}</div>
            <button class="close-button">+</button>
        </div>`;
    
    // Create a new div element and set its innerHTML
    const cardElement = document.createElement('div');
    cardElement.innerHTML = cardTemplate;
    
    // Append the new card element to the library container
    libraryContainer.appendChild(cardElement);
}
