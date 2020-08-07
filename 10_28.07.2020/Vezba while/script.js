// ZADATAK 1

// let b = 1;
// while(b <= 20){
//     console.log(b);
//     b++;
// }

// // ZADATAK 2
// // Ispisati brojeve od 1 do 20, sve u jednom redu.

// let str = '', i = 1;
// while(i <= 20){
//     console.log(str);
//     str += i+', ';
//     i += 1;
//     // console.log(str);
// }
// console.log(`OVDE`);

// x = 1;
// y = 20;
// i = x;
// let rezultat = "";
// while(i <= y){
//     rezultat += i + " ";
//     i++;
// }
// console.log(rezultat);
// console.log(`OVDE`);

// // ZADAATAK 3
// // Ispis brojeva od 20 do 1
// g = 20;
// while(g >= 1){
//     console.log(g);
//     g--;
// }

// // ZADATAK 4

// n = 20;

// while(n >= 1){
//     console.log(n);
//     n -= 2;
// }

// // Ispisati parne brojeve od k do l (k < l)
// let k = 34;
// let l = 55;
// // i = n;
// while(k < l){
//     if(k % 2 == 0){
//         console.log(k);
//     }
//     k++;
// }

// // ZADATAK 7
// // Zbir brojeva od n do m

// // a = 3;
// // b = 10;
// // i = a;
// // let suma = 0;
// // while(i <= l){
// //     suma += i;
// //     i++;
// // }
// // console.log(suma);

// // ZADATAK 8

// n = 3;
// m = 5;
// i = n;
// let proizvod = 1;
// while(i <= m){
//     proizvod *= i;
//     i++;
// }
// console.log(proizvod);

// // ZADATAK 9

// n = 2;
// m = 3;
// i = n;
// let suma1 = 1; // kada je proizvod onda krece od 1
// while(i <= m){
//     suma1 = i ** 2;
//     i++;
// }
// console.log(suma1);

// // ZADATAK 10

// n = 1;
// m = 5;
// i = n;
// suma3 = 0; // Suma uvek krece od 0
// let clan;
// while(i <= m){
//     if(i % 2 == 0){
//         clan = i ** 2;
//     } else {
//         clan = i ** 3;
//     }
//     suma3 += clan;
//     i++;
// }
// console.log(`${suma3} OVDE`);

// // ZADATAK 11

// let c = 24;
// i = 1;
// let broj = 0;
// while(i <= c){
//     if(c % i == 0){
//         broj++;
//     }
//     i++;
// }
// console.log(`Broj delioca broja ${c} je: ${broj}`);

// ZADATAK 12
// // Odrediti da li je broj n prost ili slozen

// n = 4;
// i = 2;
// broj = 0;
// let prost = true;
// // da li broj deli 4 npr
// while(i <= Math.floor(Math.sqrt(n))){
//     if(n % i == 0){
//         prost = false;
//     }
//     i++;
// }
// if(prost == true){
//     console.log(`Broj ${n} je prost.`);
// } else {
//     console.log(`Broj ${n} je slozen.`);
// }

// // ZADATAK 14
// Za dat prirodan broj n, odrediti koliko je elemenata oblika i na 3 - 3i + n, deljivo sa 7

// let a = i ** 3 - 3 * i + n;
// n = 4;
// i = 2;
// while(i <= n){
//     if(i % 7 == 0){
//         console.log(a);
//     }
//     i++;
// }

// ZADATAK 15
// Za dat prirodan broj n, odrediti sumu eelementa oblika sin(n + i / n) cija vrednost pripada intervalu [alfa, beta]

// n = 10;
// i = 1;
// alfa = -1;
// beta = 1;
// suma = 0;
// ukupnaSuma = 0;
// while(i <= n){
//     suma = Math.sin(n + i / n);
//     if(alfa <= suma && suma <= beta){
//         ukupnaSuma += suma;
//         console.log(suma);
//     }
//     i++;
// }

// console.log(ukupnaSuma);


// ZADATAK 16
// Za dati prirodan broj n, odrediti n-ti clan Fibonacijevog niza:

// let f1 = 1;
// let f2 = 1;

// // clan 
// let n = 2;

// while(n >= 0){
//     fi = f1;
//     f1 = f1 + f2;
//     f2 = fi;
//     n--;
// }
// console.log(f2);

// let n = 6;
// let fi1 = 1;
// let fi2 = 1;
// let fi = 1;
// i = 3;
// while(i <= n){
//     fi = fi1 + fi2;
//     fi1 = fi2;
//     fi2 = fi;
//     i++;

// }

// console.log(`${n} clan Fibonacijevog niza = ${fi} `);


// ZADATAK 17
// KKreirati n paragrafa sa proizvoljnim tekstim, i naizmenicno ih obojiti sa tri razlicite boje

// let n = 20;

// let div = document.getElementById('parent');
// let tekst = "Bla bla bla bla";
// let i = 1;

// while(i <= n){
//     if(i % 3 == 1){ // Paragtafi 1, 4, 7, 10....
//         div.innerHTML += `<p style='color: blue'>${tekst}</p>`;
//     } else if(i % 3 == 2){ // paragrafi 2, 5, 8, 11...
//         div.innerHTML += `<p style='color: red'>${tekst}</p>`;
//     } else { //paragrafi 3, 6, 9, 12, 15....
//         div.innerHTML += `<p style='color: yellow'>${tekst}</p>`;
//     }

//     i++;
// }

// ZADATAK 18
// Kreirati n proizvoljnih slika i staviti im naizmenicno dva razlicita okvira

let slika = document.getElementById('slike');

n = 10;
i = 1;
while(i <= n){
    if(i % 2 == 0){
        slika.innerHTML += `<img class="slika1" src="./images/sea.jpg">`;
    } else{
        slika.innerHTML += `<img class="slika2" src="./images/sunset.jpg">`;
    }
    i++;
}

n = 2;
m = 5;
i = n; 
suma = 1;
