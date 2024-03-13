import loadingCircle from "../assets/loading_circle.svg";
import plusIcon from "../assets/plus_icon.svg";
import React from "react";

export const GetButton = React.memo(({ handleNewPhoto, loading }) => {
  return (
    <button className="square_button" onClick={handleNewPhoto}>
      {loading ? (
        <img
          className="square_button__loading"
          src={loadingCircle}
          alt="loading Circle"
        />
      ) : (
        <img className="square_button__icon" src={plusIcon} alt="plus_icon" />
      )}
    </button>
  );
});
