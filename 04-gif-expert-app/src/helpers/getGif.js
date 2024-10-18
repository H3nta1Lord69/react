export const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=0l5E6D2KZMCQhT3IJoSuGG2o8ARiNHyf&q=${category}&limit=5`;
  const resp = await fetch(url);
  const { data = [] } = await resp.json();

  const gif = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gif;
};