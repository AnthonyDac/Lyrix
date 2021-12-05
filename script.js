var artiste;
var musique;
var alert = document.getElementById("error");
async function connectLyrics() {
  await fetch("https://api.lyrics.ovh/v1/" + artiste + "/" + musique)
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (value) {
      consoleDisplay(value);
    })
    .catch(function (err) {
      // Une erreur est survenue
      alert.innerHTML = "Musique introuvable!";
    });
}

function validation() {
  var artisteInput = document.getElementById("inputArtiste");
  var musiqueInput = document.getElementById("inputMusique");
  artiste = artisteInput.value;
  musique = musiqueInput.value;
  if(artisteInput.value != "" && musiqueInput.value != "") {
    alert.innerHTML = "";
    connectLyrics();
  }
  else if(artisteInput.value != "" && musiqueInput.value == "") {
    alert.innerHTML = "Champs du titre vide!";
  }
  else if(artisteInput.value == "" && musiqueInput.value != "") {
    alert.innerHTML = "Champs de l'artiste vide!";
  }
  else {
    alert.innerHTML = "Champs vides!";
  }
}
function consoleDisplay(value) {
  var output = document.getElementById("lyricsContain");
  output.innerHTML = `<pre id="lyrics">${value.lyrics}</pre>`
}