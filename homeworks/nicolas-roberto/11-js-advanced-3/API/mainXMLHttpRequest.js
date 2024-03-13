let users = [];
let totalUsers = 10;
let firstName = [];
let lastName = [];
let picture = [];

let container = document.querySelector('.container');
// Create a new request object
let requestObj = new XMLHttpRequest();
// Configuration of the object to GET the API request
requestObj.open('GET', 'https://randomuser.me/api/?gender=female&results=10');
// Send the request over the network
requestObj.send();
//The function will print an Error message if the API request fails
requestObj.onload = function () {
  if (this.status != 200) {
    console.log(`Error`);
  } else {
    //If the API request gets the info, it will stat to fill the "users" variable with the
    // API information
    users = JSON.parse(requestObj.responseText).results;
    for (let person = 0; person < totalUsers; person++) {
      //For every element (person) in "users"
      firstName.push(users[person].name.first);
      lastName.push(users[person].name.last);
      //Creates the diferent variables with the required information (name,lastname,picture)
      picture.push(users[person].picture.large);
      let card = document.createElement('div');
      card.setAttribute('class', 'card');
      //Appends the div-card inside the container tag in the HTML file.
      container.appendChild(card);
      let img = document.createElement('img');
      img.src = `${picture[person]}`;
      card.appendChild(img);
      let names = document.createElement('p');
      names.innerHTML = `${firstName[person]} ${lastName[person]}`;
      //And after inserting every value in the created HTML tags,
      //It all gets append in each card-div
      card.appendChild(names);
    }
  }
};
