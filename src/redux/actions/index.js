import Axios from "axios";

export const getCats = (page) => {
  return (dispatch, getState) => {
    dispatch({ type: "GETTING_CATS" });
    Axios.get(`https://api.thecatapi.com/v1/breeds?limit=10&page=${page}`).then(
      (res) => {
        const data = res.data;
        dispatch({ type: "GET_CATS_SUCCESSFUL", data });
      }
    );
  };
};

export const getCatImages = () => {
  return (dispatch, getState) => {
    dispatch({ type: "GETING_CAT_IMAGES" });
    Axios.get("https://api.thecatapi.com/v1/images/search?limit=12").then(
      (res) => {
        const data = res.data;
        dispatch({ type: "GETTING_CAT_IMAGES_SUCCESSFUL", data });
      }
    );
  };
};

export const getMoreCatImages = () => {
  return (dispatch, getState) => {
    Axios.get("https://api.thecatapi.com/v1/images/search?limit=12").then(
      (res) => {
        const data = res.data;
        dispatch({ type: "GETTING_MORE_CAT_IMAGES_SUCCESSFUL", data });
      }
    );
  };
};
