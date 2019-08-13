/* 
_______________________________________________________________________________________________________________________

Kompetensi: Berpikir secara terstruktur dalam menyelesaikan masalah (algoritma)
 Buatlah pseudocode untuk kasus berikut:
 Sebuah taman bermain akan memberikan tarif sesuai dengan tinggi dan umur anak
 dengan ketentuan sebagai berikut:
 - Umur 2-3 tahun: Rp 20.000. Jika tinggi anak umur 2-3 tahun melebih 70cm maka tarif akan bertambah 10.000
 - Umur 4-7 tahun: Rp 35.000. Jika tinggi anak umur 4-7 tahun melebih 120cm maka tarif akan bertambah 15.000
 - Umur 8-10 tahun: Rp 50.000. Jika tinggi anak umur 8-10 tahun melebih 150cm maka tarif akan bertambah 20.000
 Tampilkan tarif harga sesuai umur dan tinggi seorang anak 


// PSEUDOCODE

/* STORE 'umur' with any Number value
STORE 'tinggi' with any Number value
STORE 'tarif' with any Number value

IF 'umur' more than or equals 2 and less than or equals 3 THEN 
    SET 'tarif' 20.000
        IF 'tinggi' more than 70 DO
            CALCULATE 'tarif' PLUS 10.000
        ELSE DO
            CALCULATE 'tarif' PLUS 0

ELSE IF 'umur' more than or equals 4 and less than or equals 7 THEN
    SET 'tarif' 35.000
        IF 'tinggi' more than 120 DO
            CALCULATE 'tarif' PLUS 15.000
        ELSE DO
            CALCULATE 'tarif' PLUS 0

ELSE IF 'umur' more than or equals 8 and less than or equals 10 THEN
    SET 'tarif' 50.000
        IF 'tinggi' more than 150 DO
            CALCULATE 'tarif' PLUS 20.000
        ELSE DO
            CALCULATE 'tarif' PLUS 0
END IF

DISPLAY 'umur' PLUS 'tahun dengan tinggi badan' PLUS 'tinggi' terkena tarif PLUS 'tarif' PLUS rupiah

// JAVASCRIPT

var umur = 0;
var tinggi = 0;
var tarif = 0;

if (umur >= 2 && umur <= 3) {
    tarif = 20.000
    console.log('tarif Rp' + tarif);
        if (tinggi > 70) {
            console.log('tarif Rp' + tarif + 10.000)
        }
    }

if (umur >= 4 && umur <= 7) {
    tarif = 35.000
    console.log('tarif Rp' + tarif);
        if (tinggi > 70) {
            console.log('tarif Rp' + tarif + 15.000)
        }
    }

 if (umur >= 8 && umur <= 10) {
    tarif = 50.000
    console.log('tarif Rp' + tarif);
        if (tinggi > 70) {
            console.log('tarif Rp' + tarif + 20.000)
        }
    }
_______________________________________________________________________________________________________________________
*/









/*
_______________________________________________________________________________________________________________________
Kompetensi: Loopings
 Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
 Disediakan variable height dan akan membuat sebuah pola tangga menampilkan x ke samping di baris ganjil,
 dan o di baris genap.
 Buatlah sebuah tangga string dengan pola berikut:
 Contoh 1 (height = 3)
 ---------------------
 tampilan:
 x
 oo
 xxx
 Contoh 2 (height = 6)
 ----------------------
 tampilan:
 x
 oo
 xxx
 oooo
 xxxxx
 oooooo
 WAJIB MENGGUNAKAN LOOPING
 

 var height = 6;
 var DISPLAY = '';

 for(var i=0; i <= height; i++) {
     DISPLAY = 0
     for (var j=0; j <= i; j++) {
         if (i % 2 === 0) {
             DISPLAY = DISPLAY + 'O'
         }
            DISPLAY = DISPLAY + 'x'
     }
 } console.log(DISPLAY);
_________________


var height;
var row;
var o = 0;
var x = 0;
var i;

if (row%2 === 0) {
    console.log('o';)
        while (var col < )
            o = o + 'o'
}
} else {

    x = x + 'x'
}

_________________

var height = 5
var 

while (var i=0; i<height; i++) {
    if (row)
}




/* var rows3=5;
var asterisks='';


for (i=0; i<rows3; i++) {
    for(var l=0; l<rows3; l+=rows3) {
        asterisks = asterisks + '*'
    }
    console.log(asterisks);  
_______________________________________________________________________________________________________________________   
*/












