let cars = ["Volvo", "Toyota", "Audi"]; // niz od 3 elementa

console.log(cars);
console.log(cars[0]); // pristupanje prvom elementu niza, elementu sa indeksom 0
console.log(cars[1]); // pristupanje drugom elementu niza elementom sa indeksa 1
console.log(cars[2]); // pristupanje trecem elementu niza elementom sa indeksa 2

console.log(cars[4]);

// Ako niz a ima n elemenata, to su elemnti a[0], a[1], a[2]..... a[n - 1]

// cars[2] = "Opel"
cars[2] = true;
cars[3] = "Mercedes";
console.log(cars);

let cars1 = ["Mercedes", "BMW", "Zastava", "Citroen"];
for(let i = 0; i < cars1.length; i++){
    console.log(cars1[i]);
}

// Drugacije zapisano
for(let i = 0; i < cars1.length - 1; i++){
    console.log(cars1[i]);
}

// ZADATAK 2
//Odrediti zbir elemenata celobrojnog niza
let niz = [1, -4, 9, 6, -20, 15, -1];
// let suma = 0;
// for(let i = 0; i < niz.length; i++){
//     suma += niz[i];
// }

// console.log(suma);

let suma = myarray => {
    let sum = 0;
    for(let i = 0; i < myarray.length; i++){
        sum += myarray[i];
    }
    return sum;
}

console.log(suma(niz));



// ZADATAK 3
// Odrediti proizvod elemenata celobrojnog niza
let niz1 = [1, -4, -3];
// let proizvod = 1;
// for(let i = 0; i < niz.length; i++){
//     proizvod *= niz[i];
// }

// console.log(proizvod);

let proizvod = nekiarray => {
    let pr = 1;
    for(let i = 0; i < nekiarray.length; i++){
        pr *= niz[i];
    }
    return pr;
}

console.log(proizvod(niz1));

// ZADATAK 4
// Odrediti srednju vrednost elementa celobrojnog niza

let avg = myarr => {
    let s = suma(myarr);
    let arsr = s / myarr.length;
    return arsr;
}

console.log(`Aritmeticka sredina je: ${avg(niz)}`);


// let niz2 = [1, -4, 9, 3, -20, 15, -1];
// let srednja = srednjiarray => {
//     let s = 0;
//     let b = 0;
//     for(let i = 0; i < srednjiarray.length; i++){
//         s += i;
//         b++;
//     }
//     let arsr = s / b;
//     return arsr;
// }

// let arsrRez = srednja(niz2)
// console.log(arsrRez);


// ZADATAK 5
// Odrediti maksimalnu vrednost u celobrojnom nizu

let max = (myarr) => {
    let maks = myarr[0];
    for(let i = 0; i <= myarr.length; i++){
        if(maks < myarr[i]){
            maks = myarr[i];
        }
    }
    return maks;
}

console.log(`Najveci element niza je: ${max(niz)}`);

// ZADATAK 6
// Odrediti minimalnu vrednost u celobrojnom nizu

let min = (myarr) => {
    let mini = myarr[0];
    for(let i = 0; i <= myarr.length; i++){
        if(mini > myarr[i]){
            mini = myarr[i];
        }
    }
    return mini;
}

console.log(`Najmanji element niza je: ${min(niz)}`);


// ZADATAK 7 
// Odrediti indeks maksimalnog elementa celobrojnog niza
// let niz2 = [1, -4, -10, 3, 30, 15, -1];

let index = (index) => {
    maxI = index[0];
    maxIndeks = 0;
    for(let i = 0; i < index.length; i++){
        if(maxIndeks < index[i]){
            maxIndeks = i;
            maxI = index[i];
        }
    }
    return maxIndeks;
}

console.log(`Max indeks u nizu je: ${index(niz)}`);

// Drugi nacin
let maxInd2 = myarr => {
    let maks = max(myarr);
    let maksInd = 0;
    for(let i = 0; i < myarr.length; i++){
        if(myarr[i] == maks){
            maksInd = i;
            return maksInd;
        }
    }
}

console.log(`Max indeks u nizu je: ${maxInd2(niz)}`);


// ZADATAK 8
let indexMin = (index) => {
    minI = index[0];
    minIndeks = 0;
    for(let i = 0; i < index.length; i++){
        if(minIndeks > index[i]){
            minIndeks = i;
            minI = index[i];
        }
    }
    return minIndeks;
}

console.log(`Min indeks u nizu je: ${indexMin(niz)}`);

// ZADATAK 9

// 1. nacin
let br = 0;
let sumaNiza = 0;
for(let i = 0; i < niz.length; i++){
    sumaNiza += niz[i];
}

let avgNiza = sumaNiza / niz.length;

for(let i = 0; i < niz.length; i++){
    if(niz[i] > avgNiza){
        br++;
    }
}

console.log(br);

// 2. nacin
let brElemVeciOdArSr = arr => {
    let arsr = avg(arr);
    let br = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arsr){
            br++;
        }
    }
    return br;
}

console.log(`Broj elemenata veci od aritmeticke sredine: ${brElemVeciOdArSr(niz)}.`);

// Suma elemenata vecih od aritmeticke
let sumaElemVeciOdArSr = arr => {
    let arsr = avg(arr);
    let s = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arsr){
            s += arr[i];
        }
    }
    return s;
}

console.log(`Suma elemenata veci od aritmeticke sredine: ${sumaElemVeciOdArSr(niz)}.`);

// ZADATAK 12

// if(arr[i] % 2 == 0 && i % 2 != 0)

let parni = myarr => {
    let br = 0;
    for(let i = 0; i < myarr.length; i++){
        if(myarr[i] % 2 == 0 && i % 2 != 0){
            br++;
        }
    }
    return br;
}

console.log(parni(niz));

// ZADATAK 13

let sumaParni = myarr => {
    let suma = 0;
    for(let i = 0; i < myarr.length; i++){
        if(myarr[i] % 2 == 0){
            suma += myarr[i];
        }
    }
    return suma;
}

console.log(sumaParni(niz));

// ZADATAK 14 

let promeniZnak = myarr => {
    for(let i = 0; i < myarr.length; i++){
        myarr[i] = myarr[i] * (-1);
    }
    console.log(myarr);
}

promeniZnak(niz);

// ZADATAK 15

let promeniZnak1 = myarr => {
    for(let i = 0; i < myarr.length; i++){
        if(myarr[i] % 2 != 0 && i % 2 == 0){
            myarr[i] = myarr[i] * (-1);
        }
    }
    console.log(myarr);
}
promeniZnak1(niz);

// ZADATAK 16

let nizStr = ["Jabuke", "Breskve", "Sljive", "Limun", "Banane"];

let myList = document.getElementById('lista');

// Napred
for(let i = 0; i < nizStr.length; i++){
    myList.innerHTML += `<li> ${nizStr[i]} </li>`;
}


// Nazad
for(let i = nizStr.length-1; i >= 0; i--){
    myList.innerHTML += `<li> ${nizStr[i]} </li>`;
}

// ZADATAK 17

let nizImena = ["Bogdan", "Nemanja", "Stefan", "Boban", "Milos"];

let tabelaImena = document.getElementById('imena');

for(let i = 0; i < nizImena.length-4; i++){
    tabelaImena.innerHTML += `<td> ${nizImena} </td>`;
}


// ZADATAK 18

let nizPutanje = ["sea.jpg", "sunset.jpg", "sunrise.jpg"];

let putanja = document.getElementById('putanja');

for(let i = 0; i < nizPutanje.length; i++){
    putanja.innerHTML += `<img src="./images/${nizPutanje}">`;
}