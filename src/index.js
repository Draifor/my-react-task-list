import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { UserProvider } from "./providers/UserProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        "my-style": {
          bg: "#006400",
          color: "white",
          border: "1px solid #fff2",
          boxShadow: "0 0 5px 2px #006400",
          _hover: { bg: "#006400bb" },
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
  config: {
    initiColorMode: "dark",
    useSytemColorMode: false,
  },
});

export default theme;
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
     <UserProvider>
       <App />
     </UserProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
