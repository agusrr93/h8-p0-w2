//soal ke 1
var i=0
var bl=20;
var j=20;
var bl2=0;
console.log('LOOPING PERTAMA')
while(i<=bl-2)
{
  i=i+2;
  console.log(i+' - I love coding')
}

console.log('LOOPING KEDUA')
while(j>=bl2+2)
{
  console.log(j+' - I will become fullstack developer')
  j=j-2;
}

console.log('\n')
//soal ke 2
console.log('LOOPING PERTAMA')
for(var i=0;i<20;i++)
{
  console.log(i+1+' - I love coding')
}
console.log('LOOPING KEDUA')
for(var i=21;i>1;i--)
{
  console.log(i-1+' - I will become fullstack developer')
}

//soal ke 3
console.log('\n')
//ganjil genap
console.log('LOOPING GANJIL GENAP')
for(var i=1;i<=100;i++)
{
  if(i%2==0)
  {
      console.log(i+'-GENAP')
  }
  else
  {
       console.log(i+'-GANJIL')
  }
}

//perubahan counter 2
console.log('\n')
console.log('LOOPING PENAMBAHAN DUA')
for(var i=1;i<=100;i=i+2)
{
  if(i%3==0)
  {
      console.log(i+'-KELIPATAN 3')
  }
}

//perubahan counter 5
console.log('\n')
console.log('LOOPING PENAMBAHAN LIMA')
for(var i=1;i<=100;i=i+5)
{
  if(i%6==0)
  {
      console.log(i+'-KELIPATAN 6')
  }
}

//perubahan counter 9
console.log('\n')
console.log('LOOPING PENAMBAHAN SEMBILAN')
for(var i=1;i<=100;i=i+9)
{
  if(i%10==0)
  {
      console.log(i+'-KELIPATAN 10')
  }
}
