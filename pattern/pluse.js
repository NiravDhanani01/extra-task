
// let standing = 0;
// let sleeping = 0;
// function pattern(num) {
//     let midpoint = Math.floor(num / 2)
//     for (let i = 0; i < num; i++) {
//         for (let j = 0; j < num; j++) {
//             if (i == midpoint && j == midpoint) {
//                 standing++;
//                 sleeping++;
//                 document.write(standing)
//                 document.write("&nbsp;&nbsp;");
//             } else if (i == midpoint && j != midpoint) {
//                 sleeping++;
//                 document.write(sleeping)
//                 document.write("&nbsp;&nbsp;")
//             }
//             else if (i != midpoint && j == midpoint) {
//                 standing++;
//                 let space = ""
//                 space = "&nbsp;&nbsp;&nbsp;&nbsp;".repeat(midpoint)
//                 document.write(space)
//                 document.write(standing)
//             }
//         }
//         document.write("<br>")
//     }
// }

// pattern(21)


function pattern(num) {
    if (num % 2 === 0) {
        alert('Enter odd number only');
        return;
    }

    let midpoint = Math.floor(num / 2) + 1;

    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            if (i === midpoint) {
                document.write(j, "&nbsp;&nbsp;");
            } else if (j === midpoint) {
                document.write(i, "&nbsp;&nbsp;");
            } else {
                document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
            }
        }
        document.write("<br>");
    }
}

pattern(19);



