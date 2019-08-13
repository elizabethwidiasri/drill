   /*
   ==================
   Range Prime Number
   ==================
   [INSTRUCTION]
   jika ditanya berapa angka prima yg pertama maka jawabannya adalah 2.
   yang mana prime[0] = 2;
   maka :
   [EXAMPLE]
   jika 10 angka prime pertama : [2,3,5,7,11,13,17,19, 23, 29]
   jika angka prime index ke-4 sampai index ke-11 maka : [11,13,17,19,23,29,31]
   diberikan 2 parameter "start","finish"
   "start" yaitu index angka prime yang ditentukan.
   "finish" yaitu batas index angka prime
   hasil akhirnya adalah deret angka prime yg telah ditentukan batasnya dalam bentuk array
   */

   /*
function primeNumbers(start, finish) {

    var number = 0
    var arrPrime = []


    for (var i = 0; arrPrime.length<=finish; i++) {
        number = i

        
        var count = 0

        for (j=0; j<=number; j++) {
            if(number%j === 0) {
                count = count + 1
            }
                count = count
        }
        if (count === 2) {
            arrPrime.push(number)
            
        }
        
    }
    // console.log(arrPrime)

   


return arrPrime.slice(start-1)
}
console.log(primeNumbers(6, 20))


*/


/*
===================================
Array Mastery: Circular Operation
===================================
Nama:SEPTIAN MAULANA
[INSTRUKSI]
Akan dijalankan sebuah operasi matematika dengan urutan kali (+) dan kurang (-).
Function circularOperation akan menerima satu parameter berupa array angka, dan memproses satu per satu angka tersebut.
Proses yang dilakukan adalah mengoperasikan setiap bilangan didalamnya, menggunakan simbol +, dan - berturut-turut.
Simbol akan berotasi kembali ke + jika operasi - sudah dilakukan, sampai semua angka selesai di proses.
Gambaran Proses:
0 + angka pertama - angka kedua + angka ketiga - angka keempat + angka kelima - angka keenam + ... (dan seterusnya)
Function akan mereturn hasil kalkulasi dari operasi tersebut.
Jika tidak ada angka yang diberikan, function akan me-return 0.
Aturan: proses operasi satu per satu, dan TIDAK ADA aturan matematika yang harus memproses * sebelum + / !
[CONTOH]
input: [1, 2, 3, 4, 5]
proses: 0 + 1 - 2 + 3 - 4 + 5
output: 3
input: [5, 4, 3, 2, 1, 2]
proses: 0 + 5 - 4 + 3 - 2 + 1 - 2
output: 1
input: [1, 1, 1, 1]
proses: 0 + 1 - 1 + 1 - 1
output: 0
input: []
proses: 0
output: 0
*/

/*
function circularOperation(num) {

    
    var deret = 0

    for (var i = 0; i<num.length; i++) 
    
        if(i%2 === 0) {
            deret += num[i]
        } else {
            deret -= num[i]
        }
        return deret
    }

console.log(circularOperation([1, 2, 3, 4, 5]))
console.log(circularOperation([5, 4, 3, 2, 1, 2]))
console.log(circularOperation([1, 1, 1, 1]))
*/

