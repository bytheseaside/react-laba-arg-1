import { useContext } from "react";
import { PhotoContainer } from "./PhotoContainer/PhotoContainer";
import { AppContext } from "../context/AppContext";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

export const PhotoList = () => {
  const { avatarQuantity } = useContext(AppContext);

  return (
    <>
      {Array(avatarQuantity.quantity)
        .fill()
        .map((emptyElement, idx) => (
          <ErrorBoundary key={idx}>
            <PhotoContainer id={idx} />
          </ErrorBoundary>
        ))}
    </>
  );
};
