import React from "react";

import withToggle from "../shared/withToggle";

const FAQ = ({ isOpen, toggle }) => {
  const classes = isOpen ? "accordion_wrapper open" : "accordion_wrapper";
  return (
    <div className={classes}>
      <button onClick={toggle} className="accordion_header">
        Can I buy the photos?
      </button>
      {isOpen && (
        <div className="accordion_content">
          Of course! You can. Drop me a mail and I will be happy to let you know
          the details.
        </div>
      )}
    </div>
  );
};
export default withToggle(FAQ);
