const req = new XMLHttpRequest();
req.onload = function reqListener() {
  const usersAPI = JSON.parse(this.responseText).results;
  for (let i = 0; i < usersAPI.length; i++) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const container = document.querySelector('.container');
    img.setAttribute('src', usersAPI[i].picture.large);
    p.innerText = `${usersAPI[i].name.first} ${usersAPI[i].name.last}`;
    container.appendChild(div);
    div.classList.add('container__card');
    div.appendChild(img);
    div.appendChild(p);
  }
};
req.open('get', 'https://randomuser.me/api/?gender=female&results=10');
req.send();
