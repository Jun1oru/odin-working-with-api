import { fetchGif } from "./fetchGif";
import { createButton, createSearchBox } from "./domManager";

const body = document.querySelector("body");
const img = document.createElement("img");
img.alt = "NO GIF";

async function setImg() {
  img.src = await fetchGif("tomandjerry");
  body.appendChild(img);
  body.appendChild(createButton());
  body.appendChild(createSearchBox());
}

setImg();
