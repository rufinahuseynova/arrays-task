let eded = prompt("Massivin elementlerinin sayini daxil edin:");
let massiv = [];
let cem = 0;
for (let i = 0; i < eded; i++) {
  let randomlar = Math.floor(Math.random() * 100) + 1;
  massiv.push(randomlar);
  cem += randomlar;
}
console.log("Yaradilan massiv:", massiv);
//Ortalama tapma
let ortalama = cem / eded;
console.log("Massivin elementlerinin ortalamasi:", ortalama);
//--------------------------------------------------------------------------------------

// Maksimum elementi tapmaq
let maksimum = massiv[0]; 
for (let j = 1; j < massiv.length; j++) {
  if (massiv[j] > maksimum) {
    maksimum = massiv[j];
  }
}
console.log("Massivin maksimum elementi:", maksimum);

//--------------------------------------------------------------------------------------

// Minimum elementi tapmaq
let minimum = massiv[0]; 

for (let j = 1; j < massiv.length; j++) {
  if (massiv[j] < minimum) {
    minimum = massiv[j];
  }
}
console.log("Massivin minimum elementi:", minimum);

//---------------------------------------------------------------------------------------

// Ikinci maksimum elementi tapmaq

let ikinciMaksimum = massiv[0];

for (let j = 0; j < massiv.length; j++) {
  if (massiv[j] > maksimum) {
    ikinciMaksimum = maksimum;
    maksimum = massiv[j];
  } else if (massiv[j] > ikinciMaksimum && massiv[j] !== maksimum) {
    ikinciMaksimum = massiv[j];
  }
}
console.log("Massivin ikinci maksimum elementi:", ikinciMaksimum);

//----------------------------------------------------------------------------------------

//Sorting etmek coxdan aza

for (let j = 0; j < massiv.length; j++) {
  for (let k = 0; k < massiv.length - 1 - j; k++) {
    if (massiv[k] < massiv[k + 1]) {
      let a = massiv[k];
      massiv[k] = massiv[k + 1];
      massiv[k + 1] = a;
    }
  }
}
console.log("Massiv coxdan aza siralanib:", massiv);

//----------------------------------------------------------------------------------------

//Sorting etmek azdan coxa

for (let j = 0; j < massiv.length; j++) {
  for (let k = 0; k < massiv.length - 1 - j; k++) {
    if (massiv[k] > massiv[k + 1]) {
      let a = massiv[k];
      massiv[k] = massiv[k + 1];
      massiv[k + 1] = a;
    }
  }
}
console.log("Massiv azdan coxa siralanib:", massiv);

//-----------------------------------------------------------------------------------------

//Tek yerde duran indekslerdeki ededlerin cemi
let toplam = 0;
for (let j = 0; j < massiv.length; j++) {
  if (j % 2 === 1) {
    toplam += massiv[j];
  }
}
console.log("Tek indekslerde duran elementlerin cemi:", toplam);

//-------------------------------------------------------------------------------------------

// Cut yerlerde duran elementlerin hasili
let hasil = 1;
for (let j = 0; j < massiv.length; j++) {
  if (j % 2 === 0) {
    hasil *= massiv[j];
  }
}
console.log("Cut indekslerde duran elementlerin hasili:", hasil);

//-------------------------------------------------------------------------------------------

let eded1 = prompt("Birinci massivin elementlerinin sayini daxil edin:");
let eded2 = prompt("Ikinci massivin elementlerinin sayini daxil edin:");

let massiv1 = [];
let massiv2 = [];

for (let i = 0; i < eded1; i++) {
  let randomededler = Math.floor(Math.random() * 100) + 1;

  massiv1.push(randomededler);
}

for (let j = 0; j < eded2; j++) {
  let randomededler = Math.floor(Math.random() * 100) + 1;

  massiv2.push(randomededler);
}

console.log("Ilk massiv:", massiv1);
console.log("Ikinci massiv:", massiv2);

let massiv3 = [];
for (let k = 0; k < massiv1.length; k++) {
  if (k % 2 === 0) {
    massiv3.push(massiv1[k]);
  }
}

for (let l = 0; l < massiv2.length; l++) {
  if (l % 2 === 1) {
    massiv3.push(massiv2[l]);
  }
}
console.log("Üçüncü massiv:", massiv3);
