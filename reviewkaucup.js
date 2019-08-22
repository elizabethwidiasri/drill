function asterisk (matrix) {
    var display = ''
for (var i=0; i <matrix; i++) {
    for (var j=0; j<matrix; j++) {
        if ((i%2 === 0 && j%2 === 0) || (i%2 !== 0 && j%2 !== 0)) {
            display += '*'
        } else {
            display += ' '
        } 
        // if (i%2 !== 0 && j%2 !== 0) {
        //     display += '*'
        // } else {
        //     display += ' '
        // }

        //jangan bikin 2 if gini soalnya, di looping i0j4 misalnya, dia dapet else 2x (else dari if pertama & else dr if kedua)
    }
    display +='\n' 
}
return display
}
// console.log(asterisk(5))

/*

* * *
 * * 
* * *
 * * 
* * * 

*/



function kotakJackpot (matrix) {
var display = ''
if (matrix%2 === 0) {
    for (var i=0; i<matrix; i++) {
        for (var j=0; j<matrix; j++) {
            if (i === 0 && i === matrix-1) {
                display += '*'
            } else {
                if (j === 0 && j === matrix-1){
                    display += '*'
                } else {
                    display += ' '
                }
            }
        }
    }
// } else if (matrix%2 !== 0) {
}
return display
}
console.log(kotakJackpot(4));

/*

matrix ganjil(5)
*****
*   *
* * *
*   *
*****

matrix genap(4)
****
*  *
*  *
****

*/