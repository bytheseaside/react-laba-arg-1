import { useState } from "react";
import { getNewImage, updatePhotos } from "../services";

export default function useGetImages(){
    const [images, setImages] = useState([])

    async function addNewPicture() {
        const newImageUrl = await getNewImage();
        setImages([...images, ...newImageUrl]);
    }

    async function refreshOne(selected) {
      const newImageUrl = await getNewImage();
      const newImages = images.map((url, i) => (selected === i ? newImageUrl : url));
      setImages(newImages);
    }

    async function refreshAll() {
        const newImages = await updatePhotos(images.length);
        setImages(newImages);
    }

    return {
        images,
        addNewPicture,
        refreshOne,
        refreshAll
    }
}