import { Library } from "./classes.js";
import eventListeners, { progressDateToday } from "./events.js";

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

// Start event listeners for webapp
formListeners(lib);

// Draw a calendar
