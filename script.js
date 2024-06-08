// script.js
let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}.${formattedMS}`;
}

function startPause() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
        document.getElementById("startPauseButton").textContent = "Start";
    } else {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function printTime() {
            elapsedTime = Date.now() - startTime;
            document.getElementById("display").textContent = timeToString(elapsedTime);
        }, 10);
        isRunning = true;
        document.getElementById("startPauseButton").textContent = "Pause";
    }
}

function reset() {
    clearInterval(timerInterval);
    document.getElementById("display").textContent = "00:00:00.00";
    elapsedTime = 0;
    isRunning = false;
    document.getElementById("startPauseButton").textContent = "Start";
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    if (isRunning) {
        const lapTime = timeToString(elapsedTime);
        const lapList = document.getElementById("laps");
        const lapItem = document.createElement("li");
        lapItem.textContent = lapTime;
        lapList.appendChild(lapItem);
    }
}
