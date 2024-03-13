// ***** XMLHttpRequest ***** //
const url = 'https://randomuser.me/api/?gender=female&results=10';
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.addEventListener('load', () => {
  if (xhr.status === 200) {
    respJson = JSON.parse(xhr.responseText);
    const info = respJson.results;
    const container = document.querySelector('#container');

    for (let i = 0; i < info.length; i++) {
      let userDiv = document.createElement('div');
      let userImg = document.createElement('img');
      let userName = document.createElement('p');
      userDiv.style.textAlign = 'center';
      userImg.src = `${info[i].picture.thumbnail}`;
      userImg.style.width = '50px';
      userImg.style.height = '50px';
      userName.innerHTML = `${info[i].name.first} ${info[i].name.last}`;
      container.appendChild(userDiv);
      userDiv.appendChild(userImg);
      userDiv.appendChild(userName);
    }
  }
});
xhr.send();