/*_______________________________________________________________________________________________________________________

[INSTRUCTION]
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable height.
Buatlah sebuah tangga angka dengan pola berikut:
contoh 1 (height = 3):
321
21
1
contoh 2 (height = 5):
54321
4321
321
21
1
contoh 3 (height = 1):
1
tinggi tangga sesuai dengan nilai variable height, dan isi dari tangga adalah angka dari height itu sendiri.
Wajib menggunakan looping!
____________________________________________

var height = 5;
var display = '';

for(var i=height; i>=0; i--) {
    display = ''

    for (var j=height; j>0; j--) {
        display = display + j
    }
    console.log(display);
 
    height = height - 1
}

_______________________________________________________________________________________________________________________
*/











/*
_______________________________________________________________________________________________________________________
Light no. 1 is on
Light no. 2 is on
Light no. 3 is on
Light no. 4 is on
Light no. 5 is on
Light no. 6 is on
Light no. 7 is off
Light no. 8 is off
Light no. 9 is off
Light no. 10 is off
_____________________________________________
var light = 10;
for (var i= 1; i<= light; i++) {
    if (i >= 1 && i <= 6) {
        console.log('light no. ' + i + ' is on');
    } else {
        console.log('light no. ' + i + ' is off');
    }
}
_____________________________________________

var light = 10;
for (var i = 0; i <= light; i++) {
    if (i >=1 && i <= 6) {
        console.log('light no. ' + i + ' is on');
    } else if (i === 8 || i === 10) {
        console.log('light is under maintenance');
    } else {
        console.log('light no. ' + i + ' is off);
    }
}
____________________________________________ 

var light = 10;

for (var i=1; i <= light; i++) {
    if (i >= 1 && i <= 6 && i !== 5) {
        console.log('light no. ' + i + ' is on');
    } else if (i === 8 || i === 10 || i === 5) {
        console.log('light no. ' + i + ' is under maintenance');
    } else {
        console.log('light no. ' + i + ' is off');
    }
}
_______________________________________________________________________________________________________________________
*/











/*
_______________________________________________________________________________________________________________________
output

var angka = parseInt(prompt('masukkan angka : '));

if(angka === 1) {
    console.log('anda memasukkan angka1');
} else if (angka === 2) {
    console.log('anda memasukkan angka 2');
} else if (angka === 3) {
    console.log('anda memasukkan angka 3');
} else {
    console.log('angka yang anda masukkan salah!');
}

SWITCH

var angka = parseInt(prompt('masukkan angka : '));

switch (angka) {
    case 1 :
        console.log('anda memasukkan angka 1');
        break;  
    case 2 :
        console.log('anda memasukkan angka 2');
        break;
    case 3 :
        console.log('anda memasukkan angka 3');
        break;
    default :
        console.log('angka yang anda masukkan salah');
        break;
}
_______________________________________________________________________________________________________________________
*/












/*
_______________________________________________________________________________________________________________________
RUN THROUGH EXERCISE
_____________________________________
// Output untuk Input nama = '' dan peran = ''
"Nama harus diisi!"

//Output untuk Input nama = 'Mikael' dan peran = ''
"Halo Mikael, Pilih peranmu untuk memulai game!"

//Output untuk Input nama = 'Nina' dan peran 'Ksatria'
"Selamat datang di Dunia Proxytia, Nina"
"Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"

//Output untuk Input nama = 'Danu' dan peran 'Tabib'
"Selamat datang di Dunia Proxytia, Danu"
"Halo Tabib Danu, kamu akan membantu temanmu yang terluka."

//Output untuk Input nama = 'Zero' dan peran 'Penyihir'
"Selamat datang di Dunia Proxytia, Zero"
"Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!"
_____________________________________


var nama = 'Marcell';
var peran = '';

if (nama == '' && peran == '') {
    console.log('Nama harus diisi!');
} else if (nama == 'Marcell' && peran == "") {
    console.log('Halo Marcell, Pilih peranmu untuk memulai game!');
} else if (nama == 'Marcell' && peran == "Tabib") {
    console.log('Selamat datang di Dunia Proxytia, Marcell \n Halo Ksatria Marcell, kamu dapat menyerang dengan senjatamu!');
} else if (nama == 'Marcell' && peran == "Ksatria") {
    console.log('Selamat datang di Dunia Proxytia, Marcell \n Halo Tabib Marcell, kamu akan membantu temanmu yang terluka.');
} else if (nama == 'Marcell' && peran == "Penyihir") {
    console.log('Selamat datang di Dunia Proxytia, Marcell \n Halo Penyihir Marcell, ciptakan keajaiban yang membantu kemenanganmu!');
}
_______________________________________________________________________________________________________________________
*/












