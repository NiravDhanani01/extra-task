
function pattern(num) {
    if (num % 2 === 0) {
        alert('Enter odd number only')
    }
    let midpoint = Math.ceil(num / 2)

    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {

            if (i === midpoint) {
                document.write(j, "&nbsp;&nbsp;")
            } else if (j == midpoint) {
                if (num <= 19) {
                    document.write("&nbsp;".repeat((num * 2)), i)
                } else {
                    document.write("&nbsp;&nbsp;".repeat((midpoint * 2)), i)
                    
                }
            } else if (j >= midpoint && i === 1) {
                document.write("&nbsp;&nbsp;", (Math.floor(j - (num / 2 - 1))));
            } else if (i >= midpoint && j === num) {
                // document.write("&nbsp;&nbsp;".repeat((num * 2) - midpoint - 2), (j))
                // document.write("&nbsp;&nbsp;".repeat((num * 2) - midpoint - 2), (midpoint))
                // document.write("&nbsp;&nbsp;".repeat((num * 2) - midpoint - 2), (i))
            } else if (i <= midpoint && j === 1) {
                document.write(midpoint - i + 1)
            } else if (j <= midpoint && i === num) {
                document.write(j-1 + midpoint,"&nbsp;&nbsp;")
            }
        }
        document.write("<br>")
    }
}

pattern(25)






