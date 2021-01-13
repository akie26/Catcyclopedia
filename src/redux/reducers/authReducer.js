import { toast } from "react-toastify";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      toast("WELCOME BACK");
      return state;
    case "SIGN_IN_ERR":
      toast("WRONG EMAIL OR PASSWORD");
      console.log("failed");
      return state;
    case "SIGN_UP":
      toast("WELCOME");
      return state;
    case "SIGN_UP_ERRORS":
      toast("SORRY, SOMETHING WENT WRONG");
      return state;
    default:
      return state;
  }
};

export default authReducer;
