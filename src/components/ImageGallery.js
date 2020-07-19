import React, { Component } from "react";
import axios from "../utils/axios-unsplash";
import Loading from "./Loading";
import Hover from "../shared/Hover";
import { Link, withRouter } from "react-router-dom";
import AppCtx from "../context/appContext";
class ImageGallery extends Component {
  static contextType = AppCtx;
  state = {
    images: {
      cars: [],
      cameras: [],
      mobiles: [],
    },
    searches: {},
    isLoading: false,
    current: "mobiles",
  };
  selectGallery = (item) => {
    this.context.setImages(item);
    // route to any part of your app.
    this.props.history.push(`${this.props.match.path}/${item.id}`);
  };

  fetchData = (searchVal) => {
    if (this.state.searches[searchVal]) {
      this.setState({
        current: searchVal,
      });
      return;
    }
    axios
      .get(`/search/photos`, {
        params: { query: searchVal },
      })
      .then((res) => {
        this.setState(
          (state, props) => {
            return {
              ...this.state,
              isLoading: false,
              searches: {
                ...this.state.searches,
                [searchVal]: true,
              },
              current: searchVal,
              images: {
                ...this.state.images,
                [searchVal]: res.data.results,
              },
            };
          },
          () => {
            console.log("STATE>", this.state);
          }
        );
      });
  };
  triggerSearch = (searchVal) => {
    this.fetchData(searchVal);
  };

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    this.fetchData("mobiles");
  }
  render() {
    console.log(this.props);
    return (
      <div className="gallery_wrapper">
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="button_group">
              <Hover>
                {(isHover) => (
                  <span className="tooltip-hover">
                    {isHover && <span className="tooltip"> Camera </span>}
                    <button onClick={() => this.triggerSearch("cameras")}>
                      <i className="fa fa-camera-retro fa-2x"></i>
                    </button>
                  </span>
                )}
              </Hover>

              <Hover>
                {(isHover) => (
                  <span className="tooltip-hover">
                    {isHover && <span className="tooltip"> Car </span>}
                    <button onClick={() => this.triggerSearch("cars")}>
                      <i className="fa fa-car fa-2x"></i>
                    </button>
                  </span>
                )}
              </Hover>

              <Hover>
                {(isHover) => (
                  <span className="tooltip-hover">
                    {isHover && <span className="tooltip"> Mobiles </span>}
                    <button onClick={() => this.triggerSearch("mobiles")}>
                      <i className="fa fa-mobile fa-2x"></i>
                    </button>
                  </span>
                )}
              </Hover>
            </div>

            <div className="cards">
              {this.state.images[this.state.current].map((item) => {
                return (
                  <div className="card" key={item.id}>
                    <div onClick={() => this.selectGallery(item)}>
                      <img
                        className="card_img"
                        alt="img"
                        src={item.urls.regular}
                      />
                    </div>

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
          </>
        )}
      </div>
    );
  }
}

export default withRouter(ImageGallery);
