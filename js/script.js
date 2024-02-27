let edit_input = document.getElementById("editIn");
let sun = document.getElementById("sun");
let moon = document.getElementById("moon");

// Sun Mood
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let mainImg = document.querySelector(".main-img img");
let bgDark = document.getElementById("bg-dark");
let bgLight = document.getElementById("bg-light");

sun.onclick = () => {
  sun.style.display = "none";
  moon.style.display = "block";
  body.style.background = "#fff";
  body.style.transition = "0.3s";
  h1.style.color = "#222";
  edit_input.style.background = "#fff";
  edit_input.style.color = "#222";
  edit_input.style.border = "1px solid #444";
  bgLight.style.opacity = "1";
};
moon.onclick = () => {
  sun.style.display = "block";
  moon.style.display = "none";
  body.style.background = "#222";
  h1.style.color = "#fff";
  edit_input.style.border = "none";
  edit_input.style.background = "#222";
  bgLight.style.opacity = "0";
  body.style.transition = "0.3s";
};
