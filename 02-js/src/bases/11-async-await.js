// const getImgPromise = () =>
//   new Promise((resolve) => resolve("https://www.google.com"));

// getImgPromise().then(console.log);

const getImg = async () => {
  try {
    const apiGiphy = "0l5E6D2KZMCQhT3IJoSuGG2o8ARiNHyf";
    const request = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiGiphy}`
    );

    const { data } = await request.json();
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImg();
