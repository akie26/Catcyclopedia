import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useDispatch, connect } from "react-redux";
import { getCatImages, getMoreCatImages } from "../redux/actions";
import FullScreenSpinner from "../components/fullPageSpinner";

function Gallery(props) {
  const dispatch = useDispatch();
  const images = props.images;
  const isLoaded = props.loading;

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      dispatch(getMoreCatImages());
    };
    dispatch(getCatImages());
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  return isLoaded ? (
    <FullScreenSpinner />
  ) : (
    images.map((image, ind) => (
      <section key={ind} className="gallery">
        {image.map((cat, ind) => (
          <LazyLoadImage
            className="image"
            key={ind}
            alt=""
            effect="blur"
            src={cat.url}
          />
        ))}
      </section>
    ))
  );
}

const mapStateToProps = (state) => {
  return {
    images: state.cats.images,
    loading: state.cats.loading,
  };
};

export default connect(mapStateToProps)(Gallery);
