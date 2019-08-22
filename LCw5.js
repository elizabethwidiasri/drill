//1

function aInTheMiddle (arr) {
var res = []
var idx = 0
for (var i=0; i<arr.length; i++) {
    if (arr[i]%2 === 0) {
        idx = arr[i].length / 2
        if (arr[i][idx].toLowerCase() === 'a' && arr[i][idx-1].toLowerCase() === 'a') {
            res.push(arr[i])
        }
    } else {
        idx = Math.floor(arr[i].length / 2)
        if (arr[i][idx].toLowerCase() === 'a') {
            res.push(arr[i])
        }
    }
   

}
return res
}
// console.log(aInTheMiddle(['asafw', 'test', 'waw'])); // ['asafw', 'waw']
// console.log(aInTheMiddle(['baon', 'test', 'taqs'])); // []
// console.log(aInTheMiddle(['graail', 'nAn', 'naAn'])); // ['graail', 'nAn', 'naAn']
// console.log(aInTheMiddle(['asafw', 'wow', 'o', 'graail', 'nAn'])); // ['asafw', graail', 'nAn']
// console.log(aInTheMiddle([])); // []

//2

function twoDimensionalGenerator(num) {
    var res = []
    for (var i = 0; i < num; i++) {
        var arr = []
        var str = ''

        for (var j = 0; j < num; j++) {
            str = 'X'
            arr.push(str)
        }
        
        res.push(arr)
    }
    return res
}
// console.log(twoDimensionalGenerator(2)); // [ [ 'X', 'X' ], [ 'X', 'X' ] ]
// console.log(twoDimensionalGenerator(4)); // [ [ 'X', 'X', 'X', 'X' ], [ 'X', 'X', 'X', 'X' ], [ 'X', 'X', 'X', 'X' ], [ 'X', 'X', 'X', 'X' ] ]
// console.log(twoDimensionalGenerator(1)); // [ ['X'] ]
// console.log(twoDimensionalGenerator(0)); // []


//3!!
/*
eMoneySplit adalah sebuah fungsi yang menerima parameter berupa string
dan akan mengembalikan nilai string yang merupakan jumlah terbanyak dan terdikit.
[EXAMPLE]
INPUT: "bagus:200000,ali:20000,bagas:300000,andre:50000"
OUTPUT: terbanyak adalah bagas dan terdikit adalah ali
[NOTES]
1. Apabila tidak ada data tampilkan "tidak ada catatan eMoney"
*/

 

// console.log(eMoneySplit('bagus:200000,ali:20000,bagas:300000,andre:50000'))
// terbanyak adalah bagas dan terdikit adalah ali
// console.log(eMoneySplit('andre:50000'))
// // terbanyak adalah andre dan terdikit adalah andre
// console.log(eMoneySplit(''))
// // tidak ada catatan eMoney


//4
/*
function soal1(objList, id, action) {
    var res = {};
    var key = Object.keys(objList);

    if (action === 'view') {
        return objList[id]
    }
    if (action === 'delete') {
        for (var i = id; i < key.length; i++) {
            objList[key[i]] = objList[key[i + 1]]

        }
        delete objList[key[key.length - 1]] 
        return objList
    }

}


console.log(soal1({
    0:{name:"dimas",codename:"surgeon of death"},
    1:{name:"awtian",codename:"the black assasin"},
    2:{name:"icha",codename:"the real dementor"}
},1,"view"))
// { name:"awtian",codename:"the black assasin"}

console.log(soal1({
    0:{name:"dimas",codename:"surgeon of death"},
    1:{name:"awtian",codename:"the black assasin"},
    2:{name:"icha",codename:"the real dementor"}
},1,"delete"))

    // { 
    //     0:{ name:"dimas",codename:"surgeon of death"},
    //     1:{ name:"icha",codename:"the real dementor"}
    // }



console.log(soal1({
    0:{name:"dimas",codename:"surgeon of death"},
    1:{name:"awtian",codename:"the black assasin"},
    2:{name:"icha",codename:"the real dementor"},
    3:{name:"hedya",codename:"the real lol"}
},2,"delete"))
*/


