import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    search: "", // nikon
  };
  updateSearch = (val) => {
    console.log(val);
    this.setState(
      (state, props) => {
        return { search: val };
      },
      () => {
        this.props.onSearch(val);
      }
    );
  };

  render() {
    return (
      <form>
        <div className="search_bar">
          <label htmlFor="search">Search For Cameras</label>
          <i className="fa fa-search search_icon"></i>
          <input
            value={this.state.search}
            type="text"
            id="search"
            placeholder="Eg: Nikon.."
            onChange={(e) => this.updateSearch(e.target.value)}
          />
        </div>
      </form>
    );
  }
}
