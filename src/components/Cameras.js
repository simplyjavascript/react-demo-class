// default export + named export
import React from "react";
import AppContext from "../context/appContext";

const Cameras = () => {
  return (
    <AppContext.Consumer>
      {(ctx) => {
        const { cameras, selectCamera } = ctx;
        return (
          <div className="cameras_wrapper">
            <ul className="cameras_list">
              {cameras.map((item) => {
                const classes = `camera_pic ${item.imgClass}`;
                console.log(item);
                return (
                  <li
                    onClick={() => selectCamera(item)}
                    className="camera_item"
                    key={item.id}
                  >
                    <div className="camera_card">
                      <div className={classes}></div>
                      <div className="camera_content">
                        <div className="camera_title">Model: {item.name}</div>
                        <p className="camera_text">
                          Rating: {item.rating} / Price {item.price}$
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Cameras;
