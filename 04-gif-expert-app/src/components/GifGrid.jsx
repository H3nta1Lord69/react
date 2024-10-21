import PropTypes from "prop-types";
import { GifGridItem } from "./GifGridItem";
import { useFetchGif } from "../hooks/useFetchGif";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGif(category);
  console.log(isLoading);
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
