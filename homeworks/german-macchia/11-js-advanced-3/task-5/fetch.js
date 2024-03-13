let api = "https://randomuser.me/api/?gender=female&results=10";

async function fetchUsers(url) {
  return await fetch(url)
    .then((res) => res.json())
    .then(({ results }) => {
      if (!results) console.error("API error, users not found");
      const GRID = document.querySelector(".imposter__grid--dev");
      for (let user of results) {
        let imgUrl = user.picture.thumbnail;
        let name = user.name.first + " " + user.name.last;
        let img = document.createElement("img");
        let div = document.createElement("div");
        let text = document.createElement("p");
        text.innerText = name;
        img.setAttribute("src", imgUrl);
        img.setAttribute("alt", name + " photo");
        div.append(img);
        div.append(text);
        GRID.append(div);
        console.log(`FETCH DEVELOPERS => ${name}`);
      }
    })
    .catch((error) => console.log(error));
}

fetchUsers(api);
