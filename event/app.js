const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minuts = document.getElementById("minuts");
const seconds = document.getElementById("seconds");

const newSigning = "2 march 2023";

function countTimer(){
    const newSigningDate = new Date(newSigning);
    const currentDate = new Date();

    const totalSeconds = (newSigningDate - currentDate) / 1000;
    
    const daysCalc = Math.floor(totalSeconds / 3600 / 24);
    const hoursCalc = Math.floor(totalSeconds / 3600) % 24;
    const minsCalc = Math.floor(totalSeconds / 60) % 60;
    const secondsCalc = Math.floor(totalSeconds % 60);

    days.innerHTML = daysCalc;
    hours.innerHTML = hoursCalc;
    minuts.innerHTML = minsCalc;
    seconds.innerHTML = secondsCalc;
}

setInterval(countTimer, 1000);
