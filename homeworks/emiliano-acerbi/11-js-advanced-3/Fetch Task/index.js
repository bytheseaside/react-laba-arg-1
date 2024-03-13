const root = document.getElementById('root');

const loader = document.createElement('h1');
loader.innerText = 'Loading, please wait...';
loader.classList.add('loader');
root.appendChild(loader);

const BASE_URL = 'https://randomuser.me/api/?results=10';
const options = { method: 'GET' };

async function getUsers() {
  try {
    const response = await fetch(BASE_URL, options);
    const data = await response.json();
    return data;
  } catch (err) {
    return console.error(err);
  }
}

getUsers()
  .then((res) => {
    users = res.results;

    const main = document.createElement('div');
    main.classList.add('main');

    const runners = document.createElement('h1');
    runners.classList.add('title');
    runners.innerText = 'Runners';

    root.appendChild(main);
    main.appendChild(runners);

    users.forEach((user) => {
      const userEl = document.createElement('div');
      userEl.classList.add('user');

      userEl.innerHTML = `
          <img src=${user.picture.medium} />
          <p>${user.name.first} ${user.name.last}</p>
        `;

      main.appendChild(userEl);
    });
  })
  .catch((error) => console.log(error))
  .finally(() => {
    loader.style.display = 'none';
  });

// XMLHttpRequest;

// const data = null;

// const xhr = new XMLHttpRequest();

// xhr.addEventListener('readystatechange', function () {
//   if (this.readyState === this.DONE) {
//     console.log(this.responseText);
//   }
// });

// xhr.open('GET', BASE_URL);

// xhr.send(data);
