document.addEventListener("DOMContentLoaded", function () {
    // User name span
    let fieldUserName = document.getElementById("user-name")
    
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

    // User name field
    let userName = document.getElementById('nameUser');

    // Open respective popups
    signInBtn.addEventListener("click", () => popupSignIn.style.display = "flex");
    addBookBtn.addEventListener("click", () => popupAddBook.style.display = "flex");

    // Close respective popups when clicking the close button
    closeBtns.forEach(btn => {
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

    // Add the user and display it on the page
    subUser.addEventListener("click", ()=>{
        fieldUserName.textContent = userName.textContent;
    } );


    // Obtener elementos del formulario de usuario
    const userForm = document.querySelector("#popupForm-1 form");
    const userNameInput = document.getElementById("nameUser");
    const userNameSpan = document.getElementById("user-name");

    // Obtener elementos del formulario de libros
    const bookForm = document.querySelector("#popupForm-2 form");
    const bookTable = document.querySelector(".book-table");
    const bookNameInput = document.getElementById("nameBook");
    const authorInput = document.getElementById("author");
    const pagesInput = document.getElementById("pages");
    const readCheckbox = document.getElementById("read");

    // Manage user form submit
    userForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevents reloading the page
        if (userNameInput.value.trim() !== "") {
            userNameSpan.textContent = userNameInput.value;
        }
        userForm.closest(".popup").style.display = "none"; // Cerrar el popup
    });

    // Manage add book submit
    bookForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevents reloading the page

        if (bookNameInput.value.trim() !== "" && authorInput.value.trim() !== "") {
            // New paragraph
            const newBookEntry = document.createElement("p");
            newBookEntry.innerHTML = `<b>${bookNameInput.value}</b> <br> Author: ${authorInput.value}<br> ${pagesInput.value || "Unknown"} pages. <br> ${readCheckbox.checked ? "📖 Read" : "📕 Not Read"}`;

            // Appent to the table
            bookTable.appendChild(newBookEntry);
        }

        bookForm.closest(".popup").style.display = "none"; // Close popup
        bookForm.reset(); // Reset form
    });
});

