import React from "react";

export const Button = React.memo(
  ({ boxStyle, innerHtml, value, handleOnPushKey }) => {
    return (
      <div className={boxStyle} onClick={() => handleOnPushKey(value)}>
        <div className="center">{innerHtml}</div>
      </div>
    );
  }
);
