import { Library, Book } from "./classes.js";
import eventListeners from "./events.js";

// Strict mode
"use strict";

// Start event listeners for webapp
eventListeners();

// If localstorage has libray, load. Else, create.
if (localStorage.storedLibrary) {
    let lib = JSON.parse(localStorage.storedLibrary);
}
else {
    let lib = new Library()
    localStorage.storedLibrary = JSON.stringify(lib);
};

// A way to display projected finish time of a book

// Draw a calendar