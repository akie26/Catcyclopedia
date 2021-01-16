import { toast } from "react-toastify";

const bookmarkReducer = (state = {}, action) => {
  const { data } = action;
  switch (action.type) {
    case "BOOKMARK_ADDED":
      return {
        ...state,
        data,
      };
    case "BOOKMARK_REMOVED":
      toast("REMOVED BOOKMARK");
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default bookmarkReducer;
