const initialState = {
  loading: false,
  cats: [],
  images: [],
};

const catReducer = (state = initialState, action) => {
  const { data } = action;
  switch (action.type) {
    case "GETTING_CATS":
      return {
        ...state,
        loading: true,
      };
    case "GET_CATS_SUCCESSFUL":
      return {
        ...state,
        loading: false,
        cats: data,
      };
    case "GETING_CAT_IMAGES":
      return {
        ...state,
        loading: true,
      };
    case "GETTING_CAT_IMAGES_SUCCESSFUL":
      return {
        ...state,
        loading: false,
        images: [...state.images, data],
      };
    case "GETTING_MORE_CAT_IMAGES_SUCCESSFUL":
      return {
        ...state,
        loading: false,
        images: [...state.images, data],
      };
    default:
      return {
        ...state,
      };
  }
};
export default catReducer;
