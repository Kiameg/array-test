const minPlayliste = ["Forever", "You&Me", "Bohemian Rhapsody", "Jungle", "Baby got back", "You", "Me"];
console.log(minPlayliste);

minPlayliste.forEach(EnSangAfGangen);

function EnSangAfGangen(enSang) {
  console.log(enSang);
  document.querySelector("main").innerHTML += `<ul>${enSang}</ul>`;
}
