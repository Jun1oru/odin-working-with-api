const url =
  "https://api.giphy.com/v1/gifs/translate?api_key=qLKddPhNlo5HIyU9n9QfDx3skxU5EjBx&s=dogs";

export async function fetchGif() {
  try {
    const gif = await fetch(url, { mode: "cors" })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        return response.data.images.original.url;
      });
    console.log(gif);
    return gif;
  } catch (error) {
    console.error("Error: ", error);
  }
}
