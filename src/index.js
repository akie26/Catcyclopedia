import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/sass/_base.scss";
import store from "./redux/store";
import { Provider, useSelector } from "react-redux";
import {
  ReactReduxFirebaseProvider as FirebaseProvider,
  isLoaded,
} from "react-redux-firebase";
import firebase from "./config/firestoreConfig";
import FullScreenSpinner from "./components/fullPageSpinner";
import { createFirestoreInstance } from "redux-firestore";
const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <FullScreenSpinner />;
  return children;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </FirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
