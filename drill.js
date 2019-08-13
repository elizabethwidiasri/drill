/*
LOOPING PERTAMA
2 - I love coding
4 - I love coding
6 - I love coding
8 - I love coding
10 - I love coding
12 - I love coding
14 - I love coding
16 - I love coding
18 - I love coding
20 - I love coding
LOOPING KEDUA
20 - I will become fullstack developer
18 - I will become fullstack developer
16 - I will become fullstack developer
14 - I will become fullstack developer
12 - I will become fullstack developer
10 - I will become fullstack developer
8 - I will become fullstack developer
6 - I will become fullstack developer
4 - I will become fullstack developer
2 - I will become fullstack developer

FOR

var i = 0;

console.log('LOOPING PERTAMA');

for(i=2; i<=20; i+=2) {
    console.log(i + ' - I love coding');
}

console.log('LOOPING KEDUA');

for (i=20; i>=2; i-=2){
    console.log(i + ' - I will become fullstack developer');
}


WHILE

console.log('LOOPING PERTAMA');
var i = 2
while (i<=20) {
    console.log(i + ' - I love coding');
    i+=2;
}
console.log('LOOPING KEDUA');
var i = 20
while (i>=2) {
    console.log(i + ' - I will become fullstack developer')
    i-=2;
}

FOR ++

var i = 0;

console.log('LOOPING PERTAMA');

for (i=0; i<=20; i++) {
    console.log(i + ' - I love coding');
} 

console.log('LOOPING KEDUA');

for (i=20; i>0; i--) {
    console.log(i + ' - I will become fullstack developer');
}

var i = 0
for (i=0 ; i<=10; i++) {
    if (i%2 === 0) {
        console.log('GENAP');
    } else {
        console.log('GANJIL');
    }
}


var i = 0;
while (i<=10) {
    if(i%2 === 0) {
        console.log('GENAP');
    } else {
        console.log('GANJIL');
    }
    i++;
}

COUNTER ADD KELIPATAN
var i = 1;
for (i>0 ; i<=10; i+=2) {
    if (i%3 === 0) {
        console.log(i + ' kelipatan 3');
    } 
}

var i = 1;
for (i<0; i<=10; i+=5) {
    if (i%6 === 0) {
        console.log(i + ' kelipatan 6');
    }
}

var i = 1;
for (i<0; i<=10; i+=9) {
    if (i%10 === 0) {
        console.log(i + ' kelipatan 10');
    }
}


BILANGAN PRIMA BUKAN MISTERI
var bilangan = 2
var count = 0

for (var i=0; i<=bilangan; i++) {
    if (bilangan % i === 0) {
        count = count + 1
    } else {
        count = count
    }
}

if (count === 2) {
    console.log(bilangan + ' adalah bilangan prima');
} else {
    console.log(bilangan + ' bukan bilangan prima');
}
*/

/*
console.log('ASTERISKS')


var height = 5
for (var i=1; i<=height; i++) {
    console.log('*');
}


var height = 5;
var display = '';

for (var i=1; i<=height; i++) {
    display = ''
    for (var j=1; j<=5; j++) {
        display = display + '*'
    }
    console.log(display);
}


var height = 5;
var display = '';

for (var i=1; i<=height; i++) {
    display = ''
    for (var j=1; j<=i; j++) {
        display = display + '*'
    }
    console.log(display);
}
*/

// ASTERISK

var height = 5;
var display = '';

console.log('\n1');
for (var i=1; i<=height; i++) {
    console.log('*');
}

console.log('\n2');
for (var i=1; i<=height; i++) {
    display = ''
    for (var j=1; j<=3; j++) {
        display = display + '*'
    }
    console.log(display);
}

console.log('\n3');
for (var i=1; i<=height; i++) {
    display = ''
    for (var j=1; j<=height; j++) {
        display = display + '*'
    }
    console.log(display);
}

console.log('\n4');
for (var i=1; i<=height; i++) {
    display = ''
    for (var j=1; j<=i; j++) {
        display = display + '*'
    }
    console.log(display);
}

console.log('\n5');
for (var i=height; i>0; i--) {
    display = ''
    for (var j=1; j<=i; j++) {
        display = display + '*'
    }
    console.log(display);
}

console.log('\n6');
for (var i=height; i>0; i--) {
    display = ''
    for (var j=1; j<=i; j++) {
        display = display + '*'
    }
    console.log(display);
}
for (var i=2; i<=height; i++) {
    display = ''
    for (var j=1; j<=i; j++) {
        display = display + '*'
    }
    console.log(display);
}

console.log('\n7');
for (var i=1; i<=height; i++) {
    display = ''
    for (var j=1; j<=i; j++) {
        display = display + '*'
    }
    console.log(display);
}
for (var i=height-1; i>0; i--) {
    display = ''
    for (var j=1; j<=i; j++) {
        display = display + '*'
    }
    console.log(display)
}

console.log('\n8')
for(var i = 0; i<height ; i++){
    display = '';
    for(var j = 0; j<i ; j++){
        display = display + " ";
    } 
    for(var j = height; j>i ; j--){
    display = display + "*";
    } 
    console.log(display);
}
for(var i = height-1; i>0 ; i--){
    display = '';
    for(var j = 1; j<i ; j++){
        display = display + " ";
    } 
    for(var k = height; k>=i ; k--){
        display = display + "*";
    } 
    console.log(display);
}

console.log('\n9')
tamp = 0;
for (var i=height ; i>0 ; i--) {
    display = ' ';
    for (var j=1; j<i; j++) {
        display = display + '';
    }
    for (var k=height ; k>=i; k--) {
        display = display + '*';
    }
    console.log(display);
}
for (var i=0; i<height; i++) {
    display = ' ';
    for (var j=0; j<=i; j++) {
        display = display + '';
    }
    for (var j = height -1; j>i; j--) {
        display = display + '*';
    }
    console.log(display);
}



console.log('\n10')
var l = 0;
for (var i=0; i<height; i++) {
    display = ' '
    for (var k=i; k<height; k++) {
        display = display + ' ';
    }
    l = (i*2);
    for (var j=0; j<=l; j++) {
        display = display + '*';
    }
    console.log(display);
}


function calculateMultiply(num1, num2) {
    kalkulasi = num1*num2;
    return kalkulasi;
}

var num1 = 5;
var num2 = 2;

var hasilPerkalian = calculateMultiply(num1, num2);

console.log(hasilPerkalian)







function balikKata(kata) {
    var tulisan= '';
    
    for (var i=kata.length-1; i>=0; i--) {
        tulisan = tulisan + kata[i]
    }

    return tulisan
}