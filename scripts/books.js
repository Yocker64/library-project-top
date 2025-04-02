const myLibrary = [];

// Constructors

// Books
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
  // Changes the state of the book from read, to not read and vice-versa
}

// Users
function User(name, email){
    this.name = name;
    this.email = email;
}

// Handling form submission
document.querySelector("#popupForm-2 form").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload

    // Get values from form
    const title = document.getElementById("nameBook").value.trim();
    const author = document.getElementById("author").value.trim();
    const pages = document.getElementById("pages").value.trim();
    const isRead = document.getElementById("read").checked;

    // Create new book object
    const newBook = new Book(title, author, pages || "Unknown", isRead);

    // Store in array
    myLibrary.push(newBook);

    // Add to the UI
    addBookToTable(newBook);

    // Close form and reset
    event.target.closest(".popup").style.display = "none";
    event.target.reset();
  });

// Function to display books in the UI
function addBookToTable(book) {
  console.log(book);
  
    const bookTable = document.querySelector(".book-table");
    const newBookEntry = document.createElement("p");
    newBookEntry.id = book.id;

    // Title 
    const titleElement = document.createElement("span");
    titleElement.textContent = `Title: ${book.title}`;
    newBookEntry.appendChild(titleElement);
    // Author
    const authorElement = document.createElement("span");
    authorElement.textContent = `Author: ${book.author}`;
    newBookEntry.appendChild(authorElement);

    // Pages
    const pagesElement = document.createElement("span");
    pagesElement.textContent = `${book.pages} pages`;
    newBookEntry.appendChild(pagesElement);
    // Read status
    const statusElement = document.createElement("span");
    statusElement.classList.add("status");
    statusElement.textContent = book.read ? "📖 Read" : "📕 Not read";
    newBookEntry.appendChild(statusElement);

    // Toggle read status on click
    statusElement.addEventListener("click", () => {
        book.read = !book.read; // Toggle read status
        statusElement.textContent = book.read ? "📖 Read" : "📕 Not read";
    });

    // Delete button
    const deleteElement = document.createElement("span");
    deleteElement.classList.add("delete");
    deleteElement.textContent = "Delete";

    newBookEntry.appendChild(deleteElement);

    // Delete book entry on click
    deleteElement.addEventListener("click", () => {
        bookTable.removeChild(newBookEntry); // Remove from DOM
    });

    // Append to book table
    bookTable.appendChild(newBookEntry);
}
// User name span
let fieldUserName = document.getElementById("user-name");

// Open buttons
const signInBtn = document.getElementById("openFormBtn");
const addBookBtn = document.getElementById("add-book");

// Popups
const popupSignIn = document.getElementById("popupForm-1");
const popupAddBook = document.getElementById("popupForm-2");

// Close buttons
const closeBtns = document.querySelectorAll(".close-btn");

// Submit buttons
const subUser = document.getElementById("submitUser");
const subBook = document.getElementById("submitBook");



// Open respective popups
signInBtn.addEventListener("click", () => (popupSignIn.style.display = "flex"));
addBookBtn.addEventListener(
  "click",
  () => (popupAddBook.style.display = "flex")
);

// Close respective popups when clicking the close button
closeBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.closest(".popup").style.display = "none";
  });
});

// Close popups if clicking outside of content
window.addEventListener("click", function (event) {
  if (event.target.classList.contains("popup")) {
    event.target.style.display = "none";
  }
});

const userForm = document.querySelector("#popupForm-1 form");
    const userNameSpan = document.querySelector("#user-name");
    const signInButton = document.querySelector("#openFormBtn");
    const popupForm = document.querySelector("#popupForm-1");


    // Updates the user name and hides the sign up button
    userForm.addEventListener("submit", (event) => {
        event.preventDefault(); 
        const userNameInput = document.querySelector("#nameUser").value;
        userNameSpan.textContent = userNameInput;
        signInButton.style.display = "none";
        popupForm.style.display = "none";
    });
