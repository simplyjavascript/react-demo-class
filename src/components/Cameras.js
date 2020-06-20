import React, { Component } from "react";

export default class Cameras extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("--> componentDidUpdate", prevState, prevProps);
  }

  render() {
    return (
      <div className="cameras_wrapper">
        <ul className="cameras_list">
          {this.props.cameras.map((item) => {
            const classes = `camera_pic ${item.imgClass}`;
            return (
              <li
                onClick={() => this.props.cameraSelection(item)}
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
  }
  componentWillUnmount() {
    console.log("Any clean up logic needs to be done here....");
  }
}
