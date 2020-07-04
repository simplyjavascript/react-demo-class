import React, { Component } from "react";
import Quotes from "../components/Quotes";
import SearchBar from "../components/SearchBar";
import AppContext from "../context/appContext";
import Cameras from "../components/Cameras";
import cameraDetails from "../data/camera_details";

export default class Home extends Component {
  state = {
    cameras: cameraDetails,
    selectedCamera: null,
    filter: "",
  };

  handleSearch = (val) => {
    this.setState((state, props) => {
      return {
        filter: val,
      };
    });
  };
  handleSelection = (item) => {
    this.setState((state, props) => {
      return {
        selectedCamera: item,
      };
    });
  };

  render() {
    const { selectedCamera, cameras, filter } = this.state;
    const filteredCameras = cameras.filter((c) =>
      c.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <Quotes />
        {selectedCamera && (
          <div className="selected_camera_wrapper">
            <span> {selectedCamera.name} </span> /
            <span> {selectedCamera.price} </span>
          </div>
        )}
        <SearchBar onSearch={(val) => this.handleSearch(val)} />
        <AppContext.Provider
          value={{
            cameras: filteredCameras,
            selectCamera: (item) => this.handleSelection(item),
          }}
        >
          <h3 className="main_headings"> Popular Cameras</h3>
          <Cameras />
        </AppContext.Provider>
      </div>
    );
  }
}
