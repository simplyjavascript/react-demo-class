import React, { useEffect, useState, useCallback } from "react";
// false
const useToggle = (currentHoverFlag) => {
  //false
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(currentHoverFlag);
  }, [currentHoverFlag]); //false
  return {
    isOpen: isOpen,
    toggle: useCallback(() => setIsOpen((status) => !status)),
  };
};

export default useToggle;
