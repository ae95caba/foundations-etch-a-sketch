
const gridContainer = document.querySelector(".grid-container");
var previousEvent ;
var previousEventTargent ;
let callGridDivs ; // I defined this variable here because if I instead defined it inside the function below,
// I wouldn 't be able to call it in the last line due to the scope


console.log("sdapsepar");
function createGrid (num){
    //creates divs inside div container and adds a class to each
    for (let i = 1; i <= (num*num) ; i++ ){
        const createDiv = document.createElement("div");
        createDiv.classList.add("grid-div")
        gridContainer.appendChild(createDiv);

    }
    
    const gridDivs = document.querySelectorAll(".grid-div");
    callGridDivs=gridDivs; // makes gridDivs be able to be called outsize of this function, so I can
    //delete them or add event to them

    // resizes each div of the grid and arranges them into rows and columns so all divs
    //will fit in a 960px container
    gridDivs.forEach(a=>a.style.height =`\"${960/num}px\"`);
    gridDivs.forEach(a=>a.style.width =`\"${960/num}px\"`);
    gridContainer.style.gridTemplateRows=`repeat(${num},${100/num}%)`;
    gridContainer.style.gridTemplateColumns=`repeat(${num},${100/num}%)`;
}

//default grid
createGrid(16); 
//callGridDivs.forEach(a => a.addEventListener("mouseover",()=> a.style.backgroundColor = "black")); // last line


//creates a button that let the user pick the grid size
const button = document.querySelector("#size");
function userCreateDivs () {
    let number = prompt("choose size below 100");
    if (number <=100) {
    callGridDivs.forEach(a => a.remove()); //removes previous grid
    createGrid(number);
    callGridDivs.forEach(a => a.addEventListener("mouseover",()=> a.style.backgroundColor = "black"));
    }else {alert("error, try again")};
}
button.addEventListener("click",userCreateDivs);

//random rgb function
function randomNumber(){
    return Math.floor(Math.random()*256) ; 
}

function randomColor (){
    
   return`rgba(${randomNumber()},${randomNumber()}, ${randomNumber()},0.1)`;
    
    
    
}

var currentEvent ;



function das (a){
    
   
   
   a.target.style.backgroundColor = randomColor();
}

//random rgb button
const randomButton = document.querySelector("#random");

function rainbowGrid(){
    callGridDivs.forEach(a => a.removeEventListener("mouseover",currentEvent )); 
    callGridDivs.forEach(a => a.addEventListener("mouseover",das));
    currentEvent = das;
}

randomButton.addEventListener("click", rainbowGrid);






// black button



const blackButton = document.querySelector("#black");

function asdf  (a) {a.currentTarget.style.backgroundColor = "rgba(0,0,0,0.1)"; }

function blackGrid(){
    callGridDivs.forEach(a => a.removeEventListener("mouseover",currentEvent )); 
    callGridDivs.forEach(a => a.addEventListener("mouseover",asdf  )); 
  
  currentEvent= asdf;
}
blackButton.addEventListener("click",blackGrid);


//grey scale 
const greyButton = document.querySelector("#grey");

function increaseOpacity (div) {
    if (div.style.backgroundColor.length < 13){
        return;
    }

    
    if(div.style.backgroundColor.length < 18){
        var currentOpacity =  0;
    }else{
        var currentOpacity =  Number(div.style.backgroundColor.slice(-4,-1));};
    
  
   
    let increasedOpacity = currentOpacity + 0.1;
   
    div.style.backgroundColor= `rgba(0,0,0,${increasedOpacity})`;
    
    
}

function greyGrid (){
    //first, fist remove previous event
    
    callGridDivs.forEach(a => a.removeEventListener("mouseover",currentEvent )); 
   

    //then, with each click to any div, that div should increase its opacity by 0,1
    callGridDivs.forEach(div => div.addEventListener("mouseover",()=>increaseOpacity(div)));

}

greyButton.addEventListener("click",greyGrid);

//let removeBlack = document.querySelector("#remove-black");

//function asdfas () {
//    callGridDivs.forEach(a => a.removeEventListener("mouseover",asdf ));
//    console.log("eusoulobo");
//}

//removeBlack.addEventListener("click",asdfas);



//// que haggooo
/// hacer
