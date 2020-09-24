let shootButton1 = document.querySelector("#teamone-shoot-button");
let teamone = document.querySelector("#teamone-numshots");
let team1goals = document.querySelector("#teamone-numgoals");

shootButton1.addEventListener("click", function() {
    
    let shotsTaken = Number(teamone.innerHTML) + 1;
    teamone.innerHTML = shotsTaken;
    if (Math.random() * 100 < 40) {
        let shotsTaken = Number(team1goals.innerHTML) + 1;
        team1goals.innerHTML = shotsTaken;
    }
});       




let shootButton2 = document.querySelector("#teamtwo-shoot-button");
let teamtwo = document.querySelector("#teamtwo-numshots");
let team2goals = document.querySelector("#teamtwo-numgoals");

shootButton2.addEventListener("click", function() {

    let shotsTaken2 = Number(teamtwo.innerHTML) + 1;
    teamtwo.innerHTML = shotsTaken2;
    if (Math.random() * 100 < 50) {
        let shotsTaken2 = Number(team2goals.innerHTML) + 1;
        team2goals.innerHTML = shotsTaken2;
    }
})        


var resetclock = 0;
var teamoneshootbutton = function(shootValue) {
    resetclock += shootValue;
    document.getElementById('teamone-numgoals').innerHTML = resetclock;
    document.getElementById('teamtwo-numgoals').innerHTML = resetclock;
    document.getElementById('teamone-numshots').innerHTML = resetclock;
    document.getElementById('teamtwo-numshots').innerHTML = resetclock;
    
}

var reset = function () { 
    resetclock = 0;
    document.getElementById('teamone-numgoals').innerHTML = 0;
    document.getElementById('teamtwo-numgoals').innerHTML = 0;
    document.getElementById('teamone-numshots').innerHTML = 0;
    document.getElementById('teamtwo-numshots').innerHTML = 0;

}

var resetButton = document.querySelector("#reset-button");
var resetNumber = document.querySelector("#num-resets");

resetButton.addEventListener("click", function() {
    reset(1);
     
let resetTimes = Number(resetNumber.innerHTML) + 1;
resetNumber.innerHTML = resetTimes;

    

})    