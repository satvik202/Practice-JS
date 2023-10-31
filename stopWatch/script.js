const timeDisplay = document.querySelector('#timeDisplay');
const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const resetBtn = document.querySelector('#resetBtn');

let startTime=0;
let elapsedTime=0;
let currentTime=0;
let paused=true;
let intervalId;
let hrs=0;
let mins=0;
let secs=0;
let milliseconds=0;

startBtn.addEventListener('click', () => {
    if(paused){
        paused=false;
        startTime= Date.now() - elapsedTime;
        intervalId= setInterval(updateTime, 50);
    }
} );
pauseBtn.addEventListener('click',() => {
    if(!paused){
        paused=true;
        elapsedTime= Date.now()- startTime;
        clearInterval(intervalId);
    }
} );
resetBtn.addEventListener('click',()=>{
    paused=true;
    clearInterval(intervalId);
    elapsedTime=0;
    startTime=0;
    hrs=0;
    mins=0;
    secs=0;
    timeDisplay.textContent= "00:00:00:000";
});

function updateTime(){
    elapsedTime= Date.now() - startTime; // time passed in milliseconds
    milliseconds= Math.floor((elapsedTime%1000));
    secs= Math.floor((elapsedTime/1000)%60);
    mins= Math.floor(((elapsedTime/1000)/60)%60);
    hrs = Math.floor((((elapsedTime/1000)/60)/60)%60);
    hrs= pad(hrs);
    mins= pad(mins);
    secs= pad(secs);
    milliseconds= pad_milli(milliseconds);
    timeDisplay.textContent= `${hrs}:${mins}:${secs}:${milliseconds}`;

    function pad(unit){
        return (("0"+unit).length)>2 ? unit: "0"+unit;
    }
    function pad_milli(unit){
        let str= "0"+unit;
        if(str.length==3) return str;
        if(str.length==2) return "0"+str;
        return unit;
    }
}