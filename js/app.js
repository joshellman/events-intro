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

// when myButton is clicked, yell
myButton.addEventListener('click', yell)
heading.addEventListener('click', whisper)
//heading.addEventListener('click', function() {})// *anonymous function*

// when heading is hovered, whisper
heading.addEventListener('mouseover', whisper)
