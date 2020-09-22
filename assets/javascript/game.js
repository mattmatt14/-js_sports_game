let shootButton1 = document.querySelector("#teamone-shoot-button");
let teamone = document.querySelector("#teamone-numshots");
let stringTeamoneValue = teamone.innerHTML;
let teamoneValue = Number(stringTeamoneValue);
console.log(teamoneValue);
console.log(stringTeamoneValue);

shootButton1.addEventListener("click", function() {
    teamoneValue +=1;
    console.log(teamoneValue);
    teamone.innerHTML = teamoneValue;
    

})

let shootButton2 = document.querySelector("#teamtwo-shoot-button");
let teamtwo = document.querySelector("#teamtwo-numshots");
let stringTeamtwoValue = teamtwo.innerHTML;
let teamtwoValue = Number(stringTeamtwoValue);
console.log(teamtwoValue);
console.log(stringTeamtwoValue);



shootButton2.addEventListener("click", function() {
    teamtwoValue +=1;
    console.log(teamtwoValue);
    teamtwo.innerHTML = teamtwoValue;


})   

let resetButton = document.querySelector("reset-button");

  function myFunction() {
      document.getElementById("reset-button").reset();
  }
    

