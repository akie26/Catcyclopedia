import React from "react";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import { FaHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { InfoStats, ProgressBars } from "../components/InfoStats";
import { Image } from "../components/Catalouge";
import FullScreenSpinner from "./fullPageSpinner";
import { removeBookmark } from "../redux/actions/bookmark";
import { toast } from "react-toastify";

const BookMarkSection = ({ uid }) => {
  useFirestoreConnect([
    { collection: "bookmarks", where: ["authorId", "==", uid] },
  ]);
  const bookmarks = useSelector((state) => state.firestore.ordered.bookmarks);
  const dispatch = useDispatch();
  const removeFromBookMarks = (id) => {
    dispatch(removeBookmark(`${id.id}${id.authorId}`));
  };
  if (!isLoaded(bookmarks)) {
    return <FullScreenSpinner />;
  }
  return (
    <div className="breeds">
      {bookmarks.length < 1 ? (
        <div className="empty-array">ADD UR FAVOURITE CAT BREEDS</div>
      ) : (
        bookmarks.map((cat, ind) => (
          <div className="breed-info-wrapper" key={ind}>
            <div className="info--image">
              <Image cat={cat.image} name={cat.name} />
              <button onClick={() => removeFromBookMarks(cat)}>
                <FaHeart className="icon" color="red" size={50} />
              </button>
            </div>
            <div className="info--stats">
              <InfoStats
                catName={cat.name}
                origin={cat.origin}
                description={cat.description}
                wiki_url={cat.wikipedia_url}
                cfa_url={cat.cfa_url}
              />
              <ProgressBars
                adapt={cat.adaptability}
                affection={cat.affection_level}
                friendlyness={cat.stranger_friendly}
                intelligence={cat.intelligence}
                health_issues={cat.health_issues}
                rare={cat.rare}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BookMarkSection;
