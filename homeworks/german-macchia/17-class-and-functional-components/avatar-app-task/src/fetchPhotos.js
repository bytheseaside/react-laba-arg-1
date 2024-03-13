export default async function fetchPhotos(quantity) {
  const api = `https://tinyfac.es/api/data?limit=${quantity}&quality=0`;
  const response = await fetch(api);
  return response;
}
