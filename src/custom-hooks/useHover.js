import { useEffect, useState } from "react";
// false
const useHover = (currentHoverFlag) => {
  //false
  const [hovering, setHovering] = useState(false);
  useEffect(() => {
    setHovering(currentHoverFlag);
  }, [currentHoverFlag]); //false
  return hovering;
};

export default useHover;
