// import { Fragment } from "react";
// function App() {
//   // document.createElement...
//   return <h1>Hello world</h1>;
// }

// export default App;

// const newMessage = "Carl";
// const newMessage = [1,2,3,4,5,6,7,8,9];
const greeting = () => {
  return "Holi";
};
// const newMessage = {
//   message: "Hi",
//   name: "Carl",
// };

// Functional component
export const App = () => {
  return (
    <>
      <h1>{greeting()}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>A paragraph</p>
    </>
  );
};

// export const anotherApp = () => <h1>Arrow function</h1>
