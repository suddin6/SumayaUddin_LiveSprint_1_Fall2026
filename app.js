(function () {
  "use strict()";

  const cat = document.getElementById("cat");
  const catImg = document.getElementById("cat-img");
  const dog = document.getElementById("dog");
  const dogImg = document.getElementById("dog-img");
  const cow = document.getElementById("cow");
  const cowImg = document.getElementById("cow-img");
  const btnDeleteCat = document.getElementById("btn-delete-cat");
  const btnDeleteDog = document.getElementById("btn-delete-dog");
  const btnDeleteCow = document.getElementById("btn-delete-cow");

  cat.addEventListener("click", (event) => {
    event.preventDefault();
    catImg.classList.remove("hidden");
  });

  dog.addEventListener("click", (event) => {
    event.preventDefault();
    dogImg.classList.remove("hidden");
  });

  cow.addEventListener("click", (event) => {
    event.preventDefault();
    cowImg.classList.remove("hidden");
  });

  btnDeleteCat.addEventListener("click", (event) => {
    event.preventDefault();
    catImg.classList.add("hidden");
  });

  btnDeleteDog.addEventListener("click", (event) => {
    event.preventDefault();
    dogImg.classList.add("hidden");
  });

  btnDeleteCow.addEventListener("click", (event) => {
    event.preventDefault();
    cowImg.classList.add("hidden");
  });
})();
