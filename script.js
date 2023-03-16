//NO.1
function cetakFunction(a){
    return `Hallo Nama Saya` + a
}

console.log(cetakFunction(" Prima wira"))

//No.2

function myFunction(a,b){
    return a + b;
}

let angka1 = 20;
let angka2 = 7;

let output = myFunction(angka1, angka2)
console.log(output)

//No.3
let hallo = (a) => {
    console.log(a)
}
hallo('Hello')
//NO.4

let obj = {
     nama : "jhon",
     umur : 22,
     bahasa : "indonesia",
}
    console.log(obj.bahasa)

//No.5
let arrayDaftarPeserta = ["Jhon doe" , "Laki-laki", "baca buku", 1992]
let objDaftarPeserta ={
    nama : arrayDaftarPeserta[0],
    kelamin : arrayDaftarPeserta[1],
    hobi : arrayDaftarPeserta[2],
    tahun : arrayDaftarPeserta[3],
}
console.log(objDaftarPeserta)

//No.6

let buah = [{
    nama : 'Nanas',
    warna : 'kuning',
    adaBijinya : 'tidak',
    harga: 9000,
},
{
    nama : 'Jeruk',
    warna : 'Oranye',
    adaBijinya : 'ada',
    harga: 8000,
},
{
    nama : 'semangka',
    warna : 'hijau dan merah',
    adaBijinya : 'ada',
    harga: 10000,
},
{
    nama : 'Pisang',
    warna : 'kuning',
    adaBijinya : 'tidak',
    harga: 7000,
},
]
let berbiji = buah.filter((buah) => buah.adaBijinya === "tidak");

console.log(berbiji.sort())
