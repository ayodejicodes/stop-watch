// Selectors
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");
const durationDisplay = document.querySelector(".duration-rectangle");
const stopwatch1 = new Stopwatch();

//Events

startButton.addEventListener("click", stopwatch1.start);
stopButton.addEventListener("click", stopwatch1.stop);
resetButton.addEventListener("click", stopwatch1.reset);

// functions.. Constructor

function Stopwatch() {
  let startTime,
    stopTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) alert("Stopwatch was running before now");

    running = true;
    startTime = new Date();

    durationDisplay.innerHTML = "running...";
    durationDisplay.style.fontSize = "1rem";
    durationDisplay.style.color = "#ffb300";
  };
  this.stop = function () {
    if (!running) alert("Stopwatch has been stopped before now, Kindly Reset");

    running = false;
    stopTime = new Date();

    const seconds = Math.floor(
      (stopTime.getTime() - startTime.getTime()) / 1000
    );
    duration += seconds;

    durationDisplay.style.fontSize = "1.8rem";
    durationDisplay.style.fontWeight = "bold";

    return duration > 1
      ? (durationDisplay.innerHTML = `${duration} secs`)
      : (durationDisplay.innerHTML = `${duration} sec`);
  };

  this.reset = function () {
    startTime = null;
    stopTime = null;
    running = false;
    duration = 0;
    durationDisplay.innerHTML = "click start..";
    durationDisplay.style.fontSize = "1rem";
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
