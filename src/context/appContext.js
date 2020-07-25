import { createContext } from "react";

const appContext = createContext({
  images: {},
  setImages: () => {},
  cameras: [],
  theme: "light",
  toggleTheme: () => {},
  selectCamera: () => {},
});

export default appContext;
