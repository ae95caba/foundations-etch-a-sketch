const gridContainer = document.querySelector(".grid-container");

let x ; // I defined this variable here because if I instead defined it inside the function below,
// I wouldn 't be able to call it in the last line due to the scope

function createDivs (num){
    //creates divs inside div container
    for (let i = 1; i <= (num*num) ; i++ ){
        const createDiv = document.createElement("div");
        createDiv.classList.add("grid-div")
        gridContainer.appendChild(createDiv);

    }
    
    const gridDivs = document.querySelectorAll(".grid-div");
    x=gridDivs;

    // resizes each div of the grid and arranges them into rows and columns so all divs
    //will fit in a 960px container
    gridDivs.forEach(a=>a.style.height =`\"${960/num}px\"`);
    gridDivs.forEach(a=>a.style.width =`\"${960/num}px\"`);
    gridContainer.style.gridTemplateRows=`repeat(${num},${100/num}%)`;
    gridContainer.style.gridTemplateColumns=`repeat(${num},${100/num}%)`;
}

createDivs(64);
x.forEach(a => a.addEventListener("mouseover",()=> a.style.backgroundColor = "red")); // last line


