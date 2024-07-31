let mineArea = document.querySelector('.minesArea')
let mineBtn = document.querySelectorAll(".mineBtn")

let boxes = []
const displayMineArea = (col, row) => {
    mineArea.innerHTML = ""
    mineArea.style.width = col * 35 + "px"
    for (let i = 0; i < row; i++) {
        let row = []
        for (let j = 0; j < col; j++) {
            let div = document.createElement('div')
            div.classList = "mineBtn";
            div.setAttribute("onclick","openPosition(event)")
            div.id = `${i}-${j}`;
            row.push(`${i}-${j}`)

            mineArea.append(div)
        }
        boxes.push(row)
    }

}


let minesPosition = []
const mineSetter = (col, row) => {
    let mine = Math.floor((col * row) * 0.10)

    for (let i = 0; i < mine; i++) {
        let x = Math.floor(Math.random() * row).toString()
        let y = Math.floor(Math.random() * col).toString()
        let randomId = `${x}-${y}`

        if (!minesPosition.includes(randomId)) {
            minesPosition.push(randomId)
            document.getElementById(randomId).innerHTML = "&#128163;"
        } else {
            i--
        }
        remainingBoxes(randomId, col, row)
    }
}

const openPosition = (event)=>{
    let clickPosition = event.target.id
    if (minesPosition.includes(clickPosition)) {
        for (let i = 0; i < minesPosition.length; i++) {
            document.getElementById(minesPosition[i]).style.display = "block"
            document.getElementById(minesPosition[i]).style.backgroundColor = "red"
            document.getElementById(minesPosition[i]).innerHTML = "&#128163;"
        }
        // alert("Game Over")
    } else {
        let x = clickPosition.split("-")[0]
        let y = clickPosition.split("-")[1]
        let id = `${x}-${y}`
        console.log(id);
        if(document.getElementById(id).innerText === ""){
            document.getElementById(id).style.backgroundColor = "white"
     
        }
        
    }
}

let remainingBoxes = (randomId, col, row) => {
    let mineCounting = 1


    let splitId = randomId.split("-")

    let splitX = parseInt(splitId[0])
    let splitY = parseInt(splitId[1])

    let leftId = `${splitX}-${(splitY - 1)}`
    let topLeftId = `${splitX - 1}-${(splitY - 1)}`
    let bottomLeftId = `${splitX + 1}-${(splitY - 1)}`
    let topId = `${splitX - 1}-${(splitY)}`
    let bottomId = `${splitX + 1}-${(splitY)}`
    let topRightId = `${splitX - 1}-${(splitY + 1)}`
    let rightId = `${splitX}-${(splitY + 1)}`
    let bottomRightId = `${splitX + 1}-${(splitY + 1)}`


    if (splitY > 0) {
        document.getElementById(leftId).innerText = "1"
    } else if (splitX > 0 && splitY > 0) {
        document.getElementById(topLeftId).innerText = "1"
    } else if (splitX > 0 && splitY > 0 && splitX < row && splitY < row) {
        document.getElementById(bottomLeftId).innerText = "1"
    } else if (splitX > 0 && splitY > 0) {
        document.getElementById(topId).innerText = "1"
    } else if (splitX < row && splitY < row) {
        document.getElementById(bottomId).innerText = "1"
    } else if (splitX > 0 && splitY > 0 && splitX < row && splitY < row) {
        document.getElementById(topRightId).innerText = "1"
    } else if (splitX < col && splitY < col) {
        document.getElementById(rightId).innerText = "1"
    } else if (splitX > 0 && splitY > 0 && splitX < row && splitY < row) {
        document.getElementById(bottomRightId).innerText = "1"
    }


}





function selectBasic() {
    let row = 10
    let col = 10
    displayMineArea(col, row)
    mineSetter(col, row)
}

const selectIntermediate = () => {
    let row = 16
    let col = 16
    displayMineArea(col, row)
    mineSetter(col, row)
}

const selectExpert = () => {
    let col = 30
    let row = 16
    displayMineArea(col, row)
    mineSetter(col, row)
}
selectBasic()