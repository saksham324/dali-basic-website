var cursor = true;
var speed1 = 500;
var speed2 = 3000;

setInterval(() => {
  var name = document.getElementById("english");
  if (name.textContent == "Saksham Arora."){
    name.textContent = "सक्षम अरोरा ।";
    name.style.fontFamily = "Karma";
  }
  else {
    name.textContent = "Saksham Arora.";
    name.style.fontFamily = "IBM Plex Mono";
  }
}, speed2);


setInterval(() => {
          if (cursor) {
            document.getElementById('cursor').style.opacity = 0;
            cursor = false;
          } else {
            document.getElementById('cursor').style.opacity = 1;
            cursor = true;
          }
        }, speed1);