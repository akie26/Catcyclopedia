import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import BookMarkSection from "../components/BookmarkSection";

const BookMarks = (props) => {
  if (!props.uid) return <Redirect to="/register" />;
  return <BookMarkSection uid={props.uid} />;
};
const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
  };
};
export default connect(mapStateToProps)(BookMarks);
