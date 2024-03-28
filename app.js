var interval
function Startclock(){
interval=setInterval(displayTime, 1000)
document.getElementById("enabled1").disabled=true;
}b
function Stopclock(){
clearInterval(interval)
document.getElementById("enabled1").disabled=false;
}
function displayTime(){
  var time= new Date();
  var hour = time.getHours(); // 0-23
  var min = time.getMinutes(); // 0-59
  var sec = time.getSeconds(); // 0-59
  var amOrPm = "AM";
  if(hour >= 12)
  {
    amOrPm = "PM";
  }
  if(hour > 12)
  {
    hour = hour - 12;
  }
  if(hour < 10)
    hour = "0" + hour;
  if(min < 10)
    min = "0" + min;
  if(sec < 10)
    sec = "0" + sec;
  document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec + " " + amOrPm;
}
setInterval(displayTime, 1000);
    




