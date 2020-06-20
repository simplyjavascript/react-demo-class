import React, { Component } from "react";
import Logo from "./components/Logo";
import cameraDetails from "./data/camera_details";
import Cameras from "./components/Cameras";
import Quotes from "./components/Quotes";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";

export default class App extends Component {
  state = {
    iconClass: "fa fa-film fa-3x",
    logoText: "Black & White Frames",
    inputVal: "Testing",
    cameras: cameraDetails,
    selectedCamera: null,
    filter: "",
  };

  handleSearch = (val) => {
    console.log("Searching for>>>", val);
    this.setState(() => {
      return {
        filter: val,
      };
    });
  };

  handleCameraSelection = (item) => {
    // console.log("Receving item from click>>>", item);
    this.setState(() => {
      return {
        selectedCamera: item,
      };
    });
  };

  handleClick = () => {
    // console.log("clicked the button");
    this.setState(() => {
      return {
        iconClass: "fa fa-leaf fa-3x",
        logoText: "Save our planet",
      };
    });
  };
  handleChange = (e) => {
    const val = e.target.value;

    this.setState(
      (state, props) => {
        return {
          inputVal: val,
        };
      },
      () => {
        // console.log(this.state);
      }
    );
  };

  render() {
    const { selectedCamera, filter, cameras } = this.state;
    const filteredResult = cameras.filter((c) =>
      c.name.toLowerCase().includes(filter.toLowerCase())
    );
    // console.log("selectedCamera>>>>", selectedCamera);
    return (
      <div>
        <Logo data={this.state}>Green & White Frames</Logo>
        <Quotes />
        {selectedCamera ? (
          <div className="selected_camera_wrapper">
            <span> {selectedCamera.name} </span> /
            <span> {selectedCamera.price} </span>
          </div>
        ) : null}
        <SearchBar cameraSearch={this.handleSearch} />
        <Cameras
          cameraSelection={this.handleCameraSelection}
          cameras={filteredResult}
        />
        <ImageGallery />
      </div>
    );
  }
}