/*
_______________________________________________________________________________________________________________________



var tanggal = 1;
var bulan = 1;
var tahun = 1994;

if (tanggal < 1 || tanggal > 31) {
    console.log('input tanggal antara 1 hingga 31');
} else if (bulan < 1 || bulan > 12) {
    console.log('input bulan antara 1 hingga 12');
} else if (tahun < 1900 || tahun > 2200) {
    console.log('input tahun antara 1900 hingga 2200');
} else {

switch (bulan) {
    case 1 :
        console.log(tanggal + ' Januari ' + tahun);
        break;
    case 2 :
        console.log(tanggal + ' Februari ' + tahun);
        break;
    case 3 :
        console.log(tanggal + 'Maret' + tahun);
        break;
    case 4 :
        console.log(tanggal + 'April' + tahun);
        break;
    case 5 :
        console.log(tanggal + 'Mei' + tahun);
        break;
    case 6 :
        console.log(tanggal + 'Juni' + tahun);
        break;
    case 7 :
        console.log(tanggal + 'Juli' + tahun);
        break;
    case 8 :
        console.log(tanggal + 'Agustus' + tahun);
        break;
    case 9 :
        console.log(tanggal + 'September' + tahun);
        break;
    case 10 :
        console.log(tanggal + 'Oktober' + tahun);
        break;
    case 11 :
        console.log(tanggal + 'November' + tahun);
        break;
    case 12 :
        console.log(tanggal + 'Desember' + tahun);
        break;    

}
}
_______________________________________________________________________________________________________________________
*/















/*
_______________________________________________________________________________________________________________________
*
*
*
*
*
var row=5;


for (var i=0; i <= row; i++) {
    console.log('*');
}
_______________________________________________________________________________________________________________________



















_______________________________________________________________________________________________________________________

*****
*****
*****
*****
*****

var row=5;
var display = '';

for (var i=0; i < row; i++) {
    display = ''
    for (var j=0; j<5; j++) {
        display = display + '*'
       
    }
    console.log(display);
    
}
_______________________________________________________________________________________________________________________




















_______________________________________________________________________________________________________________________
*
**
***
****
*****

var row = 5;
var display= '';

for (var i=0; i < row; i++) {
    display = ''
    for (var j=0; j<=i; j++) {
        display = display + '*'
    } console.log(display)
}
___________


var row = 5;
var display = '';

for (var i = row; i > 0; i--) {
    display = ''
    for (var j = i; j > 0; j-- ) {
        display = display + '*'
    }
    console.log(display);
} 
_______________________________________________________________________________________________________________________



















_______________________________________________________________________________________________________________________
*****
****
***
**
*

var row = 5;
var display = '';

for (var i = row; i > 0; i--) {
    display = ''
    for (var j = 0; j<i; j++ ) {
        display = display + '*'
    }
    console.log(display);
}

_______________________________________________________________________________________________________________________



















_______________________________________________________________________________________________________________________

*****
****
***
**
*
**
***
****
*****

var row = 5;

for (var i=row; i > 0; i--) {
    display = ''
    for (var j=0; j<i; j++) {
        display = display + '*'
    }
    console.log(display);
}
for (var i=2; i <= row; i++) {
    display = ''
    for (var j=0; j<i; j++) {
        display = display + '*'
    }
    console.log(display);
}



var row = 5;
var display= '';

for (var i=1; i <= row; i++) {
    display = ''
    for (var j=0; j<i; j++) {

        if(i%2 === 0) {
            display = display + 'o'
        } else {
            display = display + 'x'
        }

    } console.log(display)
}
_______________________________________________________________________________________________________________________




















_______________________________________________________________________________________________________________________
// - minimal 8 character
// - harus ada Uppercase
// - harus ada lowercase
// - harus ada angka
​
function validatePassword(password) {
  var longerOrEqualTo8 = password.length >= 8
  var hasUpperCase = false
  var hasLowerCase = false
  var hasNumber = false
  
  for (var i = 0; i < password.length; i++) {
    if (password[i].toUpperCase() === password[i]) {
      hasUpperCase = true;
    } else if (password[i].toLowerCase() === password[i]) {
      hasLowerCase = true;
    }
​
    if (Number(password[i]) || password[i] === '0') {
      hasNumber = true;
    }
  }
​
  return (longerOrEqualTo8 && hasUpperCase && hasLowerCase && hasNumber);
}
​
​
​
console.log(validatePassword('aaaaaaaaaaaaaa'));
console.log(validatePassword('asds'));
console.log(validatePassword('asdsasdasd'));
console.log(validatePassword('asdsaABasd'));
console.log(validatePassword('as12ABasd'));
console.log(validatePassword('as0ABasd'));

_______________________________________________________________________________________________________________________
*/