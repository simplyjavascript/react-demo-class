import React, { useState } from "react";
import useHover from "../custom-hooks/useHover";

const Tooltip = (props) => {
  const [hover, setHover] = useState(false);
  const result = useHover(hover); // false
  const { tooltip, btnClass, handleClick } = props;
  return (
    <span className="tooltip_wrapper">
      {result && <span className="tooltip"> {tooltip} </span>}
      <button
        onMouseOut={() => setHover(false)}
        onMouseOver={() => setHover(true)}
        onClick={handleClick}
      >
        <i className={`fa ${btnClass} fa-2x`}></i>
      </button>
    </span>
  );
};

export default Tooltip;
