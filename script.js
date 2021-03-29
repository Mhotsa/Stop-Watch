var c = 0;
var t;
var time_is_on = 0;

function timedCount() {
    document.getElementById("time").innerHTML = c;
    c = c + 1;
    t = setTimeout(timedCount, 1000);
}

function start() {
    if (!time_is_on){
        time_is_on = 1;
        timedCount();
    }
}

function stop() {
    clearTimeout(t);
    time_is_on = 0;
}

function reset() {
    c = 0;
    document.getElementById("time").innerHTML = 0;
}