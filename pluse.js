
let standing = 0;
let sleeping = 0;
function pattern(num) {
    let midpoint = Math.floor(num / 2)
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            if (i == midpoint && j == midpoint) {
                standing++;
                sleeping++;
                document.write(standing)
                document.write("&nbsp;&nbsp;");
            } else if (i == midpoint && j != midpoint) {
                sleeping++;
                document.write(sleeping)
                document.write("&nbsp;&nbsp;")
            }
            else if (i != midpoint && j == midpoint) {
                standing++;
                let space = ""
                space = "&nbsp;&nbsp;&nbsp;&nbsp;".repeat(midpoint)
                document.write(space)
                document.write(standing)
            }
        }
        document.write("<br>")
    }
}

pattern(21)






