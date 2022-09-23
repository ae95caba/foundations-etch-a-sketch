

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
    
   return`rgb(${randomNumber()},${randomNumber()}, ${randomNumber()})`;
    
    
    
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

function asdf  (a) {
    
    a.currentTarget.style.backgroundColor = "rgb(0,0,0)";
}


function blackGrid(){
    callGridDivs.forEach(a => a.removeEventListener("mouseover",currentEvent )); 
    callGridDivs.forEach(a => a.addEventListener("mouseover",asdf  )); 
  
  currentEvent= asdf;
}
blackButton.addEventListener("click",blackGrid);


//grey scale 
const greyButton = document.querySelector("#grey");

function increaseOpacity (div){
    //alert(div.style.backgroundColor==="");
    if(div.currentTarget.style.backgroundColor === ""){
        //alert("estaba vacio")
        div.currentTarget.style.backgroundColor= "rgba(0,0,0,0)";
        var currentOpacity =  0;
       // console.log("if");
       
        
        
    }else if ( `${div.currentTarget.style.backgroundColor}`.match("rgba")){
      //  console.log(div.style.backgroundColor.length)
        
        var currentOpacity =  Number(div.currentTarget.style.backgroundColor.slice(-4,-1));

        console.log("else if");
       
    }else if(div.currentTarget.style.backgroundColor==="rgb(0, 0, 0)"){
        return
    }else{div.currentTarget.style.backgroundColor= "rgba(0,0,0,0)";
    var currentOpacity =  0;};

    let increasedOpacity = currentOpacity + 0.1;
    //console.log(div.style.backgroundColor)
    div.currentTarget.style.backgroundColor= `rgba(0,0,0,${increasedOpacity})`;
    //console.log(div.style.backgroundColor)
    //alert(div.style.backgroundColor);
}

function greyGrid (){
    //first, fist remove previous event
    
    callGridDivs.forEach(a => a.removeEventListener("mouseover",currentEvent )); 

    //second, give rgba to the whole grid
   // callGridDivs.forEach(a => a.style.backgroundColor="rgba(0,0,0,0)"); 
   

    //then, with each click to any div, that div should increase its opacity by 0,1
    callGridDivs.forEach(div => div.addEventListener("mouseover",increaseOpacity));
    currentEvent= increaseOpacity;
    

}

greyButton.addEventListener("click",greyGrid);



