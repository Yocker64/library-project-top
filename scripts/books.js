document.addEventListener("DOMContentLoaded", function () {
    const openAddUser = document.getElementById("openFormBtn");
    const addUser = document.getElementById("popupForm-1");
    const closeBtn = document.querySelector(".close-btn");
    const openAddBook = document.getElementById('add-book');
    const addBook = document.getElementById('popupForm-2')
    const closeBtn2 = document.getElementById('close-book-reg')

    openAddUser.addEventListener("click", function () {
        addUser.style.display = "flex";
    });

    closeBtn.addEventListener("click", function () {
        addUser.style.display = "none";
        addBook.style.display = 'none';
    });

    openAddBook.addEventListener("click", function () {
        addBook.style.display = "flex";
    });


    

    // Close the popup if user clicks outside the form
    window.addEventListener("click", function (e) {
        if (e.target === addUser) {
            addUser.style.display = "none";
        } else if (e.target === addBook) {
            addBook.style.display = "none";
        }
    });
});