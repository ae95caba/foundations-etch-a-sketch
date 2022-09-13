const gridContainer = document.querySelector(".grid-container");

let equisde ;

function createDivs (num){
    for (let i = 1; i <= (num*num) ; i++ ){
        const createDiv = document.createElement("div");
        createDiv.classList.add("grid-div")
        gridContainer.appendChild(createDiv);
        
    }
    
    const gridDivs = document.querySelectorAll(".grid-div");
    console.log(gridDivs);
    equisde=gridDivs;
    
    gridDivs.forEach(a=>a.style.height =`\"${960/num}px\"`);
    gridDivs.forEach(a=>a.style.width =`\"${960/num}px\"`);
    gridContainer.style.gridTemplateRows=`repeat(${num},${100/num}%)`;
    gridContainer.style.gridTemplateColumns=`repeat(${num},${100/num}%)`;
}

createDivs(100);
equisde.forEach(a => a.addEventListener("click",()=> a.style.backgroundColor = "red"));


