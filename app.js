"use strict";

// Define Library Class
//      collection of books and calculates user-scope metrics

class Library {
    constructor() {}
};

// Define Book Class

class Book {
    constructor(author, title, pages, genre, state) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.genre = genre;
        this.state = state; ///!!! I JUST WROTE STUFF FEEL FREE TO EDIT AS NEEDED LOL
    }
};

// A way to display projected finish time of a book

// Draw a calendar

// Exports
module.export = { Library, Book };