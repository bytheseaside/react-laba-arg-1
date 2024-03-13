/* eslint-disable react-hooks/exhaustive-deps */
import { PhotoContainer } from "./PhotoContainer";
import ErrorBoundary from "./ErrorBoundary";
import React, { useState, useEffect } from "react";
import fetchPhotos from "../fetchPhotos";

export default function PhotoList({
  cantPhotos,
  handleLoading,
  refresh,
  handleRefresh,
}) {
  const [data, setData] = useState([]);
  const [error, setError] = useState({ error: false, errorMessage: "" });
  const [photos, setPhotos] = useState([]);

  const callAPI = async (quantity) => {
    try {
      return await fetchPhotos(quantity);
    } catch (error) {
      setError({
        error: true,
        errorMessage: error.message,
      });
    }
  };

  //call data from api into data array, set 10 values as default
  const init = async () => {
    const initialValue = 10;
    const avatars = await callAPI(initialValue);
    setData(avatars);
    handleLoading();
  };

  //Push single photo into array from data array.
  //When data array is empty calls API again
  const pushPhoto = () => {
    if (data.length > 0) {
      const auxData = [...data];
      const newPhoto = auxData.pop();
      setPhotos((photos) => [...photos, newPhoto]);
      if (auxData.length === 0) {
        handleLoading();
        init();
      } else {
        setData(auxData);
      }
    }
  };

  //refresh as many values there are in photos
  const refreshAll = async () => {
    const avatars = await callAPI(cantPhotos);
    setPhotos(avatars);
    handleRefresh();
  };

  //will throw error if error state changes
  useEffect(() => {
    if (error.error) {
      throw new Error(error.errorMessage);
    }
  }, [error]);

  //call once when render
  useEffect(() => {
    init();
  }, []);

  //call when refresh is set into TRUE
  useEffect(() => {
    if (refresh && photos.length) {
      refreshAll();
    }
  }, [refresh]);

  //call every time when cantPhotos changes
  useEffect(() => {
    if (data) {
      pushPhoto();
    }
  }, [cantPhotos]);

  return (
    <>
      {photos &&
        photos.map((photo) => {
          return (
            <ErrorBoundary key={photo.name + photo.id}>
              <PhotoContainer url={photo.url} name={photo.name} id={photo.id} />
            </ErrorBoundary>
          );
        })}
    </>
  );
}
