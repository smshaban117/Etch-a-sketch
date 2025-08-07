const container = document.querySelector("#container")

function gridmaker(columns, rows){
const blockSize = 50
container.style.width = `${rows*blockSize}px`
container.style.height = `${columns*blockSize}px`

for (let row = 0; row < rows; row++){
for (let column = 0; column < columns; column++)
{ 
const block = document.createElement("div")
block.className = "blocks"
container.appendChild(block)



}

}

}







const gridsize = document.querySelector("#gridsize")


gridsize.addEventListener("click",()=>{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    let sizer = prompt("Enter a gridsize")
    while (sizer >= 100 || sizer === "") {sizer = prompt("It should be below 100, Try again")}
    container.innerHTML="";
    gridmaker(sizer,sizer)

    const blocks = document.querySelectorAll(".blocks")
blocks.forEach(block=> block.addEventListener("mouseover",()=>{
    block.style.backgroundColor = "blue"
}))
})


