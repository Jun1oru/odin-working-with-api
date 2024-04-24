import { fetchGif } from "./fetchGif";

let searchParam = "tomandjerry";

export function createButton() {
  const button = document.createElement("button");
  button.textContent = "Another one!";
  button.id = "changeGif";

  button.addEventListener("click", async () => {
    const img = document.querySelector("img");
    img.src = await fetchGif(searchParam);
  });

  return button;
}

export function createSearchBox() {
  const searchBox = document.createElement("input");
  searchBox.type = "text";
  searchBox.id = "searchBox";
  searchBox.placeholder = searchParam;

  searchBox.addEventListener("input", (e) => {
    e.preventDefault();
    searchParam = searchBox.value;
  });

  return searchBox;
}
