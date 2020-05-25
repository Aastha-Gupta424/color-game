var numsquares = 6;
var colors = [];
var pickedColor;
var colordisplay= document.getElementById("colordisplay");
var squares = document.querySelectorAll(".square");
var messagedisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var modebuttons = document.querySelectorAll(".mode");

init();
function init(){
// mode buttons event listeners
    for(var i = 0; i< modebuttons.length; i++){
        modebuttons[i].addEventListener("click", function(){
            modebuttons[0].classList.remove("selected");
            modebuttons[1].classList.remove("selected");
            this.classList.add("selected");
    
           this.textContent === "Easy" ? numsquares = 3: numsquares = 6; 
           
// orrrrr we can use
// if(this.textContent === "Easy"){
// numsquares = 3;
// } else{
// numsquares= 6;
// }
            reset();
        });
    }

    for (var i=0; i<squares.length; i++){
//add click listener to squares
        squares[i].addEventListener("click", function(){
//grab color of clicked square
           var clickedcolor = this.style.backgroundColor;
//compare color to pickedcolor
           if(clickedcolor===pickedColor){
               messagedisplay.textContent = "correct";
               resetbutton.textContent= "Play again?"
               changecolors(clickedcolor);
               h1.style.backgroundColor = clickedcolor;
             }  else{
                this.style.backgroundColor = "#232323";
                messagedisplay.textContent= "try again";
           }
        });
    }
    reset();
}

function reset(){
    colors= generaterandomcolors(numsquares);
    //pick a new random color from arr
    pickedColor = pickColor();
    //change color display to math picked color
    colordisplay.textContent = pickedColor;
    resetbutton.textContent= "New Colors";
    //chg colors of squares
    messagedisplay.textContent = "";
    for (var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i]
        }else {
squares[i].style.display = "none";
        }
        
    }
    h1.style.backgroundColor= "steelblue";
}

resetbutton.addEventListener("click", function(){
    //generate all new colors
    reset();
})

function changecolors(color){
    //loop through all squares 
    for(var i=0; i<colors.length; i++){
    //change each color to match a given number
    squares[i].style.backgroundColor=color;
}
}

function pickColor(){
   var random= Math.floor(Math.random() * colors.length)
   return colors[random];
}

function generaterandomcolors(num){
    //make an array
var arr =[]
    //repeat num times
for (var i=0; i<num; i++){
    //get random color and push into arr
    arr.push (randomcolor())
}
    //return that array
    return arr;
}
 
function randomcolor (){
    //pick a "red" from 0-255
var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
var b = Math.floor(Math.random() * 256);
return "rgb("+r+", "+g+", "+b+")";
}