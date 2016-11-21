var myButton = document.querySelector("#myButton")
var heading = document.querySelector('h1')

var toggle = null

function yell() {
  toggle = !toggle
  heading.innerText = toggle
}

function whisper (){
  myButton.innerText = "Shhhhh..."
}


myButton.addEventListener('click', yell)
heading.addEventListener('click', whisper)
