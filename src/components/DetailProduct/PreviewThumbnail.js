import React from "react";

const PreviewThumbnail = props => {
  const { image, images } = props.product;
  return (
    <div className="single_product_thumbnails">
      <ul>
        <li
          className={`${image === props.selectedPicture ? "active" : null}`}
          onClick={() => props.onSelect(image)}
        >
          <img alt="true" src={image} />
        </li>
        {images.map((item, key) => (
          <li
            className={`${item === props.selectedPicture ? "active" : null}`}
            onClick={() => props.onSelect(item)}
            key={key}
          >
            <img alt="true" src={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PreviewThumbnail;
