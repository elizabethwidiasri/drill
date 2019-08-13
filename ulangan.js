// 1.  Mengakses Nilai Dalam Array

function balikString(string) {
    var balik = '';
    for (var i = string.length-1; i>=0; i--) {
    balik = balik + string[i];
    }
    return balik;
}
// console.log(balikString('abc'));

// 2. Melakukan Looping Data Array

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

function dataHandling(input) {
    for (var i=0; i<input.length; i++) {
        /*
        console.log('Nomor ID: ' + input[i][0]);
        console.log('Nama Lengkap: ' + input[i][1]);
        console.log('TTL: ' + input[i][2] + input[i][3]);
        console.log('Hobi: ' + input[i][4]  + '\n')
        */
    }
}
dataHandling(input)

// 3. Menggunakan Built-in Function pada Array
//expected output ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2 (input) {

    input.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
    input.splice(4, 1, 'Pria', 'SMA Internasional Metro')

    return input;
}
// console.log(dataHandling2(input));

var bulan = input[3].split('/')

/*
switch (bulan[1]) {
    case '01':
        console.log('Januari')
        break; 
    case '02' :
        console.log('Februari')
        break;
    case '03' :
        console.log('Maret')
        break;
    case '04' :
        console.log('April')
        break;     
    case '05' :
        console.log('Mei')
        break;
    case '06' :
        console.log('Juni')
        break;
    case '07' :
        console.log('Juli')
        break;
    case '08' :
        console.log('Agustus')
        break;
    case '09' :
        console.log('September')
        break;
    case '10' :
        console.log('Oktober')
        break;
    case '11' :
        console.log('November')
        break;
    case '12' :
        console.log('Desember')
        break;  
         
}
*/
bulan.sort(function (a,b) {return Number(a) > Number(b)})
// console.log(bulan) //ascending
bulan.sort(function(a,b) {return Number(a) < Number(b)})
// console.log(bulan) //descending


var bulan = input[3].split('/')
// console.log(bulan.join('-'))

// console.log(input[1].slice(0, 15))

// 4. Logic Challenge - Palindrome

function palindrome(kata) {
    var balik = '';
    for (var i = kata.length-1; i>=0; i--) {
        balik += kata[i]
    }
    // console.log(balik)
    if (balik == kata) {
        return true
    }
        return false
}
/*console.log(palindrome('katak'))
console.log(palindrome('blanket'))
console.log(palindrome('civic'))
console.log(palindrome('kasur rusak'))
console.log(palindrome('mister'))*/

// 5. Logic Challenge - Number Palindrome
function pali(num) {
    while (true) {
        num++
        var balik = ''
        var number = String(num)
        for (var i = number.length-1; i >= 0; i--) {
            balik += number[i]
        if (balik == num) {
            return num
            }
        }

    }
}
/*console.log(pali(8)); // 9
console.log(pali(10)); // 11
console.log(pali(117)); // 121
console.log(pali(175)); // 181
console.log(pali(1000)); // 1001*/

// 6. Logic Challenge - Menghitung Jumlah Kata

function hitungJumlahKata(kalimat) {
    var kalimatSplit = kalimat.split(' ')
    return kalimatSplit.length
}
/*console.log(hitungJumlahKata('I am me'))
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
*/

//=======tipe lain========//

/*function hitungJumlahKata(kalimat) {

    if (kalimat[0] == ' ') {
        var kata = 0;
    } else {
        var kata = 1;
    }

    for (var i = 0; i < kalimat.length; i++) {
        if (kalimat[i] != ' ' && kalimat[i - 1] != ' ') {
            kata++;
        }

    }
    return kata;
}*/

// 7. Logic Challenge - Pasangan Angka Terbesar

function pasanganTerbesar(num){
    var numstr = String(num);
    var pasangan;
    var pasanganBaru = 0;
    for (var i = 0; i < numstr.length; i++) {
        pasangan = Number(numstr[i] + numstr[i+1]);
        if (pasangan > pasanganBaru)
        pasanganBaru = pasangan;
    }
    return pasanganBaru;
}
/*
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
*/

// 8. Logic Challenge - Mencari Mean

function cariMean(arr) {
    var add = 0
    for(var i=0; i<arr.length; i++){
        add += arr[i]
    }
    var length = arr.length
    var mean = add/length
    var round = Math.round(mean)
    return round
}
/*console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7
*/

// 9. Logic Challenge - Perkalian Unik

function perkalianUnik (arr) {
    var kali = 1
    for (var i=0; i<arr.length; i++) {
        kali = kali * arr[i]
    } 
    var unik = []
    for (var i=0; i<arr.length; i++) {
        var bagi = kali/arr[i]
        unik.push(bagi)
    }

    return unik
}
/*
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
*/

