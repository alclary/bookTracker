import { Library } from "./classes.js";
import formListeners from "./events.js";

// Strict mode
"use strict";

// If localstorage has libray, load. Else, create.
if (localStorage.storedLibrary) {
    var lib = JSON.parse(localStorage.storedLibrary);
    console.log("Library found:", lib)
}
else {
    var lib = new Library()
    localStorage.storedLibrary = JSON.stringify(lib);
    console.log("Library not found. Created a new one:", lib)
};

// TODO finish display funct; depends on Book class completish; Load books into collection display
function displayBooks () {
    for (let book in lib.collection) {
        let bookElement = document.createElement("div");
        bookElement.innerHTML = 
            `<h3>${book.title}</h3>
            <h4>${book.author}</h4>`
        bookElement.setAttribute("class", "three columns");
        document.getElementById(book.state).appendChild(bookElement);
    };
};

// Start event listeners for webapp
formListeners(lib);

// Draw a calendar
