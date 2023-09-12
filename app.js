let buton1 = document.getElementById("button1");
let buton2 = document.getElementById("button2");
let buton3 = document.getElementById("button3");
let buton4 = document.getElementById("button4");
let buton5 = document.getElementById("button5");
let buton6 = document.getElementById("button6");
let buton7 = document.getElementById("button7");
let buton8 = document.getElementById("button8");
let buton9 = document.getElementById("button9");
let buton10 = document.getElementById("button10");
let buton11 = document.getElementById("button11");
let buton12 = document.getElementById("button12");
let buton13 = document.getElementById("button13");
let bodyy = document.querySelector("body");
let loadingDiv = document.getElementById("loadingdiv");
let container = document.getElementById("container");

window.addEventListener("load", function () {
  loadingDiv = document.getElementById("loadingdiv");
  loadingDiv.style.display = "block";

  setTimeout(function () {
    loadingDiv.style.display = "none";
  }, 1000);
});

buton1.addEventListener("click", function () {
  bodyy.style.background = "red";
  loadingDiv.style.display = "block";
  container.style.background = "red";

  setTimeout(function () {
    loadingDiv.style.display = "none";
  }, 1000);
});

buton2.addEventListener("click", function () {
  bodyy.style.background = "black";
  loadingDiv.style.display = "block";
  container.style.background = "black";

  setTimeout(function () {
    loadingDiv.style.display = "none";
  }, 1000);
});

buton3.addEventListener("click", function () {
  bodyy.style.background = "yellow";
  loadingDiv.style.display = "block";
  container.style.background = "yellow";

  setTimeout(function () {
    loadingDiv.style.display = "none";
  }, 1000);
});

buton4.addEventListener("click", function () {
  bodyy.style.background = "purple";
  loadingDiv.style.display = "block";
  container.style.background = "purple";

  setTimeout(function () {
    loadingDiv.style.display = "none";
  }, 1000);
});

buton5.addEventListener("click", function () {
  bodyy.style.background = "gray";
  loadingDiv.style.display = "block";
  container.style.background = "gray";

  setTimeout(function () {
    loadingDiv.style.display = "none";
  }, 1000);
});

buton6.addEventListener("click", function () {
  bodyy.style.background = "blue";
  loadingDiv.style.display = "block";
  container.style.background = "blue";

  setTimeout(function () {
    loadingDiv.style.display = "none";
  }, 1000);
});

buton7.addEventListener("click", function () {
  bodyy.style.background = "pink";
  loadingDiv.style.display = "block";
  container.style.background = "pink";

  setTimeout(function () {
    loadingDiv.style.display = "none";
  }, 1000);
});

buton8.addEventListener("click", function () {
  bodyy.style.background = "brown";
  loadingDiv.style.display = "block";
  container.style.background = "brown";

  setTimeout(function () {
    loadingDiv.style.display = "none";
  }, 1000);
});

buton9.addEventListener("click", function () {
  bodyy.style.background = "orange";
  loadingDiv.style.display = "block";
  container.style.background = "orange";

  setTimeout(function () {
    loadingDiv.style.display = "none";
  }, 1000);
});

buton10.addEventListener("click", function () {
  bodyy.style.background = "green";
  loadingDiv.style.display = "block";
  container.style.background = "green";

  setTimeout(function () {
    loadingDiv.style.display = "none";
  }, 1000);
});

buton11.addEventListener("click", function () {
  bodyy.style.background = "white";
  loadingDiv.style.display = "block";
  container.style.background = "white";

  setTimeout(function () {
    loadingDiv.style.display = "none";
  }, 1000);
});

buton12.addEventListener("click", function () {
  bodyy.style.background = "violet";
  loadingDiv.style.display = "block";
  container.style.background = "violet";

  setTimeout(function () {
    loadingDiv.style.display = "none";
  }, 1000);
});

buton13.addEventListener("click", function () {
  bodyy.style.background = "crimson";
  loadingDiv.style.display = "block";
  container.style.background = "crimson";

  setTimeout(function () {
    loadingDiv.style.display = "none";
  }, 1000);
});
