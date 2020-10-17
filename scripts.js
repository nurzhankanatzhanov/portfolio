// button scripts
function downloadCV() {
  let link = "https://nurzhankanatzhanov.github.io/portfolio/Resume.pdf";
  window.open(link, "_blank");
}

function emailMe() {
  let link = "mailto:nurzhan.kanatzhanov@gmail.com";
  location.href = link;
}

function connect() {
  let link = "https://www.linkedin.com/in/nurzhan-kanatzhanov/";
  window.open(link, "_blank");
}

function viewSample() {
  let link = "https://nurzhankanatzhanov.github.io/portfolio/Final_Project.pdf";
  window.open(link, "_blank");
}

function viewDB2() {
  let link = "https://databasedashboard.co/";
  window.open(link, "_blank");
}

function viewHTML(c) {
  var link = "";
  if (c === 1) {
    link =
      "https://nurzhankanatzhanov.github.io/portfolio/lyrics_comparison.html";
  } else if (c === 2) {
    link =
      "https://nurzhankanatzhanov.github.io/portfolio/lyrics_comparison.pdf";
  } else if (c === 3) {
    link =
      "https://nurzhankanatzhanov.github.io/portfolio/lyrics_comparison.ipynb";
  } else {
    alert("Error");
  }

  window.open(link, "_blank");
}
