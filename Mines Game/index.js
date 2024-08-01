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
  let mineCount = Math.floor(col * row * 0.15);
  minesPosition = [];

  for (let i = 0; i < mineCount; i++) {
    let x = Math.floor(Math.random() * row).toString();
    let y = Math.floor(Math.random() * col).toString();
    let randomId = `${x}-${y}`;

    if (!minesPosition.includes(randomId)) {
      minesPosition.push(randomId);
      document.getElementById(randomId).innerHTML = "&#128163;";
      // document.getElementById(randomId).style.color = "transparent"
    }
  }

  for (let item of minesPosition) {
    let splitId = item.split("-").map(item => item);

    let x = parseInt(splitId[0]);
    let y = parseInt(splitId[1]);

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
    // document.getElementById(ids).style.color = "transparent"
  }
};

const openPosition = (event) => {
  let clickPosition = event.target.id;
  let clickebox = document.getElementById(clickPosition);

  if (minesPosition.includes(clickPosition)) {
    for (let mine of minesPosition) {
      let mineCell = document.getElementById(mine);
      mineCell.style.color = "black"
      mineCell.style.backgroundColor = "red";
      mineCell.innerHTML = "&#128163;";
    }
    let allBoxes = document.querySelectorAll(".mineBtn")
    allBoxes.forEach((item) => {
      item.style.pointerEvents = "none"
    })
    alert("Game Over");
  } else {
    clickebox.style.backgroundColor = "lightgrey";
    clickebox.style.color = "black";
    clickebox.style.fontWeight = "bold";

    if (clickebox.innerHTML == "") {
      openEmptyBoxes(clickPosition)
    }
  }
};

const openEmptyBoxes = (id) => {


  // for (let item of minesPosition) {

    //  if(item.id == id){
      let emptyId = id.split("-")
      let x = parseInt(emptyId[0])
      let y = parseInt(emptyId[1])
    
      let emtyId = `${x}-${y}`;
      let leftId = `${x}-${y - 1}`;
      let topLeftId = `${x - 1}-${y - 1}`;
      let bottomLeftId = `${x + 1}-${y - 1}`;
      let topId = `${x - 1}-${y}`;
      let bottomId = `${x + 1}-${y}`;
      let topRightId = `${x - 1}-${y + 1}`;
      let rightId = `${x}-${y + 1}`;
      let bottomRightId = `${x + 1}-${y + 1}`;
    
      // left side part 
      if (emtyId) {
        emptyboxId(`${x}-${y}`);
      }
      if (y > 0) {
        emptyboxId(leftId);
      }
      if (x > 0 && y > 0) {
        emptyboxId(topLeftId);
      }
      if (x && y > 0) {
        emptyboxId(bottomLeftId);
      }
    
      // middel part
      if (x > 0) {
        emptyboxId(topId);
      }
      if (x) {
        emptyboxId(bottomId);
      }
    
      // right side part
      if (x > 0 && y) {
        emptyboxId(topRightId);
      }
      if (y) {
        emptyboxId(rightId);
      }
      if (x && y) {
        emptyboxId(bottomRightId);
      }
    //  }
  // }
}

const emptyboxId = (id) => {
  document.getElementById(id).style.backgroundColor = "lightgrey";
  document.getElementById(id).style.color = "black";
    // openEmptyBoxes(id)
}

const selectBasic = () => {
  let row = 10;
  let col = 10;
  let id = 1
  displayMineArea(col, row);
  mineSetter(col, row);
}

const selectIntermediate = () => {
  let row = 16;
  let col = 16;
  displayMineArea(col, row);
  document.getElementById(basic).setAttribute("data","true")
  mineSetter(col, row);
};

const selectExpert = () => {
  let col = 30;
  let row = 16;
  displayMineArea(col, row);
  mineSetter(col, row);
};

const customeSelect = () => {
  let row = parseInt(prompt("Enter the number of rows"));
  let col = parseInt(prompt("Enter the number of columns"));
  if (!row || !col) {
    selectBasic()
  } else {
    displayMineArea(col, row);
    mineSetter(col, row);
  }
}

const ResetGame = () => {
  selectBasic()
}

selectBasic();