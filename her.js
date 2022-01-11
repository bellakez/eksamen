
window.addEventListener("load", sidenVises);

// burgermenu //
function sidenVises() {
  console.log("sidenVises");

  //console.log("windowResize");
  //window.addEventListener("resize", windowResize);
  
  //kalder på funktionen toogleMenu når man klikker på menuknappen
  document.querySelector("#menuknap").addEventListener("click", toggleMenu);
  //kalder på funktionen startFlyv når man klikker
  document.querySelector("#rumskib").addEventListener("click", startFlyv);
}
//forholder sig til at menuen skifter mellem at have klassen "hidden" og ikke
function toggleMenu() {
  console.log("toggleMenu");
  document.querySelector("#menu").classList.toggle("hidden");
//definere variabel let, som er når menuen har klassen "hidden"
  let erSkjult = document.querySelector("#menu").classList.contains("hidden");
//ved at bruge variabel let til at skife mellem if or else med tegn herunder, når menuen er skjult 
  if (erSkjult == true) {
    document.querySelector("#menuknap").textContent = "☰";
  } else {
    document.querySelector("#menuknap").textContent = "<";
  }
}

//starter flyv animationen som er defineret i tema4.css 
function startFlyv() {
 document
    .querySelector("#rumskib")
    .classList.add("animationiteration", "flyv");
  }