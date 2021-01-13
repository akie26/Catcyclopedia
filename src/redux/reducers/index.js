import { combineReducers } from "redux";
import catReducer from "./catReducer";
import authReducer from "./authReducer";
import bookmarkReducer from "./bookmarkReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

export default combineReducers({
  loading: false,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  cats: catReducer,
  bookmark: bookmarkReducer,
  auth: authReducer,
});
