var repeat = 1;  //DO NOT CHNAGE

var stopwatchUnits = [0, 0, 0]

var stopwatchStart = false;

function stopwatchDisplay() {
    result = "";
    if (stopwatchUnits[2] >= 10) {
        result += stopwatchUnits[2]
    } else {
        result += "0" + stopwatchUnits[2]
    }
    result += ":"
    if (stopwatchUnits[1] >= 10) {
        result += stopwatchUnits[1]
    } else {
        result += "0" + stopwatchUnits[1]
    }
    result += ":"
    if (stopwatchUnits[0] >= 10) {
        result += stopwatchUnits[0]
    } else {
        result += "0" + stopwatchUnits[0]
    }
    return result
}

function stopwatchStart2() {
    if (stopwatchStart == true) {
        stopwatchStart = false
        document.querySelector(".button1").innerHTML = "Start"
    } else {
        stopwatchStart = true
        document.querySelector(".button1").innerHTML = "Stop"
    }
}

var init = () => {
    setInterval(() => {
        if (stopwatchStart == true) {
            stopwatchUnits[0] += Number(repeat)

        if (stopwatchUnits[0] >= 60) {
            stopwatchUnits[0] = 0
            stopwatchUnits[1] += Number(repeat)
        }
        if (stopwatchUnits[1] >= 60) {
            stopwatchUnits[1] = 0
            stopwatchUnits[2] += Number(repeat)
        }
        }
    }, 1000);
}

function stopwatchLoad() {
    stopwatchUnits[0] = Number(localStorage.getItem("seconds"))
    stopwatchUnits[1] = Number(localStorage.getItem("minutes"))
    stopwatchUnits[2] = Number(localStorage.getItem("hours"))
    repeat = localStorage.getItem("repeats")
}
for (let i = 0; i < repeat; i++) {
    init()
}
stopwatchLoad()

function stopwatchSave() {
    localStorage.setItem("seconds", String(stopwatchUnits[0]));
    localStorage.setItem("minutes", String(stopwatchUnits[1]));
    localStorage.setItem("hours", String(stopwatchUnits[2]));
    localStorage.setItem("repeats", String(repeat));
    repeat = Number(repeat) + 1
}

setInterval(() => {
    document.querySelector(".stopwatchTime").innerHTML = stopwatchDisplay()
}, 10);