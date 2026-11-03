(function () {
  "use strict()";

  const animalList = document.getElementById("animal-list");
  const cat = document.getElementById("cat");
  const dog = document.getElementById("dog");
  const cow = document.getElementById("cow");
  const display = document.getElementById("display");

  animals = ["tabby-cat.jpg", "dog.jpg", "cow.jpg"];
  // render();

  cat.addEventListener("click", (event) => {
    event.preventDefault();
    // const img = document.createElement("img");
    // img.className = "img";
    // img.src = "tabby-cat.jpg";
    // const src = cat;
    // src.appendChild(img);
    // const btn = document.createElement("button");
    render();
  });

  dog.addEventListener("click", (event) => {
    event.preventDefault();
    // const img = document.createElement("img");
    // img.className = "img";
    // img.src = "dog.jpg";
    // const src = dog;
    // src.appendChild(img);
    // const btn = document.createElement("button");
    render();
  });

  cow.addEventListener("click", (event) => {
    event.preventDefault();
    // const img = document.createElement("img");
    // img.className = "img";
    // img.src = "cow.jpg";
    // const src = cow;
    // src.appendChild(img);
    // const btn = document.createElement("button");
    render();
  });

  animalList.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("btn-delete")) {
      const animalId = target.dataset.id;
      animals = animals.filter(function (animal) {
        return animal.id !== animalId;
      });
      render();
    }
  });

  function render() {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 3; i++) {
      const li = document.createElement("li");

      li.className = "card";
      li.innerHTML = `
      <img src="${animals[i]}" class="animal-img" width="150px" height="200px">
      <div><button class="btn btn-block btn-delete">Hide Result</button></div>
      `;

      fragment.appendChild(li);
    }
    animalList.innerHTML = "";
    animalList.appendChild(fragment);
  }
})();

// Right now, my code has the correct layout. The problem with my code is within the JS.
// Rather than images showing once the button is clicked, all thre animals show up.
// Also, when I click "hide result", only the image disappears rather than the entire card.

// To fix this, I could put the images in the HTML under the hidden and then show it when the button is clicked.
// If I had more time, this could have been fixed with the hidden class I currently have in my HTML.
