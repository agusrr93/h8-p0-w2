//soal 1
function shoutOut()
{
  console.log('Halo Function!')
}
shoutOut()

//soal 2
function calculateMultiply(num1,num2)
{
   var hasil=num1*num2

   return hasil
}

var num1=5
var num2=6

var hasilPerkalian=calculateMultiply(num1,num2)

console.log(hasilPerkalian)

//soal 3

function processSentence(name,age,address,hobby)
{
   console.log('Nama saya '+name+', umur saya '+age+' tahun, alamat saya di '+address+', dan saya punya hobby yaitu '+hobby)
}

var name='agus'
var age='30'
var address='Jln. Malioboro , Yogyakarta'
var hobby='Gaming'
var fullSentence=processSentence(name,age,address,hobby)