
let standing = 0;
let sleeping = 0;
function pattern(num) {
    let midpoint = Math.floor(num / 2)
    console.log(midpoint);
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            if (i == midpoint && j == midpoint) {
                standing++;
                sleeping++;
                document.write(standing)
                document.write("&nbsp;&nbsp;")
            } else if (i == midpoint && j != midpoint) {
                sleeping++;
                document.write(sleeping)
                document.write("&nbsp;&nbsp;")
            } else if (i != midpoint && j == midpoint) {
                standing++;
                let space = ""
                if(num < 18){
                     space = "&nbsp;&nbsp;&nbsp;&nbsp;".repeat(midpoint) 
                } else {
                     space = "&nbsp;&nbsp;&nbsp;&nbsp;".repeat(midpoint)
                     console.log(space.length);
                }     
                
                document.write("&nbsp;&nbsp;")
                document.write(space)
                document.write(standing)
            }
        }
        document.write("<br>")
    }
}

pattern(21)