// 10. Logic Challenge - Tentukan Deret Aritmatika

function tentukanDeretAritmatika(arr) {
    var selisihAwal = arr[1] - arr[0]

    for (var i = 2; i < arr.length; i++) {
        var selisihLain = arr[i] - arr[i - 1]
        if (selisihLain !== selisihAwal) {
            return false
        }
    }
    return true
}
/*
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
console.log(tentukanDeretAritmatika([2, 4, 8, 9, 10, 11, 12, 13, 14, 15, 16, 32])); //false
*/

// 11. Logic Challenge - Tentukan Deret Geometri

function tentukanDeretGeometri(arr) {
    var deltaAwal = arr[1] / arr[0];

    for (var i = 2; i < arr.length; i++) {
        var deltaLain = arr[i] / arr[i - 1];
        if (deltaLain !== deltaAwal) {
            return false
        }
    }
    return true
}
  
  // TEST CASES
  /*
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
  */

// 12. Logic Challenge - Target Terdekat

function targetTerdekat(arr) {
    var posisiO = arr.indexOf('o');
    var jarak = 1
    
    //ke kanan
    
    for (var i=posisiO; i<arr.length; i++) {
        if (arr[i] == ' ') {
            jarak++
        } else if (arr[i] == 'x') {
            return jarak
        }
    } 
    jarak = 1

    //ke kiri
   
    for (var j=posisiO; j>0; j-- ){
        if(arr[j] == ' ') {
            jarak++
        } else if (arr[j] == 'x') {
            return jarak
        }
    }
    jarak = 1
return 0
}

// TEST CASES
  /*
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  */
  
// 13. Logic Challenge - Mengelompokkan Angka

function mengelompokkanAngka(arr) {
    var hasil = [[], [], []]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            hasil[2].push(arr[i])
        } else if (arr[i] % 2 === 0) {
            hasil[0].push(arr[i])
        } else {
            hasil[1].push(arr[i])
        }
    }
    return hasil
}
  
  // TEST CASES
  /*
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]
  */

// 14. Logic Challenge - Mengelompokkan Hewan

function groupAnimals(animals) {
    // you can only write your code here!
    var leadChar = ''
    var result = []
    for (var i = 0; i < animals.length; i++) {
        var leadChar = animals[i][0]
        for (var j = 0; j <= result.length; j++) {
            if (result[j] === undefined) {
                result[j] = []
                result[j].push(animals[i])
                break
            } else if (result[j][0][0] === leadChar) {
                result[j].push(animals[i])
                break
            }
        }
    }
    // for (i = 0; i < result.length; i++) {
    //     result[i].sort()
    // }
    result.sort()
	return result
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]


  function kebunBinatang(hewan) {
      var hurufDepan = ''
      var array = []
      for (var i=0; i<hewan.length; i++) {
          hurufDepan = hewan[i][0]
          for (var j=0; j<=array.length; j++) {
              if(array[j] === undefined) {
                  array[j] = []
                  array[j].push(hewan[i][0])
                  break
              } else if (array[j][0][0] === hurufDepan) {
                  array[j].push(hewan[i])
                  break
              }
          }
      }
      array.sort()
      return array
  }
  

  function kebunBinatang(hewan) {
      var hurufDepan = ''
      var array = []
      for (var i=0; i<hewan.length; i++) {
          hurufDepan = hewan[i][0]
          for (var j=0; j<=array.length; j++) {
              if(array[j] === undefined) {
                  array[j] = []
                  array[j].push(hewan[i][0])
                  break
              } else if(array[j][0][0] === hurufDepan) {
                  array[j].push(hewan[i])
                  break
              }
          }
      }
      array.sort()
      return array
  }

  function kebunBinatang (hewan) {
      var hurufDepan = ''
      var array = []
      for (var i=0; i<hewan.length; i++) {
          hurufDepan = hewan[i][0]
          for (var j=0; j<=array.length; j++) {
              if (array[j] === undefined) {
                  array[j] = []
                  array[j].push(hewan[i][0])
                  break                   
              } else if (array[j][0][0] === hurufDepan) {
                  array[j].push(hewan[i])
                  break
              }
          }
      }
      array.sort()
      return array
  }

  function kebunBinatang(hewan) {
    var hurufDepan = ''
    var array = []
    for (var i = 0; i < hewan.length; i++) {
        hurufDepan = hewan[i][0]
        for (var j = 0; j <= array.length; j++) {
            if (array[j] === undefined) {
                array[j] = []
                array[j].push(hewan[i][0])]
                break
            } else if (array[j][0][0] = hurufDepan) {
                array[j].push(hewan[i])
                break
            }
        }
    }
    array.sort()
    return array
}
      
  