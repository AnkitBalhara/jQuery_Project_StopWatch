let milisecTime = 0;
let secTime = 0;
let minTime = 0;
let timerInterval;

let lapMilisecTime = 0;
let lapSecTime = 0;
let lapMinTime = 0;
let timerIntervalForLap;

let li = "";
function lapFunction() {
    if (timerIntervalForLap) {
        clearInterval(timerIntervalForLap);
    }
    timerIntervalForLap = setInterval(() => {
        lapMilisecTime++;
        if (lapMilisecTime > 99) {
            lapSecTime++;
            lapMilisecTime = 0;
            if (lapSecTime > 59) {
                lapMinTime++;
                lapSecTime = 0;
            }
        }

        $("#newLap").text(
            `Lap :- ${lapMinTime < 10 ? "0" + lapMinTime : lapMinTime}:${lapSecTime < 10 ? "0" + lapSecTime : lapSecTime}:${lapMilisecTime < 10 ? "0" + lapMilisecTime : lapMilisecTime}`
        );
    }, 10);

    let lineAppend = `${lapMinTime < 10 ? "0" + lapMinTime : lapMinTime}:${lapSecTime == 0 ? secTime < 10 ? "0" + secTime : secTime : lapSecTime < 10 ? "0" + lapSecTime : lapSecTime}:${lapMilisecTime == 0 ? milisecTime : lapMilisecTime < 10 ? "0" + lapMilisecTime : lapMilisecTime}`;

    let ul = $(`<ul class="lap-time"></ul>`); // Add a class here for styling
    li = $(`<li></li>`).text(
        `${minTime < 10 ? "0" + minTime : minTime}:${secTime < 10 ? "0" + secTime : secTime}:${milisecTime < 10 ? "0" + milisecTime : milisecTime} ||  Lap :- `
    );

    li.append(lineAppend);
    // li.append(hrLine);
    ul.append(li);
    $("#lap").append(ul);

    lapMilisecTime = 0;
    lapMinTime = 0;
    lapSecTime = 0;
}

$("#lapBtn").prop("disabled", true);
$("#lapBtn").css("cursor", "not-allowed");

$("#startBtn").click(function () {
    // For Lap Time
    if (timerIntervalForLap) {
        clearInterval(timerIntervalForLap);
    }
    timerIntervalForLap = setInterval(() => {
        lapMilisecTime++;
        if (lapMilisecTime > 99) {
            lapSecTime++;
            lapMilisecTime = 0;
            if (lapSecTime > 59) {
                lapMinTime++;
                lapSecTime = 0;
            }
        }
        $("#newLap").text(
            `Lap :- ${lapMinTime < 10 ? "0" + lapMinTime : lapMinTime}:${lapSecTime < 10 ? "0" + lapSecTime : lapSecTime}:${lapMilisecTime < 10 ? "0" + lapMilisecTime : lapMilisecTime}`
        );
    }, 10);

    // For Stop Watch which is running...
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    $("#lapBtn").prop("disabled", false);
    $("#lapBtn").css("cursor", "pointer");
    timerInterval = setInterval(() => {
        milisecTime++;
        if (milisecTime > 99) {
            secTime++;
            milisecTime = 0;
            if (secTime > 59) {
                minTime++;
                secTime = 0;
            }
        }

        $("#timer").text(
            `${minTime < 10 ? "0" + minTime : minTime}:${secTime < 10 ? "0" + secTime : secTime}:${milisecTime < 10 ? "0" + milisecTime : milisecTime}`
        );
    }, 10);
});

$("#pauseBtn").click(function () {
    clearInterval(timerInterval);
    clearInterval(timerIntervalForLap);
    $("#lapBtn").prop("disabled", true);
    $("#lapBtn").css("cursor", "not-allowed");
});

$("#resetBtn").click(function () {
    clearInterval(timerInterval);
    milisecTime = 0;
    secTime = 0;
    minTime = 0;
    clearInterval(timerIntervalForLap);
    lapMilisecTime = 0;
    lapSecTime = 0;
    lapMinTime = 0;
    $("#timer").text("00:00:00");
    $("#lap").text("");
    $("#newLap").text("");
});

$("#lapBtn").click(function () {
    lapFunction()
});