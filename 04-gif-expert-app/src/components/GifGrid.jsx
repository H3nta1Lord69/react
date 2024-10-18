import PropTypes from "prop-types";
import { getGif } from "../helpers/getGif";
import { useEffect, useState } from "react";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImage = await getGif(category);
    setImages(newImage);
  };

  // Trigger an effect in any desired condition
  useEffect(() => {
    getImages();
    // [] means it will trigger a single time
  }, []);

  return (
    <>
      <h3>{category}</h3>

      <ol>
        {images.map(({ id, title, url }) => (
          <li key={id} alt={title}>
            <img src={url}></img>
          </li>
        ))}
      </ol>
    </>
  );
};

// GifGrid PropTypes
GifGrid.propTypes = {
  category: PropTypes.string,
};
