import React, { Component } from "react";
import axios from "axios";
export default class ImageGallery extends Component {
  state = {
    images: [],
    searchQuery: "camera",
  };
  componentDidMount() {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: this.state.searchQuery },
        headers: {
          Authorization:
            "Client-ID 304c62a38e4226f6a6628136def79066d4a9eaf9e258614779e711b2416a3a36",
        },
      })
      .then((response) => {
        console.log("Before state update::", this.state);
        this.setState(
          (state, props) => {
            return {
              images: response.data.results,
            };
          },
          () => {
            console.log("After state update", this.state);
          }
        );
      });
  }
  render() {
    return (
      <div className="gallery_wrapper">
        <h3 className="gallery_header"> Gallery </h3>
        <div className="cards">
          {this.state.images.map((item) => {
            return (
              <div className="card" key={item.id}>
                <img className="card_img" alt="img" src={item.urls.regular} />
                <div className="card_desc">
                  <span className="twitter">
                    @{item.user.instagram_username}
                  </span>
                  <span className="twitter_likes">
                    <i className="fa fa-heart"></i> {item.user.total_likes}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
