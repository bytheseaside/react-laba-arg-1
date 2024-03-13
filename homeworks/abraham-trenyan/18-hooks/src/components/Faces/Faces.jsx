import './Faces.css';
import { useState } from 'react';
import RefreshIcon from '../RefreshIcon/RefreshIcon';
const Faces = () => {
  const [images, setImages] = useState([]);
  const getImages = async (imgAmount) => {
    const response = await fetch(`https://tinyfac.es/api/data?limit=${imgAmount}&quality=0`);
    const jsonResponse = await response.json();
    return jsonResponse;
  };
  const addImg = async () => {
    const result = await getImages(1);
    setImages([...images, result[0].url]);
  };
  const refreshAll = async () => {
    const result = await getImages(images.length);
    let newImgs = [];
    for (let i = 0; i < result.length; i++) {
      newImgs.push(result[i].url);
    }
    setImages([...newImgs]);
  };
  const refreshImg = async (e) => {
    const result = await getImages(1);
    let newState = [...images];
    newState[e.target.parentElement.id] = result[0].url;
    setImages([...newState]);
  };
  return (
    <main>
      <section className="faces__container">
        {images.map((url, index) => (
          <div className="face" id={index} key={index} onClick={(e) => refreshImg(e)}>
            <div className="face__img face__img--layer">
              <RefreshIcon />
            </div>
            <img className="face__img" src={url} loading="lazy" alt="random person"></img>
          </div>
        ))}
        <div className="add" onClick={() => addImg()}>
          <div className="add__horizontal-line"></div>
          <div className="add__vertical-line"></div>
        </div>
      </section>
      <footer className="refresh-all">
        {images.length > 1 && (
          <button className="refresh-all__button" onClick={() => refreshAll()}>
            Refresh All
          </button>
        )}
      </footer>
    </main>
  );
};

export default Faces;
