import fetchRunners from './fetch.js';
import xmlGetRunners from './xml.js';

async function getData() {
  const URL_REQUEST = 'https://randomuser.me/api/?gender=female&results=10';
  try {
    //With fetch
    const data = await fetchRunners(URL_REQUEST);
    loadRunners(data);
    //With XML
    //xmlGetRunners(URL_REQUEST, loadRunners);
  } catch {
    console.error('error on fetch');
  }
}

async function loadRunners({ results }) {
  const runnerListElem = document.getElementById('runners');

  for (const runner of results) {
    const itemElem = document.createElement('li');
    itemElem.classList.add('runners__list__item');

    const photoElemt = document.createElement('img');
    const nameElem = document.createElement('p');
    const FULL_NAME = `${runner.name.first} ${runner.name.last}`;
    nameElem.innerText = FULL_NAME;
    photoElemt.setAttribute('src', runner.picture.thumbnail);
    photoElemt.setAttribute('alt', FULL_NAME + ' photo');

    itemElem.append(photoElemt);
    itemElem.append(nameElem);
    runnerListElem.append(itemElem);
  }
}

getData();
