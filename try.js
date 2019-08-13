var height = 3;
var display = '';

console.log('\n1');
for (var i=0; i<height; i++) {
    console.log('*');
}

console.log('\n2');
for (var i=0; i<height; i++) {
    display = ''
    for (var j=0; j<=3; j++) {
        display = display + '*'
    }
    console.log(display)
}

console.log('\n3');
for (var i=0; i<height; i++) {
    display = ''
    for (var j=0; j<height; j++) {
        display = display + '*'
    }
    console.log(display)
}

console.log('\n4');
for (var i=0; i<height; i++) {
    display = ''
    for (var j=0; j<=i; j++) {
        display = display + '*'
    }
    console.log(display)
}

console.log('\n5');
for (var i=height; i>0; i--) {
    display = ''
    for (var j=0; j<i; j++ ) {
        display = display + '*'
    }
    console.log(display)
}

console.log('\n6')
for (var i=height; i>0; i--) {
    display = ''
    for (var j=1; j<=i; j++) {
        display = display + '*'
    }
    console.log(display)
}
for (var i=1; i<=height; i++) {
    display = ''
    for (var j=0; j<=i; j++) {
        display = display + '*'
    }
    console.log(display)
}

console.log('\n7')
for (var i=0; i<height; i++) {
    display = ''
    for (var j=0; j<=i; j++) {
        display = display + '*'
    }
    console.log(display)
}
for (var i=height-1; i>0; i--) {
    display = ''
    for (var j=1; j<=i; j++) {
        display = display + '*'
    }
    console.log(display)
}

console.log('\n8')
var l = 0;
for (var i=0; i<height; i++) {
    display = ' '
    for (var k=i; k<height; k++) {
        display = display + ' '
    }
    l = (i*2);
    for (var j=0; j<=l; j++) {
        display = display + '*'
    }
    console.log(display)
}

console.log('\n9')
for (var i=0; i<height; i++) {
    display = ''
    for (var j=0; j<i; j++) {
        display = display + ' '
    }
    for (var j=height; j>i; j--) {
        display = display + '*'
    }
    console.log(display)
}
for (var i=height-1; i>0;i--) {
    display = ''
    for (var j=1; j<i; j++) {
        display = display + ' '
    }
    for (var k=height; k>= i; k--) {
        display = display + '*'
    }
    console.log(display)
}

