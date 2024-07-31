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
    let mineCounting = 1
    for (let i = 0; i < mine; i++) {
        let x = Math.floor(Math.random() * row).toString()
        let y = Math.floor(Math.random() * col).toString()
        let randomId = `${x}-${y}`

        if (!minesPosition.includes(randomId)) {
            minesPosition.push(randomId)
            document.getElementById(randomId).innerHTML = "&#128163;"
        }


        // let splitId = randomId.split("-")

        // let splitX = parseInt(splitId[0])
        // let splitY = parseInt(splitId[1])

        // let leftId = `${splitX}-${(splitY - 1)}`
        // if (leftId[y] === "-1") {
        //     return
        // } else {
        //     document.getElementById(leftId).innerText = mineCounting
        // }

        // let rightId = `${splitX}-${(splitY + 1)}`
        // if (rightId[y] === "-1") {
        //     return
        // } else {
        //     document.getElementById(rightId).innerText = mineCounting
        // }

        // let topId = `${splitX - 1}-${(splitY)}`
        // if (topId[y] === "-1") {
        //     return
        // } else {
        //     document.getElementById(topId).innerText = mineCounting
        // }

        // let bottomId = `${splitX + 1}-${(splitY)}`
        // if (bottomId[y] === "-1") {
        //     return
        // } else {
        //     document.getElementById(bottomId).innerText = mineCounting
        // }

        // let topLeftId = `${splitX - 1}-${(splitY - 1)}`
        // if (topLeftId[y] === "-1") {
        //     return
        // } else {
        //     document.getElementById(topLeftId).innerText = mineCounting
        // }

        // let topRightId = `${splitX - 1}-${(splitY + 1)}`
        // if (topRightId[y] === "-1") {
        //     return
        // } else {
        //     document.getElementById(topRightId).innerText = mineCounting
        // }

        // let bottomLeftId = `${splitX + 1}-${(splitY - 1)}`
        // if (bottomLeftId[y] === "-1") {
        //     return
        // } else {
        //     document.getElementById(bottomLeftId).innerText = mineCounting
        // }

        // let bottomRightId = `${splitX + 1}-${(splitY + 1)}`
        // if (bottomRightId[y] === "-1") {
        //     return
        // } else {
        //     document.getElementById(bottomRightId).innerText = mineCounting
        // }

        // if (leftId === rightId) {
        //     mineCounting += 1
        // } else {
        //     mineCounting = 1
        // }
        remainingBoxes(x,y)
    }

    mineArea.addEventListener('click', function () {
        let clickPosition = event.target.id
        if (minesPosition.includes(clickPosition)) {
            document.getElementById(clickPosition).style.display = "block"
            document.getElementById(clickPosition).innerHTML = "&#128163;"
            alert("Game Over")
        }

        else {
            if (minesPosition.includes(clickPosition))
                document.getElementById(clickPosition).innerHTML = "1"
        }
    })
}

let remainingBoxes = (x,y) =>{
    console.log(x,y);
    for(let x=-1;x<1;x++){
        for(let y=-1;y<1;y++){
            console.log(x,y);
        }
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

