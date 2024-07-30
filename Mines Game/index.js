let mineArea = document.querySelector('.minesArea')

const displayMineArea = (col, row) => {
    mineArea.style.width = col * 35 + "px"
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let div = document.createElement('div')
            div.classList = "mineBtn";
            div.id = `${i}${j}`;
            mineArea.append(div)
        }
    }
}
displayMineArea()


const selectBasic = () => {
    let row = 10
    let col = 10
    displayMineArea(col, row)
}
selectBasic()

// const selectIntermediate = () =>{
//     let row = 16
//     let col = 16
//     let matrix = row * col
//     displayMineArea(matrix,col,row)

// }

// const selectExpert = () =>{
//     let col = 30
//     let row = 16
//     let matrix = row * col
//     displayMineArea(matrix,col,row)

// }

let minesPosition = []
let btn = document.querySelectorAll(".mineBtn")

const mineSetter = () => {
    let col = 10
    let row = 10

    let mine = Math.floor((col * row) * 0.10)
    for (let i = 0; i < mine; i++) {
        let x = Math.floor(Math.random() * row).toString()
        let y = Math.floor(Math.random() * col).toString()
        let randomId = x + y

        if (!minesPosition.includes(randomId)) {
            minesPosition.push(randomId)
            document.getElementById(randomId).innerHTML = "&#128163;"
        }
        
        if(x > 0 && y>0){
            let printLeftNumberX = (x).toString()
            let printLeftNumberY = (y - 1).toString()
            let printLeftNumber = printLeftNumberX + printLeftNumberY
console.log(printLeftNumber);
            document.getElementById(printLeftNumber).innerHTML = "1"
        } 
    

        let printRightNumberX = (x).toString()
        let printRightNumberY = (y + 1)
        let printRightNumber = printRightNumberX + printRightNumberY
        // console.log("printlrftNumber",printLeftNumber);
        // console.log("printrightNumber",printRightNumber);
        
        // if(printLeftNumber) {
        //     } else if(printRightNumber){
        //         document.getElementById(printRightNumber).innerHTML = "1"
        //     }
    }




mineArea.addEventListener('click', function () {
    let clickPosition = event.target.id
    if (minesPosition.includes(clickPosition)) {
        document.getElementById(clickPosition).style.display = "block"
        document.getElementById(clickPosition).innerHTML = "&#128163;"
        alert("Game Over")
    } else {
        if (!minesPosition.includes(clickPosition))
            document.getElementById(clickPosition).innerHTML = "1"
    }
})
}

mineSetter()


