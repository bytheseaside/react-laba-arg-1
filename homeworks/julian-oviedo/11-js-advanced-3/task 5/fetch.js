fetch('https://randomuser.me/api/?gender=female&results=10').then((res) => {
  res.json().then((data) => {
    const usersAPI = data.results;
    for (let i = 1; i < usersAPI.length; i++) {
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
  });
});
