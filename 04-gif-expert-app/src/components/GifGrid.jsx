import PropTypes from "prop-types";
import { getGif } from "../helpers/getGif";
import { useEffect } from "react";

export const GifGrid = ({ category }) => {
  // Trigger an effect in any desired condition
  useEffect(() => {
    getGif(category);
    // [] means it will trigger a single time
  }, []);

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};

// GifGrid PropTypes
GifGrid.propTypes = {
  category: PropTypes.string,
};
