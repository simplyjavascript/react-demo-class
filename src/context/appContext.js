import React, { createContext } from "react";

const appContext = createContext({
  cameras: [],
  theme: "light",
  toggleTheme: () => {},
  selectCamera: () => {},
});

export default appContext;
