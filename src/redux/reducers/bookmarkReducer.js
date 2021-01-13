const bookmarkReducer = (state = {}, action) => {
  const { data } = action;
  switch (action.type) {
    case "BOOKMARK_ADDED":
      return {
        ...state,
        data,
      };
    default:
      return state;
  }
};

export default bookmarkReducer;
