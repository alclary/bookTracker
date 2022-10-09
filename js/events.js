import { Library, Book } from "./classes.js";

("use strict");

// VARIABLE DECLARATIONS FOR EVENT LISTENERS
// Base Form Variables
const inputBookState = document.querySelector("#bookState");
const inputBookTitle = document.querySelector("#bookTitle");
const inputBookAuthor = document.querySelector("#bookAuthor");
const inputBookPages = document.querySelector("#bookPages");
const inputBookGenre = document.querySelector("#bookGenre");
// Dynamic Form Sections
const sectionStarted = document.querySelector("#sectionStarted");
const inputBookStart = document.querySelector("#bookStarted");
const sectionFinished = document.querySelector("#sectionFinished");
const inputBookFinish = document.querySelector("#bookFinished");
const sectionInProgress = document.querySelector("#sectionInProgress");
const inputProgressDate = document.querySelector("#progressDate");
const inputProgressPages = document.querySelector("#progressPages");
// Submit Button
const formSubmit = document.querySelector("#bookSubmit");
// Editor Pane
const editorPane = document.querySelector("#editorPane")
const blurOverlay = document.querySelector("#blur")
const editorClose = document.querySelector('#editorClose')

// HELPER FUNCTIONS FOR EVENT LISTENERS
// set current date on inputProgressDate field
function progressDateToday() {
    inputProgressDate.valueAsDate = new Date();
}
// Display floating editorPane
function displayEditorPane() {
  blurOverlay.style.display = "";
  editorPane.style.display = "";
}
// Hide floating editorPane
function hideEditorPane() {
  blurOverlay.style.display = "none";
  editorPane.style.display = "none";
}
// Dynamic form display; state = inProgress
function displayInProgressForm() {
  inputBookPages.style.display = "";
  sectionStarted.style.display = "";
  sectionInProgress.style.display = "";
  sectionFinished.style.display = "none";
  progressDateToday();
}
// Dynamic form display; state = finished
function displayFinishedForm() {
  inputBookPages.style.display = "";
  sectionStarted.style.display = "";
  sectionInProgress.style.display = "none";
  sectionFinished.style.display = "";
}
// Dynamic form display; state = planned
function displayPlannedForm() {
  inputBookPages.style.display = "";
  sectionStarted.style.display = "none";
  sectionInProgress.style.display = "none";
  sectionFinished.style.display = "none";
}

// WRAPPER FUNCTION FOR EVENT LISTENERS
export default function formListeners(library) {
  // Close Editor Pane
  editorClose.addEventListener("click", () => hideEditorPane())
  // Dynamic form display on state change
  inputBookState.addEventListener("change", () => {
    if (inputBookState.value === "inProgress") {
      displayInProgressForm();
    } else if (inputBookState.value === "finished") {
      displayFinishedForm();
    } else if (inputBookState.value === "planned") {
      displayPlannedForm();
    }
  });
  // Create a new book on 'submit'
}
