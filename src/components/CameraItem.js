import React from "react";

const CameraItem = (props) => {
  const { item } = props;
  const classes = `camera_pic ${item.imgClass}`;
  return (
    <li className="camera_item">
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
};

export default CameraItem;
