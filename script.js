const fetchLibrary = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Generic Fetch Error");
      }
    })
    .then((libraryData) => {
      console.log(libraryData);
      console.log(libraryData);

      const row = document.getElementById("library-row");
      libraryData.forEach((book) => {
        const col = document.createElement("div");
        col.classList.add("col");
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src=${book.img} class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">${book.title}</p>
              <p class="card-text">prezzo:${book.price}&euro;</p>
              <button class="btn btn-warning remove " onclick="remove">Scarta</button>
              <button class="btn btn-success add " onclick="addToCart">Compra ora</button>
            </div>`;
        const removeBtn = card.querySelector(".remove");
        removeBtn.addEventListener("click", () => {
          row.removeChild(col);
        });

        col.appendChild(card);
        row.appendChild(col);
      });
    })
    .catch((error) => {
      console.log("Fetch error:", error);
    });
};
fetchLibrary();
