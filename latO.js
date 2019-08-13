var eli = {
    firstName: 'Elizabeth',
    lastName: 'Widiasri',
    address: {
        jalan: 'sarijadi atas',
        kota: 'bandung',
        provinsi: 'jawa barat',
    },
    gender : 'female'
}
eli
console.log(eli.firstName)
console.log(eli['firstName'])

var kosong = {}
kosong.firstName = 'Elizabeth'
kosong['firstname'] = 'Elizabeth'
kosong['first name'] = 'Elizabeth'
var gender = 'jenis kelamin'
kosong[gender] = wanita
