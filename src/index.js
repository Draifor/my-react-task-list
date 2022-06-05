import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        "my-style": {
          bg: "#006400",
          color: "white",
          border: "2px solid #fff2",
          _hover: { bg: "#006400aa" },
          _focus: { boxShadow: "0 0 2px 2px #0b940b" },
        },
      },
    },
    Breadcrumb: {
      baseStyle: {
        link: {
          _hover: {
            textDecoration: "none",
          },
        },
      },
    },
  },
});

export default theme;
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
