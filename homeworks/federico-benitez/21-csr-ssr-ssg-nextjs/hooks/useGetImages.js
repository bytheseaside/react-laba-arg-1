import { useState } from 'react';
import { getPhotos } from '../utils/photos';

export default function useGetImages(initialData = []) {
  const [images, setImages] = useState(initialData);

  async function addNewPicture() {
    const newImageUrl = await getPhotos();
    setImages([...images, ...newImageUrl]);
  }

  async function refreshOne(selected) {
    const newImageUrl = await getPhotos();
    const newImages = images.map((url, i) => (selected === i ? newImageUrl : url));
    setImages(newImages);
  }

  async function refreshAll() {
    const newImages = await getPhotos(images.length);
    setImages(newImages);
  }

  return {
    images,
    addNewPicture,
    refreshOne,
    refreshAll,
  };
}
