import React, { useState, useEffect } from "react";
import fetchPhotos from "../fetchPhotos";

export const PhotoContainer = React.memo(({ url, name, id }) => {
  const [photo, setPhoto] = useState({ url: url, name: name, id: id });
  const [error, setError] = useState({ error: false, errorMessage: "" });
  const [isReloading, setIsReloading] = useState(false);
  
  // reload new data for this single container
  const reload = async () => {
    setIsReloading(true);
    try {
      const quantity = 1;
      const [photo] = await fetchPhotos(quantity);
      setPhoto(() => ({
        id: photo.first_name + photo.id,
        url: photo.url,
        name: `${photo.first_name} ${photo.last_name}`,
      }));
    } catch (error) {
      setError({
        error: true,
        errorMessage: error.message,
      });
    } finally {
      setIsReloading(false);
    }
  };

  //throw new Error if occurs
  useEffect(() => {
    if (error.error) {
      throw new Error(error.errorMessage);
    }
  }, [error]);

  return (
    <div className="container" onClick={() => reload()} key={photo.id}>
      <img
        className="container__profile_image"
        src={photo.url}
        alt={photo.name}
      />
      <div
        className={
          isReloading
            ? "container__image_box container__image_box--animate"
            : "container__image_box"
        }
      />
    </div>
  );
});
