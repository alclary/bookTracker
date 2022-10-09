"use strict";

/** Class representing a single user's library (i.e. collection of books) */
export class Library {
  constructor() {
    this.collection = {};                       // key: book title (string), value: book object (key: value)
    this.collectionSpeed = undefined;
    this.inProgressSpeed = undefined;
  }

  addBook(bookObj) {                            // Adds (book title: book obj) in collection
    if (bookObj.title in this.collection) {
      return "Book already in collection!";   
    } else {
      this.collection[bookObj.title] = bookObj; 
    }

  }; 

  removeBook(bookObj) {                         // Removes book from collection
    if (bookObj.title in this.collection) {
      delete this.collection.bookObj.title;
    }
  }; 

  calcSpeedCollection() { // TODO Calculates a reader's speed based on finished books
    let bookRates = [];
    for (const property in this.collection) { //loops through book titles

      if (this.collection[property].dateFinished !== undefined) {
        
        let timeDifference = this.collection[property].dateFinished.getTime() - this.collection[property].dateStarted.getTime();

        let TotalDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
        
        let rate = (this.collection[property].pages / TotalDays);

        bookRates.push(rate);
      };
    }

    
    let sum = 0;
    for (let value of bookRates) {
      sum += value;
    }


    var avgRate = (sum / bookRates.length);

    return avgRate;

  }

  calcSpeedInProgress() {
    // add another property to book which is current pa
  }; // TODO Calculates a reader's speed only based on in-progress books

  

  #save() {}; // TODO Saves the library obj to storage, as it exists when save is called
};

/** Class representing a book */
export class Book {
  /**
   * Create a book object.
   * @param {string} state - state of book: inProgress, finished, or planned
   * @param {string} title - book's title
   * @param {string} author - book's author
   * @param {number} pages - total pages in book
   * @param {string} genre - book's genre
   * @param {*} [dateStarted] - date book was started
   * @param {*} [dateFinished] - date book was finished
   */                    
  constructor(state, title, author, pages, genre, dateStarted, dateFinished) {
    this.state = state;                         // string
    this.title = title;                         // string
    this.author = author;                       // string
    this.pages = pages;                         // number
    this.genre = genre;                         // string
    this.dateStarted = dateStarted;             // optional. If no input by user, set to undefined.
    this.dateFinished = dateFinished;           // optional. If no input by user, set to undefined.
  
    this.progressPoints = {}; // progress points / checkpoints of an inProgress OR finished book
  }
  // in progress to finshed book: FUNCTION TO EDIT THE BOOK
  // function to change the state of the book which adds to the finished date
  // from planned to read to currently reading
  // from currently reading to finished reading
  updateState(newState) {
    this.state = newState;

  };
};

