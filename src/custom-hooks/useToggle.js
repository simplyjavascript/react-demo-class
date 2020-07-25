import { useEffect, useState, useCallback } from "react";
// false
const useToggle = (currentHoverFlag) => {
  //false
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(currentHoverFlag);
  }, [currentHoverFlag]); //false
  return {
    isOpen: isOpen,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    toggle: useCallback(() => setIsOpen((status) => !status)),
  };
};

export default useToggle;
