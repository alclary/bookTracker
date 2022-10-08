"use strict";

// CLASS DEFINITIONS
export class Library {
    constructor() {
        this.collection = {};
        this.collectionSpeed = undefined;
        this.inProgressSpeed = undefined;
    }

    addBook() {} // Adds book to collection
    removeBook() {} // Removes book from collection
    calcSpeedCollection() {} // Calculates a reader's speed based on finished books
    calcSpeedInProgress() {} // Calculates a reader's speed only based on in-progress books

    #save() {} // Saves the library obj to storage, as it exists when save is called 
};

export class Book {
    constructor(author, title, pages, genre, state) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.genre = genre;
        this.state = state; ///!!! I JUST WROTE STUFF FEEL FREE TO EDIT AS NEEDED LOL
    }
};