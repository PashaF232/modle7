function openMobMenu() {
  const mobMenu = document.getElementById("mobMenu");
  mobMenu.style.display = "grid";
  const fUsMob = document.getElementById("f-us-mob");
  fUsMob.style.display = "none";
}

function closeMobMenu() {
  const mobMenu = document.getElementById("mobMenu");
  mobMenu.style.display = "none";
  const fUsMob = document.getElementById("f-us-mob");
  fUsMob.style.display = "grid";
}
