import { Button } from "../components/Button";
import keys from "../keyConfig";
import React from "react";

export const Keypad = React.memo(({ handleOnPushKey }) => {
  const renderKeys = () => {
    return keys.map((el, idx) => {
      return (
        <Button
          key={idx.toString()}
          innerHtml={el.innerHtml}
          boxStyle={el.boxStyle}
          value={el.value}
          handleOnPushKey={handleOnPushKey}
        />
      );
    });
  };

  return <div className="button-grid bottom-rounded--all">{renderKeys()}</div>;
});
