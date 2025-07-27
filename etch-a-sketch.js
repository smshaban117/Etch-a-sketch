const container = document.querySelector("#container")

function gridmaker(columns, rows){
for (let row = 0; row < rows; row++){
for (let column = 0; column < columns; column++)
{ 
const block = document.createElement("div")
block.className = "blocks"
container.appendChild(block)

}

}

}

gridmaker(16,16)

const blocks = document.querySelectorAll(".blocks")

blocks.forEach(block=> block.addEventListener("mouseover",()=>{
    block.style.backgroundColor = "blue"
}))