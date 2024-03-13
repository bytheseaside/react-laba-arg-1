import React from "react";

export const Button = React.memo(
  ({ boxStyle, innerHtml, value, handleOnPushKey }) => {
    return (
      <div
        className={boxStyle}
        aria-label="command-key"
        onClick={() => handleOnPushKey(value)}
      >
        <div className="center" data-testid="innerText">
          {innerHtml}
        </div>
      </div>
    );
  }
);
