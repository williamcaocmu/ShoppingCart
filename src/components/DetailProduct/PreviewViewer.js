import React from "react";

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
