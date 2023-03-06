// Javascript til "Måltidskasser"-siden 


// Javascript til ugeknapperne

var x = document.querySelector('.button');
x.addEventListener('click', function() {
  if (x.style.backgroundColor == "#bfccb4")
    x.style.backgroundColor = "#bfccb4";
  else if(x.style.backgroundColor == "green")
    x.style.backgroundColor = "#bfccb4"
  else
    x.style.backgroundColor = "green";
})


var y = document.querySelector('.button1');
y.addEventListener('click', function() {
  if (y.style.backgroundColor == "#bfccb4")
    y.style.backgroundColor = "#bfccb4";
  else if(y.style.backgroundColor == "green")
    y.style.backgroundColor = "#bfccb4"
  else
    y.style.backgroundColor = "green";
})


var z = document.querySelector('.button2');
z.addEventListener('click', function() {
  if (z.style.backgroundColor == "#bfccb4")
    z.style.backgroundColor = "#bfccb4";
  else if(z.style.backgroundColor == "green")
    z.style.backgroundColor = "#bfccb4"
  else
    z.style.backgroundColor = "green";
})


var xy = document.querySelector('.button3');
xy.addEventListener('click', function() {
  if (xy.style.backgroundColor == "#bfccb4")
  xy.style.backgroundColor = "#bfccb4";
  else if(xy.style.backgroundColor == "green")
  xy.style.backgroundColor = "#bfccb4"
  else
  xy.style.backgroundColor = "green";
})


//Javascript til alle opskrift-kasserne

const opskrifter = document.getElementsByClassName("maaltider")


function recipeNotFound(){
    alert("Beklager, opskriften er ikke klar endnu.");
}


for (let i = 0; i < 14; i++) { 
    opskrifter[i].addEventListener("click", recipeNotFound);
  }