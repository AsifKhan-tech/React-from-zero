import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//Day-4
function MyApp() {
  return <h1>MyApp | Custom App function</h1>;
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//     name: "anchor",
//   },
//   children: "Click here to visit google",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);

const dev = " -ak";

const reactElement = React.createElement(
  "a",
  //tag name
  { href: "https://google.com", target: "_blank", name: "anchor" },
  //tag attributes
  "Click here to visit google",
  //tag text that will render on browser
  dev,
  //variable innjected after building the complete tree
);
createRoot(document.getElementById("root")).render(reactElement);
