import React, { useEffect, useState } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FaHeart } from "react-icons/fa";
import { InfoStats, ProgressBars } from "../components/InfoStats";
import { Image } from "../components/Catalouge";
import FullScreenSpinner from "../components/fullPageSpinner";
import { useDispatch, connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCats } from "../redux/actions";
import { addBookmarks } from "../redux/actions/bookmark";
import IosArrowBack from "react-ionicons/lib/IosArrowBack";
import IosArrowForward from "react-ionicons/lib/IosArrowForward";

function Breeds(props) {
  const isLoaded = props.loading;
  const catFacts = props.cats;
  const history = useHistory();
  console.log(props.uid);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  const addToBookmarks = (cat) => {
    if (props.uid === undefined) {
      console.log("yes");
      history.push("/register");
    } else {
      dispatch(addBookmarks(cat));
    }
  };

  const prevPage = () => {
    if (page !== 0) {
      setPage((page) => page - 1);
    }
  };
  const nextPage = () => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    dispatch(getCats(page));
  }, [page, dispatch]);

  return isLoaded ? (
    <FullScreenSpinner />
  ) : (
    <section className="breeds">
      {catFacts.map((cat, ind) => (
        <div className="breed-info-wrapper" key={ind}>
          <div className="info--image">
            <Image cat={cat.image} name={cat.name} />
            <button onClick={() => addToBookmarks(cat)}>
              <FaHeart className="icon" size={50} />
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
      ))}

      <div className="pagination">
        {page === 0 ? (
          <button
            disabled={true}
            style={{ opacity: "0" }}
            onClick={() => prevPage()}
          >
            <IosArrowBack />
          </button>
        ) : (
          <button onClick={() => prevPage()}>
            <IosArrowBack />
          </button>
        )}
        <button>
          <span className="indicator">{page + 1}</span>
        </button>
        {page > 5 ? (
          <button
            style={{ opacity: "0" }}
            disabled={true}
            onClick={() => nextPage()}
          >
            <IosArrowForward />
          </button>
        ) : (
          <button onClick={() => nextPage()}>
            <IosArrowForward />
          </button>
        )}
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.cats.loading,
    cats: state.cats.cats,
    uid: state.firebase.auth.uid,
  };
};

export default connect(mapStateToProps)(Breeds);
