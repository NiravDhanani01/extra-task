

let mineArea = document.querySelector('.minesArea');
let boxes = [];
let minesPosition = [];


const displayMineArea = (col, row) => {
    mineArea.innerHTML = "";
    mineArea.style.width = col * 35 + "px";
    for (let i = 0; i < row; i++) {
        let rowArr = [];
        for (let j = 0; j < col; j++) {
            let div = document.createElement('div');
            div.classList.add("mineBtn");
            div.id = `${i}-${j}`;
            div.dataset.mine = "false";
            div.addEventListener('click', handleClick);
            rowArr.push(`${i}-${j}`);
            mineArea.append(div);
        }
        boxes.push(rowArr);
    }
}


const mineSetter = (col, row) => {
    let mineCount = Math.floor((col * row) * 0.10);
    minesPosition = [];
    let allIds = [];

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            allIds.push(`${i}-${j}`);
        }
    }

    for (let i = 0; i < mineCount; i++) {
        let randomIndex = Math.floor(Math.random() * allIds.length);
        let randomId = allIds.splice(randomIndex, 1)[0];
        minesPosition.push(randomId);
        document.getElementById(randomId).dataset.mine = "true";
    }


    for (let position of minesPosition) {
        let [x, y] = position.split('-').map(Number);
        console.log([x, y]);
        let neighbors = [
            `${x - 1}-${y - 1}`, `${x - 1}-${y}`, `${x - 1}-${y + 1}`,
            `${x}-${y - 1}`, `${x}-${y + 1}`,
            `${x + 1}-${y - 1}`, `${x + 1}-${y}`, `${x + 1}-${y + 1}`
        ];

        for (let neighbor of neighbors) {
            let neighborCell = document.getElementById(neighbor);
            if (neighborCell && neighborCell.dataset.mine !== "true") {
                let currentCount = parseInt(neighborCell.innerText) || 0;
                neighborCell.innerText = currentCount + 1;
            }
        }
    }
}


const handleClick = (event) => {
    let clickPosition = event.target.id;
    if (minesPosition.includes(clickPosition)) {
        for (let mine of minesPosition) {
            let cell = document.getElementById(mine);
            cell.style.display = "block";
            cell.style.backgroundColor = "red";
            document.getElementById(mine).innerHTML = "&#128163;";

        }
        // alert("Game Over");
    } else {
        revealCell(clickPosition);
    }
}


const revealCell = (id) => {
    let cell = document.getElementById(id);
    if (cell.style.backgroundColor === "lightgrey") return;

    cell.style.backgroundColor = "lightgrey";
    let count = parseInt(cell.innerText);

    if (count === 0) {
        let [x, y] = id.split('-').map(Number);
        let neighbors = [
            `${x - 1}-${y - 1}`, `${x - 1}-${y}`, `${x - 1}-${y + 1}`,
            `${x}-${y - 1}`, `${x}-${y + 1}`,
            `${x + 1}-${y - 1}`, `${x + 1}-${y}`, `${x + 1}-${y + 1}`
        ];
        for (let neighbor of neighbors) {
            let neighborCell = document.getElementById(neighbor);
            if (neighborCell) {
                revealCell(neighbor);
            }
        }
    }
}




function selectBasic() {
    let row = 10;
    let col = 10;
    displayMineArea(col, row);
    mineSetter(col, row);
}

const selectIntermediate = () => {
    let row = 16;
    let col = 16;
    displayMineArea(col, row);
    mineSetter(col, row);
}

const selectExpert = () => {
    let col = 30;
    let row = 16;
    displayMineArea(col, row);
    mineSetter(col, row);
}

selectBasic();
