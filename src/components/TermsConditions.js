import React from "react";
import Toggler from "../shared/Toggle";

const Terms = (props) => {
  return (
    <Toggler
      headerText="Can I share the pics?"
      render={(isOpen) => (
        <>{isOpen && <div className="accordion_content">No plz dont</div>}</>
      )}
    ></Toggler>
  );
};
export default Terms;
