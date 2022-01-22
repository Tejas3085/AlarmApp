

let audio = 'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3'
function sound() {
  new Audio(audio).play();
}

let alarm = document.getElementById('alarm');
let submit = document.getElementById('submit');

submit.addEventListener('click',ring)

function ring(e){
  e.preventDefault();
  console.log("clicked submit");
  alarm = new Date(alarm.value);

  now = new Date();
  console.log(now);
  TimetoAlarm = alarm - now
  console.log(TimetoAlarm)
  if (TimetoAlarm >= 0) {
    setTimeout(() => {
      console.log("ringing now")
      sound();
    }, TimetoAlarm);


  } else {
    console.log("error")
  }
}