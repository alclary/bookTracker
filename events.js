"use strict";

// Event listeners for webpage stuff
//      i.e. defines logic that allows us to create/read/update/delete
//      books from webpage

// newBookForm Input Variables
const newBookState = document.querySelector('#bookState');
const newBookTitle = document.querySelector('#bookTitle');
const newBookAuthor = document.querySelector('#bookAuthor');
const newBookGenre = document.querySelector('#bookGenre');
const newBookPages = document.querySelector('#bookPages');
const newBookStart = document.querySelector('#bookStarted');
const newBookFinish = document.querySelector('#bookFinished');

// progressPoints Input Variables
const progressForm = document.querySelector('#progressForm');
const progressDate = document.querySelector('#progressDate');
const progressPages = document.querySelector('#progressPages');

function displayInProgressForm () {
    newBookPages.style.display = '';
    newBookStart.style.display = '';
    progressForm.style.display = '';
    newBookFinish.style.display = 'none';
}

function displayFinishedForm () {
    newBookPages.style.display = '';
    newBookStart.style.display = '';
    newBookFinish.style.display = '';
    progressForm.style.display = 'none';
}

function displayPlannedForm () {
    newBookPages.style.display = '';
    newBookStart.style.display = 'none';
    newBookFinish.style.display = 'none';
    progressForm.style.display = 'none';
}

// Conditional form display when newBookState changes
newBookState.addEventListener('change', () => {
    if (newBookState.value === "inProgress") {
        displayInProgressForm();
    }
    else if (newBookState.value === "finished") {
        displayFinishedForm();
    }
    else if (newBookState.value === "planned") {
        displayPlannedForm();
    }
});