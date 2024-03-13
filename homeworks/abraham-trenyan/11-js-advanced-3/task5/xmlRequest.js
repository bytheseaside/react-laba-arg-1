let response = new XMLHttpRequest();
response.open('GET', 'https://randomuser.me/api/?gender=female&results=10');
response.send();
response.onload = function () {
  let jsonResponse = JSON.parse(this.responseText);
  let users = jsonResponse.results;
  let container = document.querySelector('.container')
  for (let i = 0; i < users.length; i++) {
    container.innerHTML += `
      <div class="user">
          <img src=${users[i].picture.medium} alt="image of ${users[i].name.first} ${users[i].name.last} class="img">
          <h2 class="name">${users[i].name.first} ${users[i].name.last}</h2>
      </div>`
  }
}