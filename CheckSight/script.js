function _(id) {
  return document.getElementById(id);
}

let randomBox;
let alpha = 0.8;
let score=0;
let lives=3;

function createTiles(n){
    let tiles = "";
    for(let i=0;i<n;i++){
        tiles += `<div class='box' id='b${i}'></div>`;
    }
    document.querySelector(".wrapper").innerHTML = tiles;
    console.log(tiles);
}

function setBackgroundColor(){
    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);
    let baseColor = `rgb(${red},${green},${blue})`;
    let allBoxes = document.querySelectorAll(".box");
    allBoxes.forEach(function(ele){
        ele.style.backgroundColor = baseColor;
    })
    randomBox = Math.floor(Math.random()*16);
    alpha += 0.01;

    document.querySelector(`#b${randomBox}`).style.backgroundColor = `rgba(${red},${green},${blue},${alpha})`
}
createTiles(16);
setBackgroundColor();

document.querySelector('.wrapper').addEventListener("click",function(ev){
    let rc = ev.target.id.slice(1);
    if( rc == randomBox){
        setBackgroundColor();
      score+=1;
      if(score > 15){
        _("status").textContent = "Strong";
      }
      else if(score > 5){
        _("status").textContent = "Medium";
      }
      else{
        _("status").textContent = "Weak";
      }
      _("score").textContent=score;


    }
  else{
    if(lives > 0){
      lives--;
     _("lives").textContent=lives;
    }
    if(lives == 0){
      document.querySelector(".wrapper").textContent = "Game Over";
    }

  }
});


