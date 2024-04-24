import { config } from "./config";

const url = `https://api.giphy.com/v1/gifs/translate?api_key=${config.API_KEY}&s=`;

export async function fetchGif(searchParam) {
  try {
    const response = await fetch(url + searchParam, { mode: "cors" });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.data.length === 0) {
      return "";
    }

    const gif = data.data.images.original.url;

    return gif;
  } catch (error) {
    console.error("Error: ", error);
  }
}
