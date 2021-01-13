export const addBookmarks = (cat) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("bookmarks")
      .add({
        ...cat,
        authorId: authorId,
        date: new Date(),
      })
      .then(() => {
        dispatch({ type: "BOOKMARK_ADDED" }, cat);
      });
  };
};
