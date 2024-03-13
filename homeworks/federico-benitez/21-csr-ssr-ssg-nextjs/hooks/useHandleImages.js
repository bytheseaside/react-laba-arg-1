import { useEffect, useState, useCallback } from 'react';
import useGetImages from './useGetImages';

export default function useHandleImage(initialData = []) {
  const { images, addNewPicture, refreshAll, refreshOne } = useGetImages(initialData);
  const [refetchingImages, setRefetchingImages] = useState([]);

  function onRefreshOne(selectedIndex) {
    setRefetchingImages([selectedIndex]);
    refreshOne(selectedIndex);
  }

  function onRefreshAll() {
    const loadingImagesIndex = [...Array(images.length)].map((_, i) => i);
    setRefetchingImages(loadingImagesIndex);
    refreshAll();
  }

  const isLoading = useCallback(
    (index) => {
      return refetchingImages.some((imgIndex) => imgIndex === index);
    },
    [refetchingImages],
  );

  useEffect(() => {
    setRefetchingImages([]);
  }, [images]);

  return {
    images,
    isLoading,
    onAddNew: addNewPicture,
    onRefreshOne,
    onRefreshAll,
  };
}
