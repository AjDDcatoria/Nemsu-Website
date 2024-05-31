import React from "react";

export const imgSize = (size) => {
  const sizes = {
    large: "img-large",
    medium: "h-48 w-48",
  };

  return sizes[size] || "";
};

const Card = ({ img, className, imageSize, children, cardWidth }) => {
  return (
    <div
      className={`${className} ${cardWidth} news-cards rounded overflow-hidden box bg-white`}
    >
      {img && (
        <img src={img} className={`${imgSize(imageSize)} object-cover`} />
      )}
      <div className="p-3">{children}</div>
    </div>
  );
};

export default Card;
