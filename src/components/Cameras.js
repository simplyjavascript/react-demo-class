// default export + named export
import React, { useContext } from "react";
import AppContext from "../context/appContext";

import CameraItem from "./CameraItem";

const Cameras = () => {
  const appCtx = useContext(AppContext);
  const { cameras, selectCamera } = appCtx;
  return (
    <div className="cameras_wrapper">
      <ul className="cameras_list">
        {cameras.map((item) => {
          return <CameraItem handleSelection={selectCamera} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default Cameras;
