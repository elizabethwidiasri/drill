// // learn lesson multidimensional array

// var number = 3
// var string = 'p'
// var boolean = false
// var group = []
// group.push(number, boolean, string)
// group.push('sisip')
// var pushing = [['k']]
// group.push(pushing)
// // console.log(group)


// //ganti value elemen array sesuai tipe data

// var group = [3, false, 'p', [['k']]]

// group[0] = 4
// group[1] = true
// group[2] = 'm'
// group[3][0][0] = 'g'
// var multi = [[2, 9, 1], ['ab', 'cd', 'ef']]
// group.push(multi)
// // console.log(group)
// // console.log(group.length)
// // console.log



// var numbers = [9, 0, 9, 0, 0, 0]
// var largestNumber = numbers[0]

// for (var i=1; i<numbers.length; i++) {
    
//     if( numbers[i] > largestNumber ) {
//         largestNumber = numbers[i]
//         // console.log(largestNumber)
//     }
   
// }

// var number = [3,2,1]
// group[3][0][0].toUpperCase()
// // console.log(group)
// // console.log(typeof group[3][0][0])


// var arnold = ['arnold']
// // console.log(arnold[0].toUpperCase())
// console.log(typeof arnold)


// _____________________________________________________________________________


// var friends = ['arnold', 'eli', 'robby', 'bram', 'dimas', 'devita']

// friends.push('risan');
// friends.pop();
// friends.unshift('evan');
// friends.shift('evan');
// slice = friends.slice(2,4);
// friends.splice(1, 2, 'kevin', 'gusti');
// split = friends[0].split('');
// friends.unshift(split);
//  friends.shift(split);
// console.log(friends);



//____________________________________________________________________________



 // task2

// function balikString(kata) {

//     var kalimat = ''

//     for (var i = kata.length - 1; i >= 0; i--) {

//         kalimat = kalimat + kata[i]
//     }

//     return kalimat
// }
// console.log(balikString('red'))



// task3

// var input = [
//     ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
//     ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
//     ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
//     ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
// ];


// function dataHandling(input) {

    

//     for(var i=0; i<input.length; i++) {

//         console.log('Nomor ID: ' + input[i][0]);
//         console.log('Nama Lengkap: ' + input[i][1]);
//         console.log('TTL: ' + input[i][2] + input[i][3]);
//         console.log('Hobi: ' + input[i][4] + '\n');
//     }
    
// }
// dataHandling(input);


// task4(2)

// function dataHandling2 (input) {
//     input[0][1] += ' Elsharawy'
    // console.log(input)
// }

// dataHandling2(input)



//task4

// var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

// function dataHandling2 (input) {
//     input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
//     input.splice(4, 2, "Pria", "SMA Internasional Metro")
//     return input
// }
// console.log(dataHandling2(input))



/*
var s1 = 'akhir'
var s2 = 'b'
// console.log(s1.concat(s2))
// console.log(s1,s2)
var ss = s1.substring(2)
// console.log(ss)
s1.slice(2)
// console.log(s1)

var array = [1,2]
array.toString()
// console.log(array)


var arr = [1, 2, 15]
arr.sort()
console.log(arr) // [1, 15, 2]
arr.sort(function(value1, value2) {return value1 > value2})
console.log(arr) // [1, 2, 15]
arr.sort(function(value1, value2) {return value1 < value2})
console.log(arr) // [15, 2, 1]
*/


//case1
var angka = [1, 3, 2, 4, 6, 5, 8, 7, 11, 10, 20, 15, 0]

for (var i=0; i<angka.length; i++) {
   
    if (angka[i] > angka[i+1]) {
        var temp = angka[i]
        angka[i] = angka[i+1]
        angka[i+1] = temp
        
    }
}
console.log(angka)

//case2 function
// var angka = [1, 30, 6, 13, 8, 20]
var angka = [1, 3, 2, 4, 6, 5, 8, 7, 11, 10, 20, 15, 0]
angka.sort(function(a, b) {return a > b})
console.log(angka)
  

