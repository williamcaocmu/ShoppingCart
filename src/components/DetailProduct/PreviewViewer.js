import React from "react";
import Single1_Thumb from "../../images/single_1_thumb.jpg";
import Single2_Thumb from "../../images/single_2_thumb.jpg";
import Single3_Thumb from "../../images/single_3_thumb.jpg";

const PreviewViewer = props => {
  return (
    <div className="single_product_image">
      <div
        className="single_product_image_background"
        style={{ backgroundImage: `url(${props.selectedPicture})` }}
      />
    </div>
  );
};

export default PreviewViewer;
