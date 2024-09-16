const apiGiphy = "0l5E6D2KZMCQhT3IJoSuGG2o8ARiNHyf";

const request = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiGiphy}`
);

request
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);