var input = ['dskjfhasgu']
var res = []
res.push([])
for (var i = 0; i < input[0].length; i++) {
      if (res[res.length-1].length === 3) {
          res.push([])
      }
       res[res.length-1].push(input[0][i])
}
// console.log(res)

var res = []
res.push([])

for (var i=0; i<input[0].length; i++) {
    if (res[res.length-1].length === 3) {
        res.push([])
    }
    res[res.length-1].push(input[0][i])
}
// console.log(res);


//OBJECT SAMPE FINISH
/*
input: [ 'dimitri', 'awtian', 'icha' ]

function countMe(string) {
    var res = {}
    for (var i=0; i<string.length; i++) {
        for (var j=0; j<string[i].length; j++) {
            if (res[string[i][j]] === undefined) {
                res[string[i][j]] = 1
            } else {
                res[string[i][j]]+=1
            }
        }
    }
    return res
}
// console.log(countMe([ 'dimitri', 'awtian', 'icha' ]));
*/
function csvToObject(keys, values) {
    var res = {}
    var key = keys.split(',')
    var value = values.split(',')
    var input = []
    input.push(key, value)
    console.log(input);
    
    for (var i=0; i<input.length-1; i++) {
        for (var j=0; j<input[i].length; j++) {
            if (res[input[i][j]] === undefined) {
                res[input[i][j]] = input[i+1][j]
            } 
        }
        
    }
    return res
    
}

  console.log(csvToObject('name,phoneNumber', 'Dimitri,+666123654'));
// { name: 'Dimitri', phoneNumber: '+666123654' }
console.log(csvToObject('firstName,lastName,nationality', 'Sergei,Dragunov,Russia'));

function multidimensiIntoString(arr) {
    var temp = []
for (var i=0; i<arr.length; i++) {
    for (var j=0; j<arr[i].length; j++) {
        temp.push(arr[i][j])
    }
}
var res = temp.join('')
return res
}
console.log(multidimensiIntoString([
    [4,3,2,1,5],
    [4,2,7,9,3],
    [7,4,3,7,3],
    [4,6,3,6,8],
    [3,2,5,6,4]
]) )


var input = '0120194124213712'

 function stringToMultidimensi(str) {
    var res = []
    var char = str.length
    console.log(char);
    var matrix = Math.sqrt(str.length)
    console.log(matrix);
    var count = 0
    
    for (var i=0; i<matrix; i++) {
        var temp = []
        for (var j=0; j<matrix; j++) {
            temp.push(str[count])
            count++
        }
        res.push(temp)
    } 
    return res
 }
 console.log(stringToMultidimensi("0120194124213712"))
 

 function twoArrayOperation(arr1,arr2) {
    var res = []
    var maxLength = Math.max(arr1.length, arr2.length)
    console.log(maxLength)
    for (var i=0; i<maxLength; i++) {
        if (arr1[i] === undefined) {
            arr1.push(arr2[i]) 
            console.log('1pendek');
            
        } else if (arr2[i] === undefined) {
            arr2.push(arr1[i])
            console.log('2pendek');
            console.log(arr2);
            
            
    
        } else if (i%2 === 0) {
            var tambah = (arr1[i] + arr2[i])
            res.push(tambah)
            console.log(res);
            
        } else if (i%2 !== 0) {
            var kurang = (arr1[i] - arr2[i])
            res.push(kurang)
            console.log(res);
            
        }
       
    }
    
    return res
    }
    console.log( twoArrayOperation([-4,5,57,33,-90,0],[4,2,54,24,34]) ) // [ 0, 3, 111, 9, -56, 0]
    // console.log( twoArrayOperation([12,34,11,23,12],[11,78,45,20,42]) ) // [ 23, -44, 56, 3, 54 ]
    // console.log( twoArrayOperation([1,2,3],[1,2,3]) ) // [ 2, 0, 6 ]