/*

321
21
1

*/

function tangga (num) {
    var result = ''
    for (var i = num; i>0; i--) {
        for (var j = i; j>0; j--) {
            result +=j
        }
         result += '\n'
    }
    return result
}
// console.log(tangga(3));

function tanggaRecursive (num) {
    if (num === 1) {
        return '1'
    } else {
        var result = ''
        for (var j = num; j>0; j--) {
            result += j
        }
            result += '\n'
            return result + tanggaRecursive(num - 1) 
    
    }
}
// console.log(tanggaRecursive(3));

function tanggaKolomRecursive (num) {
    if (num === 1) {
        return '1'
    } else {
            return deretTangga(num) + '\n' + tanggaRecursive(num - 1) 
    }
}
// console.log(tanggaKolomRecursive(3));

function deretTangga(num) {
    if (num=== 1) {
        return '1'
    } else {
        return num.toString() + deretTangga(num-1)
    }
}

/*

*
**
***

*/

function bintang (num) {
    var display = ''
    for (var i = 1; i<=num; i++) {
        for (var j=i; j>0; j--) {
            display += '*'
        }
        display += '\n'
    }
    return display
}
// console.log(bintang(3));

function bintangRecursive (num) {

    if (num === 1) {
        return '*'
    } else {
        var result = ''
        
        return  bintangRecursive(num+1) + samping(num) + '\n' 
    }
}
// console.log(bintangRecursive(3));

function samping(num) {
    if (num < 2 && num !== 0) {
        return  '*'
    } else {
        return '*' + samping(num-1)
    }
}
// console.log(samping(3));

/*
'I have a dream'
'hello world!' //!dlrow olleH
*/

function countWords (string) {
    var count = 0
    var word = ''
    for (var i=0; i<string.length; i++) {
        if (string[i] == ' ') {
            if (word) {
                count ++
                word = ''
            }
        } else {
            word+=string[i]
        }
        if (string.length-1 !== ' ') {
            if (word) {
                count ++
                word = ''
        }
    }
}
return count
}
// console.log(countWords('I have a dream'))

function countWordsRecursive (string) {
if (string.length-1 !== ' ') {
    return count
} else {
    count++
}

}
console.log(countWordsRecursive ('I have a dream'));




/*

PR

INPUT 'I have a drealm'
OUTPUT 4

INPUT 'Hellow world!'
OUTPUT !dlrow olleH

INPUT 'aAeOfE' || 'aOIuE'
OUTPUT false || true

INPUT 3 || 0 || 21 || 23 || 33 || 53
OUTPUT true || false || false || true || false || true

*/
