import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Image = ({ cat, name }) => {
  if (cat === undefined) {
    console.log(cat);
    return (
      <div>
        <LazyLoadImage
          alt=""
          className="overlay"
          effect="blur"
          src={`https://cdn2.thecatapi.com/images/SNVw2XZfK.jpg`}
        />
      </div>
    );
  }
  return (
    <LazyLoadImage alt="" className="overlay" effect="blur" src={cat.url} />
  );
};
