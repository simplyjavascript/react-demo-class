import React, { Component } from "react";
import axios from "../utils/axios-unsplash";
import Loading from "./Loading";
export default class ImageGallery extends Component {
  state = {
    images: [],
    searchQuery: "camera",
    isLoading: false,
  };
  componentDidMount() {
    this.setState({
      isLoading: true,
    });

    axios
      .get("/search/photos", {
        params: { query: this.state.searchQuery },
      })
      .then((response) => {
        this.setState(
          (state, props) => {
            return {
              images: response.data.results,
              isLoading: false,
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
        {this.state.isLoading ? (
          <Loading />
        ) : (
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
        )}
      </div>
    );
  }
}
