let mineArea = document.querySelector(".minesArea");
let boxes = [];

const displayMineArea = (col, row) => {
  mineArea.innerHTML = "";
  mineArea.style.width = col * 35 + "px";
  for (let i = 0; i < row; i++) {
    let row = [];
    for (let j = 0; j < col; j++) {
      let div = document.createElement("div");
      div.classList = "mineBtn";
      div.setAttribute("onclick", "openPosition(event)");
      div.id = `${i}-${j}`;
      row.push(`${i}-${j}`);
      mineArea.append(div);
    }
    boxes.push(row);
  }
};

let minesPosition = [];
const mineSetter = (col, row) => {
  let mineCount = Math.floor(col * row * 0.1);
  minesPosition = []; 

  while (minesPosition.length < mineCount) {
    let x = Math.floor(Math.random() * row).toString();
    let y = Math.floor(Math.random() * col).toString();
    let randomId = `${x}-${y}`;

    if (!minesPosition.includes(randomId)) {
      minesPosition.push(randomId);
      document.getElementById(randomId).innerHTML = "";

    }
  }

  for (let item of minesPosition) {
    let splitId = item.split("-").map(Number);
    let x = splitId[0];
    let y = splitId[1];

    let leftId = `${x}-${y - 1}`;
    let topLeftId = `${x - 1}-${y - 1}`;
    let bottomLeftId = `${x + 1}-${y - 1}`;
    let topId = `${x - 1}-${y}`;
    let bottomId = `${x + 1}-${y}`;
    let topRightId = `${x - 1}-${y + 1}`;
    let rightId = `${x}-${y + 1}`;
    let bottomRightId = `${x + 1}-${y + 1}`;

    // left side part
    if (y > 0) {
      setNumber(leftId);
    }
    if (x > 0 && y > 0) {
      setNumber(topLeftId);
    }
    if (x < row - 1 && y > 0) {
      setNumber(bottomLeftId);
    }

    // middel part
    if (x > 0) {
      setNumber(topId);
    }
    if (x < row - 1) {
      setNumber(bottomId);
    }
    // right side part
    if (x > 0 && y < col - 1) {
      setNumber(topRightId);
    }
    if (y < col - 1) {
      setNumber(rightId);
    }
    if (x < row - 1 && y < col - 1) {
      setNumber(bottomRightId);
    }
  }
};

const setNumber = (ids) => {
  if (document.getElementById(ids) && !minesPosition.includes(ids)) {
    document.getElementById(ids).innerText =
      (parseInt(document.getElementById(ids).innerText) || 0) + 1;
      document.getElementById(ids).style.color = "transparent"  
  }
};

const openPosition = (event) => {
  let clickPosition = event.target.id;
  let clickebox = document.getElementById(clickPosition);

  if (minesPosition.includes(clickPosition)) {
    for (let mine of minesPosition) {
      let mineCell = document.getElementById(mine);
      mineCell.style.backgroundColor = "red";
      mineCell.innerHTML = "&#128163;";
    }
    alert("Game Over");
  } else {
        clickebox.style.backgroundColor = "lightgrey";
        clickebox.style.color = "black";
        clickebox.style.fontWeight = "bold"; 
  }
};


const openEmptyboxes = () =>{

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
};

const selectExpert = () => {
  let col = 30;
  let row = 16;
  displayMineArea(col, row);
  mineSetter(col, row);
};
selectBasic();
