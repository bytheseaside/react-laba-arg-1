export const getPhotos = async (limit = 1) => {
  const imagesRes = await fetch(`https://tinyfac.es/api/data?limit=${limit}&quality=0`);

  if (!imagesRes.ok) {
    alert(`Error with code ${imagesRes.status} on fetch photo`);
    throw new Error('Unable to get images');
  }
  const data = await imagesRes.json();

  return data.map((picture) => picture.url);
};
