fetch('https://randomuser.me/api/?gender=female&results=10').then((res) => {
  res.json().then((data) => {
    let users = data.results;
    let container = document.querySelector('.container')
    for (let i = 0; i < users.length; i++) {
      container.innerHTML += `
      <div class="user">
          <h2>${users[i].name.first} ${users[i].name.last}</h2>
          <img src=${users[i].picture.medium} alt="image of ${users[i].name.first} ${users[i].name.last}">
      </div>`
    }
  });
});