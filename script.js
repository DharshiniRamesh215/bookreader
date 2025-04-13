function loadBook(bookId) {
    fetch(`${bookId}.txt`)
      .then((response) => response.text())
      .then((text) => {
        document.getElementById("book-title").innerText = getTitle(bookId);
        document.getElementById("book-content").innerText = text;
        document.getElementById("reader").style.display = "block";
      })
      .catch((err) => {
        alert("Failed to load book.");
        console.error(err);
      });
  }
  
  function getTitle(id) {
    const titles = {
      book1: "The Adventures of Sherlock Holmes",
      book2: "Pride and Prejudice",
    };
    return titles[id] || "Unknown Title";
  }
  