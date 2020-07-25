import React, { useEffect } from "react";
// false
const useHover = (currentHoverFlag) => {
  //false
  const [hovering, setHovering] = React.useState(false);
  useEffect(() => {
    setHovering(currentHoverFlag);
  }, [currentHoverFlag]); //false
  return hovering;
};

export default useHover;
