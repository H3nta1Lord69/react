import PropTypes from "prop-types";
import { getGif } from "../helpers/getGif";
import { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";

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

      <div>
        {images.map((image) => (
          <GifGridItem {...image} key={image.id} />
        ))}
      </div>
    </>
  );
};

// GifGrid PropTypes -- anything
GifGrid.propTypes = {
  category: PropTypes.string,
};
