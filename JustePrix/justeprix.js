//Générer un chiffre en aléatoire
//L'utilisateur fera des propositions
//Continuer tant qu'il n'a pas la bonne proposition

let NumberToFind = 0;
const resultDiv = document.getElementById("resultDiv");
const reboursDiv = document.getElementById("compteARebours");
const GamePropalDiv = document.getElementById("GamePropalDiv");
let TempsRestant = 0;
let compteurInterval = null;

document.getElementById("beginGame")
    .addEventListener("click", function(){

});

document.getElementById("checkPropalButton")
  .addEventListener("click", function(){
    checkPropal();
  });

document.getElementById("userPropalInput")
  .addEventListener("keyup", function(event){
    if(event.key == 'Enter'){
      checkPropal();
    }
  
    console.log("clavier sur input")
  
  });

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function checkPropal(){
  let numberPropal = document.getElementById("userPropalInput").value;
  if(NumberToFind > numberPropal){
    resultDiv.innerHTML = "C'est plus ! ";
    let audio = new Audio("audio/plus.mp3");
    audio.play();
  }
  
  else if(NumberToFind < numberPropal){
    resultDiv.innerHTML = "C'est moins ! ";
    let audio = new Audio("audio/moins.mp3");
    audio.play();
  }
  
  else if(NumberToFind == numberPropal){
    resultDiv.innerHTML = "C'est gagné ! ";
    let audio = new Audio("audio/bip-bip.mp3");
    audio.play();
  }
}

function launchGame(){
  NumberToFind = getRandomInt(1000);
  TempsRestant = 30;
  GamePropalDiv.style.display = "block";
  if(compteurInterval != null){
    clearInterval(compteurInterval);
  }
  compteurInterval = setInterval(() => {
    reboursDiv.innerText = TempsRestant;
    TempsRestant--;

    if(TempsRestant >= 20){
      reboursDiv.classList.remove("warning");
      reboursDiv.classList.remove("danger");
      reboursDiv.classList.add("cool");
    }
    else if(TempsRestant > 10){                       
      reboursDiv.classList.remove("cool");
      reboursDiv.classList.remove("danger");
      reboursDiv.classList.add("warning");
    }
    else if(TempsRestant >= 0){
      reboursDiv.classList.remove("cool");
      reboursDiv.classList.remove("warning");
      reboursDiv.classList.add("danger");
    }
    else if(TempsRestant < 0) {
      clearInterval(compteurInterval);
      endGame();
    }
        
  }, 1000);

}

function endGame(){
  GamePropalDiv.style.display= "none";

}