import React from "react";
import useToggle from "../custom-hooks/useToggle";

const Terms = () => {
  const { isOpen, toggle } = useToggle(true);
  const classes = isOpen ? "accordion_wrapper open" : "accordion_wrapper";
  return (
    <div className={classes}>
      <button onClick={toggle} className="accordion_header">
        Can I share the pics?
      </button>
      {isOpen && <div className="accordion_content">No plz dont</div>}
    </div>
  );
};
export default Terms;
