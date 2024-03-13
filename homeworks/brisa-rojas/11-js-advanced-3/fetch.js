'use strict';
const USERS_NUMBER = 10;
const url = `https://randomuser.me/api/?results=${USERS_NUMBER}`;
const options = { method: 'GET' };

function getUserInfo(user) {
  let name = user.name.first;
  let pic = user.picture.large;
  let username = user.login.username;
  return { pic, name, username };
}

// information variables
let users;
let userInfo;

// dom elements
let vlogerCard;
let vlogerCardImg;
let vlogerCardName;
let vlogerCardUsername;
let vlogersContainer = document.querySelector('.vlogers');

fetch(url, options)
  .then((data) => data.json())
  .then((data) => {
    users = data.results;

    for (let i = 0; i < USERS_NUMBER; i++) {
      userInfo = getUserInfo(users[i]);

      // create card for user
      vlogerCard = document.createElement('div');
      vlogerCard.className = 'vloger-card';

      // create elements for card and assign values
      vlogerCardImg = document.createElement('img');
      vlogerCardImg.className = 'vloger-card__img';
      vlogerCardImg.src = userInfo.pic;
      vlogerCard.appendChild(vlogerCardImg);

      vlogerCardName = document.createElement('h2');
      vlogerCardName.className = 'vloger-card__name';
      vlogerCardName.innerHTML = userInfo.name;
      vlogerCard.appendChild(vlogerCardName);

      vlogerCardUsername = document.createElement('p');
      vlogerCardUsername.className = 'vloger-card__username';
      vlogerCardUsername.innerHTML = userInfo.username;
      vlogerCard.appendChild(vlogerCardUsername);

      // append card to page
      vlogersContainer.appendChild(vlogerCard);
    }
  });
