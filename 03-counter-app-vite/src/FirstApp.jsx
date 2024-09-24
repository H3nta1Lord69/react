import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle }) => {
  // console.lo g(props);

  // if (!title) {
  //   throw new Error("Title doesn't exists");
  // }

  return (
    <>
      <h1>{title}</h1>
      {/* <code>{JSON.stringify(newMessageAnything)}</code> */}
      <p>{subTitle}</p>
    </>
  );
};

// Usually this goes at the end of the file always

FirstApp.propTypes = {
  // Mandatory prop type
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number,
};

// This executes first
FirstApp.defaultProps = {
  title: "There's no title",
};
