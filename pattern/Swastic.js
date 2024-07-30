
// function pattern(num) {
//     if (num % 2 === 0) {
//         alert('Enter odd number only')
//     }
//     let midpoint = Math.ceil(num / 2)

//     for (let i = 1; i <= num; i++) {
//         for (let j = 1; j <= num; j++) {

//             if (i === midpoint) {
//                 document.write(j, "&nbsp;&nbsp;")
//             } else if (j == midpoint) {
//                 if (num <= 19) {
//                     document.write("&nbsp;".repeat((num * 2)), i)
//                 } else {
//                     document.write("&nbsp;&nbsp;".repeat((midpoint * 2)), i)
                    
//                 }
//             } else if (j >= midpoint && i === 1) {
//                 document.write("&nbsp;&nbsp;", (Math.floor(j - (num / 2 - 1))));
//             } else if (i >= midpoint && j === num) {
//                 // document.write("&nbsp;&nbsp;".repeat((num * 2) - midpoint - 2), (j))
//                 // document.write("&nbsp;&nbsp;".repeat((num * 2) - midpoint - 2), (midpoint))
//                 // document.write("&nbsp;&nbsp;".repeat((num * 2) - midpoint - 2), (i))
//             } else if (i <= midpoint && j === 1) {
//                 document.write(midpoint - i + 1)
//             } else if (j <= midpoint && i === num) {
//                 document.write(j-1 + midpoint,"&nbsp;&nbsp;")
//             }
//         }
//         document.write("<br>")
//     }
// }

// pattern(25)




function pattern(num) {
    if (num % 2 === 0) {
        alert('Enter odd number only');
        return;
    }

    let midpoint = Math.ceil(num / 2);

    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            if (i === midpoint) {
                // Horizontal middle line
                document.write(j, "&nbsp;&nbsp;");
            } else if (j === midpoint) {
                // Vertical middle line
                document.write(i, "&nbsp;&nbsp;");
            } else if (i === 1 && j >= midpoint) {
                // Top right quadrant
                document.write(j - midpoint + 1, "&nbsp;&nbsp;");
            } else if (i === num && j <= midpoint) {
                // Bottom left quadrant, reversed
                document.write(num - j + 1, "&nbsp;&nbsp;");
            } else if (j === 1 && i <= midpoint) {
                // Top left quadrant
                document.write(midpoint - i + 1, "&nbsp;&nbsp;");
            } else if (j === num && i >= midpoint) {
                // Bottom right quadrant, reversed
                document.write(i, "&nbsp;&nbsp;");
            } else {
                // Filling the rest with spaces
                document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
            }
        }
        document.write("<br>");
    }
}

pattern(31);






