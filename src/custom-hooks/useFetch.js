import { useEffect, useState, useReducer } from "react";
import axios from "../utils/axios-unsplash";

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

const useFetch = (search) => {
  // data , loading , errors, search
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searched, setSearched] = useState([]);
  const [state, dispatch] = useReducer(reducerFn, INITIAL_STATE);

  useEffect(() => {
    dispatch({
      type: "FETCH_DATA_SUCCESS",
      payload: {
        searchVal: search,
        results: data,
      },
    });
  }, [data, search]);

  useEffect(() => {
    dispatch({
      type: "UPDATE_SEARCH",
      payload: {
        current: search,
      },
    });
  }, [search]);
  useEffect(() => {
    const fetchUnsplashData = async () => {
      try {
        if (searched.includes(search)) {
          return;
        }
        setLoading(true);
        const res = await axios.get(`/search/photos`, {
          params: { query: search },
        });
        setLoading(false);
        setData(res.data.results);
        setSearched([...searched, search]);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchUnsplashData();
  }, [search, searched]);

  return {
    data,
    loading,
    error,
    state,
  };
};

export default useFetch;
