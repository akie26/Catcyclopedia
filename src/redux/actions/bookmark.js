export const addBookmarks = (cat) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("bookmarks")
      .doc(`${cat.id}${authorId}`)
      .set({
        ...cat,
        authorId: authorId,
        date: new Date(),
      })
      .then(() => {
        dispatch({ type: "BOOKMARK_ADDED" }, cat);
      });
  };
};

export const removeBookmark = (id) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("bookmarks")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: "BOOKMARK_REMOVED" });
      });
  };
};
