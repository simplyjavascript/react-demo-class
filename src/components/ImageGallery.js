import React, { useState, useReducer, useEffect } from "react";
import axios from "../utils/axios-unsplash";
import Loading from "./Loading";
import Hover from "../shared/Hover";
import { Link, withRouter } from "react-router-dom";
import AppCtx from "../context/appContext";

const INITIAL_STATE = {
  isLoading: null,
  searches: {},
  images: {
    cars: [],
    cameras: [],
    mobiles: [],
  },
  current: "",
};

const reducerFn = (state, action) => {
  // logic of updating the state is within this function...
  if (action.type === "FETCH_DATA_START") {
    return {
      ...state,
      isLoading: true,
      current: "",
    };
  } else if (action.type === "UPDATE_SEARCH") {
    return {
      ...state,
      isLoading: false,
      current: action.payload,
    };
  } else if (action.type === "FETCH_DATA_SUCCESS") {
    const { searchVal, results } = action.payload;
    return {
      ...state,
      isLoading: false,
      searches: {
        ...state.searches,
        [searchVal]: true,
      },
      current: searchVal,
      images: {
        ...state.images,
        [searchVal]: results,
      },
    };
  }
  return state;
};
const ImageGallery = () => {
  const [search, setSearch] = useState("mobiles");
  const [state, dispatch] = useReducer(reducerFn, INITIAL_STATE);
  // CDM
  useEffect(() => {
    // it sent an action to the reducer -->
    // Hey reducer function, i am sending u an action, plz take care of that action.
    dispatch({ type: "UPDATE_SEARCH", payload: search });
    if (state.searches[search]) {
      return;
    }
    dispatch({ type: "FETCH_DATA_START" });
    axios
      .get(`/search/photos`, {
        params: { query: search },
      })
      .then((res) => {
        dispatch({
          type: "FETCH_DATA_SUCCESS",
          payload: {
            searchVal: search,
            results: res.data.results,
          },
        });
      });
  }, [search]);
  return (
    <div className="gallery_wrapper">
      {state.isLoading ? (
        <Loading />
      ) : (
        <>
          <h3 className="main_headings"> Instagram Gallery </h3>

          <div className="button_group">
            <Hover>
              {(isHover) => (
                <span className="tooltip_wrapper">
                  {isHover && <span className="tooltip"> Camera </span>}
                  <button onClick={() => setSearch("cameras")}>
                    <i className="fa fa-camera-retro fa-2x"></i>
                  </button>
                </span>
              )}
            </Hover>

            <Hover>
              {(isHover) => (
                <span className="tooltip_wrapper">
                  {isHover && <span className="tooltip"> Car </span>}
                  <button onClick={() => setSearch("cars")}>
                    <i className="fa fa-car fa-2x"></i>
                  </button>
                </span>
              )}
            </Hover>

            <Hover>
              {(isHover) => (
                <span className="tooltip_wrapper">
                  {isHover && <span className="tooltip"> Mobile </span>}
                  <button onClick={() => setSearch("mobiles")}>
                    <i className="fa fa-mobile fa-2x"></i>
                  </button>
                </span>
              )}
            </Hover>
          </div>
          <div className="cards">
            {state.images[state.current].map((item) => {
              return (
                <div key={item.id} className="card">
                  <img className="card_img" src={item.urls.thumb} />
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
