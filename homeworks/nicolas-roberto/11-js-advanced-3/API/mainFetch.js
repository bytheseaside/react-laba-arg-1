let users = [];
let totalUsers = 10;
let firstName = [];
let lastName = [];
let picture = [];

let container = document.querySelector('.container');

// Calls the api and puts the information in a json. And then in a variable caled users
fetch('https://randomuser.me/api/?gender=female&results=10')
  .then((res) => res.json())
  .then((json) => {
    users = json.results;
    //For every user (person) creates the variables for the diferent values on the keys
    for (let person = 0; person < totalUsers; person++) {
      firstName.push(users[person].name.first);
      lastName.push(users[person].name.last);
      picture.push(users[person].picture.large);
      //Creates the object literal with the html tags
      let printHtml = `<div class="card">
      <img src="${picture[person]}" alt="User picture" />
      <p>${firstName[person]} ${lastName[person]}</p>
        </div>`;
      //And insert everything in the container
      container.innerHTML += printHtml;
    }
  });
