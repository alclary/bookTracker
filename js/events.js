import { Library, Book } from "./classes.js";

("use strict");

// VARIABLE DECLARATIONS FOR EVENT LISTENERS
// newBookForm Input Variables
const newBookState = document.querySelector("#bookState");
const newBookTitle = document.querySelector("#bookTitle");
const newBookAuthor = document.querySelector("#bookAuthor");
const newBookGenre = document.querySelector("#bookGenre");

// startedForm Variables
const startedForm = document.querySelector("#startedForm");
const newBookPages = document.querySelector("#bookPages");
const newBookStart = document.querySelector("#bookStarted");

// finishedForm Variables
const finishedForm = document.querySelector("#finishedForm");
const newBookFinish = document.querySelector("#bookFinished");

// progressForm Variables
const progressForm = document.querySelector("#progressForm");
const progressDate = document.querySelector("#progressDate");
const progressPages = document.querySelector("#progressPages");

// submit Btn
const newBookSubmit = document.querySelector("#bookSubmit");

// HELPER FUNCTIONS FOR EVENT LISTENERS
// display base, started, and in-progress parts of form
function displayInProgressForm() {
  newBookPages.style.display = "";
  startedForm.style.display = "";
  progressForm.style.display = "";
  finishedForm.style.display = "none";
}

// display base, started, and finished parts of form
function displayFinishedForm() {
  newBookPages.style.display = "";
  startedForm.style.display = "";
  progressForm.style.display = "none";
  finishedForm.style.display = "";
}

// display only base form
function displayPlannedForm() {
  newBookPages.style.display = "";
  startedForm.style.display = "none";
  progressForm.style.display = "none";
  finishedForm.style.display = "none";
}

// ENCOMPASSING FUNCTION FOR EVENT LISTENERS
export default function eventListeners() {
  // Conditional form display when newBookState changes
  newBookState.addEventListener("change", () => {
    if (newBookState.value === "inProgress") {
      displayInProgressForm();
    } else if (newBookState.value === "finished") {
      displayFinishedForm();
    } else if (newBookState.value === "planned") {
      displayPlannedForm();
    }
  });
  // Create a new book on 'submit'
}
