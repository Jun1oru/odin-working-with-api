import { fetchGif } from "./fetchGif";

const body = document.querySelector("body");
const img = document.createElement("img");
img.src = fetchGif();

body.appendChild(img);
