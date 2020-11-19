import React, { useState } from "react";

import themeContext from "../contexts/theme";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <themeContext.Provider value={[theme, setTheme]}>
        <Component {...pageProps} />
      </themeContext.Provider>
    </>
  );
}

export default MyApp;
