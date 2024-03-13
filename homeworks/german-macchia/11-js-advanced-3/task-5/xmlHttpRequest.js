const XHR = new XMLHttpRequest();

XHR.open("get", api);

XHR.addEventListener("load", () => {
  if (XHR.status == 200) {
    const { results: RESULTS } = JSON.parse(XHR.response);
    const GRID = document.querySelector(".imposter__grid--test");
    for (let user of RESULTS) {
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
      console.log(`XHR TESTERS => ${name}`);
    }
  } else {
    console.error("ERROR XHR cb (status)", XHR.status);
  }
});

XHR.addEventListener("error", (e) => {
  console.error("ERROR XHR cb (ajax)", e);
});

XHR.send();
