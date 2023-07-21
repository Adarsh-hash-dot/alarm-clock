let alarmTime = ""
let isAlarmActive = false
sound = new Audio("https://freesound.org/data/previews/316/316847_4939433-lq.mp3");


//elements
const submitButton = document.getElementById("submit-time-button")
const hourInput = document.getElementById("hours")
const minuteInput = document.getElementById("minutes")
const secondInput = document.getElementById("seconds")
const amPmInput = document.getElementById("ampm")

//onload 
// add option values relative towards time
function addMinSecVals(id) {
  var select = id;
  var min = 59;
  
  for (i = 0; i <= min; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i < 10 ? "0" + i : i);
  }
}
function addHours(id) {
  var select = id;
  var hour = 12;
  
  for (i = 1; i <= hour; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
  }
}
addMinSecVals(minutes);
addMinSecVals(seconds);
addHours(hours);


function displayTime() {
  var now = new Date();
  time = now.toLocaleTimeString("en-in",{ hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  clock.textContent = time;
  // time = "1:00:00 AM";
  // watch for alarm
  console.log(time, alarmTime, time == alarmTime)
  if (time == alarmTime) {
    sound.play();
      // clear the alarm
    hourInput.disabled = false;
    minuteInput.disabled = false;
    secondInput.disabled = false;
    amPmInput.disabled = false;
    alarm = "00:00:00 AM";
    submitButton.textContent = "Set Alarm";
    submitButton.className = "button is-info";
    
    isAlarmActive = false;
  }
  setTimeout(displayTime, 1000);
}
displayTime();


//functions
function handleSubmitTime() {
  
  if (isAlarmActive === false) {
    hourInput.disabled = true;
    minuteInput.disabled = true;
    secondInput.disabled = true;
    amPmInput.disabled = true;
    
    alarmTime = ((hourInput.value <= 9 ? "0" : "") + hourInput.value) + ":" + minuteInput.value + ":" + secondInput.value + " " + amPmInput.value;
    this.textContent = "Clear Alarm";
    this.className = "button is-danger";
    isAlarmActive = true;
  } else {
    hourInput.disabled = false;
    minuteInput.disabled = false;
    secondInput.disabled = false;
    amPmInput.disabled = false;
    
    sound.pause();
    alarm = "00:00:00 AM";
    this.textContent = "Set Alarm";
    this.className = "button is-info";
    
    
    isAlarmActive = false;
  }
}

//event-listeners
submitButton.addEventListener("click", handleSubmitTime)