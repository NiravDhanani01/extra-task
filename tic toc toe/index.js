let box = document.querySelectorAll("#box");
let valX = document.querySelector("#valX");
let player = document.querySelector("#player");
let selectPlayer = document.querySelector("#selectPlayer");
let selectPlayer2 = document.querySelector("#selectPlayer2");

let turn = true;
let cnt = 0;
let winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

valX.addEventListener("click", () => {
    if (valX.checked) {
        turn = false;
        valX.style.display = "none"
        player.style.display = "none"
        selectPlayer.innerHTML = "X"
        selectPlayer2.innerHTML = "O"
    }
});

function defaultplayer() {
    selectPlayer.innerHTML = "O"
    selectPlayer2.innerHTML = "X"
}
defaultplayer()

box.forEach((item) => {
    item.addEventListener("click", () => {
        if (item.innerText === "") {
            if (turn) {
                item.innerText = "O";
                item.style.color = "red";
                item.disabled = true;
                valX.style.display = "none"
                valX.style.display = "none"
                player.style.display = "none"
                document.querySelector('.result').innerText = `Player X Turn`;
                turn = false;
                cnt++;
            } else {
                item.innerText = "X";
                item.style.color = "blue";
                item.disabled = true;
                document.querySelector('.result').innerText = `Player O Turn`;
                turn = true;
                cnt++;
            }

            for (let pattern of winningPatterns) {
                let val1 = box[pattern[0]].innerText;
                let val2 = box[pattern[1]].innerText;
                let val3 = box[pattern[2]].innerText;

                if (val1 !== "" && val1 === val2 && val2 === val3) {
                    document.querySelector('.result').innerText = `Winner is player ${item.innerText}`;
                    disableAllBoxes();
                    return;
                }
            }

            if (cnt === 9) {
                document.querySelector('.result').innerText = `It's a draw!`;
                disableAllBoxes();
            }
        }
    });
});

const disableAllBoxes = () => {
    for (let b of box) {
        b.disabled = true;
    }
};

const ResetGame = () => {
    for (let b of box) {
        b.innerHTML = "";
        b.disabled = false;
    }
    turn = true;
    valX.checked = false;
    valX.style.display = "block"
    cnt = 0;
    document.querySelector('.result').innerText = "";
};


