import React, { useState } from "react";

import Loading from "./Loading";

import { withRouter } from "react-router-dom";

import Tooltip from "../shared/Tooltip";
import useFetch from "../custom-hooks/useFetch";

const ImageGallery = () => {
  const [search, setSearch] = useState("mobiles");
  const { error, state } = useFetch(search); // Hey i need the data for all cars
  if (error) {
    return <h1>OOps...something didnt load.. try again</h1>;
  }
  return (
    <div className="gallery_wrapper">
      {state.isLoading ? (
        <Loading />
      ) : (
        <>
          <h3 className="main_headings"> Instagram Gallery </h3>

          <div className="button_group">
            <Tooltip
              tooltip="Camera"
              btnClass="fa-camera-retro"
              handleClick={() => setSearch("cameras")}
            />
            <Tooltip
              tooltip="Car"
              btnClass="fa-car"
              handleClick={() => setSearch("cars")}
            />
            <Tooltip
              tooltip="Mobile"
              btnClass="fa-mobile"
              handleClick={() => setSearch("mobiles")}
            />
          </div>
          <div className="cards">
            {state.images &&
              state.images[state.current] &&
              state.images[state.current].map((item) => {
                return (
                  <div key={item.id} className="card">
                    <img
                      alt="dfsfd"
                      className="card_img"
                      src={item.urls.thumb}
                    />
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
};

export default withRouter(ImageGallery);
