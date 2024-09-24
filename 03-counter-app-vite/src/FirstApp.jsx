import PropTypes from "prop-types";

export const FirstApp = ({ title, subtitle }) => {
  // console.lo g(props);

  // if (!title) {
  //   throw new Error("Title doesn't exists");
  // }

  return (
    <>
      <h1>{title}</h1>
      {/* <code>{JSON.stringify(newMessageAnything)}</code> */}
      <p>{subtitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  // Mandatory prop type
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number,
};
