let box = document.querySelectorAll("#box")
let valX = document.querySelector("#valX")

let turn = true
let cnt = 0;
let winningPettern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]
valX.addEventListener("click", () => {
    if (valX.checked) {
        turn = false
    }
})

box.forEach((item) => {
    item.addEventListener("click", () => {
        if (turn) {
            item.innerText = "O"
            item.style.color = "red"
            item.disabled = true
            document.querySelector('.result').innerText = `Player X Turn `
            turn = false;
            cnt++
        } else {
            item.innerText = "X"
            item.style.color = "blue"
            item.disabled = true
            document.querySelector('.result').innerText = `Player O Turn `
            turn = true;
            cnt++
        }

        for (let i of winningPettern) {
            let val1 = box[i[0]].innerText
            let val2 = box[i[1]].innerText
            let val3 = box[i[2]].innerText

            if (val1 != "" && val2 != "" && val3 != "") {
                if (val1 === val2 && val2 === val3) {
                    document.querySelector('.result').innerText = `Winner is player ${item.innerText} `
                    for (let b of box) {
                        b.disabled = true
                    }
                } else{
                    if(cnt >= 8 && val1 === val2 && val2 === val3){
                        document.querySelector('.result').innerText = `Winner is player ${item.innerText} `
                    } 
                }
            }   
        }

    })
})

const ResetGame = () => {
    for (let i of box) {
        i.innerHTML = ""
        turn = true
        valX.checked = false
        i.disabled = false
        cnt = 0;
        document.querySelector('.result').innerText = ""
    }
}
