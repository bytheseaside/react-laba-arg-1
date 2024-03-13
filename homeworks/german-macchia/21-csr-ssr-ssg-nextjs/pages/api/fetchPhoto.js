export default async function fetchPhoto(quantity) {
  const auxQuant = quantity || 1;
  const api = `https://tinyfac.es/api/data?limit=${auxQuant}&quality=0`;
  const response = await fetch(api);
  const json = await response.json();

  if (response.status !== 200) {
    throw new Error(`STATUS ${response.status} ${response.statusText}`);
  }

  return json.map((photo) => {
    return {
      id: photo.first_name + photo.id,
      url: photo.url,
      name: `${photo.first_name} ${photo.last_name}`,
    };
  });
}
