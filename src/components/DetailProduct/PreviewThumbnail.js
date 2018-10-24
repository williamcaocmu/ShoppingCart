import React from "react";
import Single1_Thumb from "../../images/single_1_thumb.jpg";
import Single2_Thumb from "../../images/single_2_thumb.jpg";
import Single3_Thumb from "../../images/single_3_thumb.jpg";

const PreviewThumbnail = props => {
  const list = [
    { src: Single1_Thumb },
    { src: Single2_Thumb },
    { src: Single3_Thumb }
  ];
  return (
    <div className="single_product_thumbnails">
      <ul>
        {list.map((item, i) => (
          <li
            className={`${
              props.selectedPicture === item.src ? "active" : null
            }`}
            onClick={() => props.selectPicture(item.src)}
            key={i}
          >
            <img alt="picture" src={item.src} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PreviewThumbnail;
