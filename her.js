window.addEventListener("load", sidenVises);

// burgermenu //
function sidenVises() {
  console.log("sidenVises");
  console.log("windowResize");
  window.addEventListener("resize", windowResize);
  document.querySelector("#menuknap").addEventListener("click", toggleMenu);
  document
    .querySelector("#rumskib")
    .classList.add("animationiteration", "flyv");
}

function toggleMenu() {
  console.log("toggleMenu");
  document.querySelector("#menu").classList.toggle("hidden");

  let erSkjult = document.querySelector("#menu").classList.contains("hidden");

  if (erSkjult == true) {
    document.querySelector("#menuknap").textContent = "☰";
  } else {
    document.querySelector("#menuknap").textContent = "<";
  }
}

//forholder sig til at skærmen er en bestemt størrelse
function windowResize() {
  console.log("windowResize");
  let widthScreen = document.querySelector("#baggrund").clientWidth;
}
