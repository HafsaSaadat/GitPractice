let button = document.getElementById("click-button");
console.log(button);

let message = document.getElementById("message");

function display() {
  console.log("Clicked");
  message.innerText = "Tada!";
}

// detect click on button
button.addEventListener(`click`, display);

// change the html in the message
