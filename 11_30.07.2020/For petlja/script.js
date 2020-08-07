for(i = 0; i <= 10; i++){
    console.log(i);
}

// ZADATAK 4
for(let i = 5; i <= 15; i++){
    console.log(2 * i);
}

// Suma brojeva od 1 do 20
let suma = 0;
for(let i = 1; i <= 20; i++){
    suma += i;
}

console.log(suma);

// Suma parnih brojeva od 1 do 20
suma = 0;
for(let i = 2; i <= 20; i += 2){
    suma += i;
}

console.log(suma);

// Suma parnih brojeva od n do m
let n = 5;
let m = 25;
suma = 0;
for(let i = n; i <= m; i++){
    if(i % 2 == 0){
        suma += i;
    }
}
console.log(suma);


// ZADATAK 9 Suma kvadrata od n do m
// od neceg do necedg je 99% for petlja

n = 2;
m = 5;
suma = 0;
// Kada je 2 > 2 * 2
// Kada je 3 > 3 * 3
// Kada je 4 > 4 * 4....
for(i = n; i <= m; i++){
    suma += i ** 2;
}
console.log(suma);

// ZADATAK 10 Preuzeti sa interneta 3 slike i imenovati ih 1, 2 i 3. For petljom u HTML
// ispisati svaku od slicica uz pomoc brojaca.

// let divSlike = document.getElementById('slike');
// for(i = 1; i <= 3; i++){
//     divSlike.innerHTML += `<img src="./images/${i}.png">`;
// }

// Bonus
// for(i = 1; i <= 10; i++){
//     divSlike.innerHTML += `<br>`;
//     if(i % 3 == 1){
//         divSlike.innerHTML += `<img src="./images/1.png">`;
//     } else if(i % 3 == 2){
//         divSlike.innerHTML += `<img src="./images/2.png">`;
//     } else {
//         divSlike.innerHTML += `<img src="./images/3.png">`;
//     }
    
// }

// ZADATAK 12

n = 20;
m = 100;

proizvod = 1;
for(i = n; i <= m; i++){
    if(i % 11 == 0){
        proizvod *= i;
    }
}
console.log(proizvod);



// ZADATAK 13
n = 5;
m = 150;
suma = 0;

for(i = n; i <= m; i++){
    if(i % 13 == 0){
        suma += i;
    }
}
console.log(suma);

// ZADATAK 14
// arsr = suma / broj
n = 10;
m = 20;
suma = 0;
broj = 0;
for(i = n; i <= m; i++){
    suma += i;
    broj += 1;
}
let arsr = suma / broj;
console.log(arsr);



// ZADATAK 15
n = 0;
m = 15;
pozitivni = 0;
negativni = 0;
for(i = n; i <= m; i++){
    if(i % 2 == 0){
        pozitivni++;
    } else {
        negativni++;
    }
}
console.log(`Pozitivnih brojeva ima: ${pozitivni}`);
console.log(`Negativnih brojeva ima: ${negativni}`);

// ZADATAK 16
n = 5;
m = 50;
delilac = 0;
for(i = n; i <= m; i++){
    if(i % 3 == 0 || i % 5 == 0){
        delilac++;
    }
}
console.log(delilac);

// ZADATAK 17
suma = 0;
broj = 0;
n = 100;
m = 150;
// 4, 14, 24, 34, 44 
for(i = n; i <= m; i++){
    if(i % 10 == 4){
        suma += i;
        broj++;
    }
}
console.log(suma, broj);

// ZADATAK 18

n = 3;
m = 9;
a = 3;
brojac = 0;
for(i = n; i <= m; i++){
    if(i % a == 0){
        brojac++;
    }
}
console.log(brojac);

// ZADATAK 19 

n = 3;
m = 9;
a = 3;
brojac = 0;
for(i = n; i <= m; i++){
    if(i % a != 0){
        brojac++;
    }
}
console.log(brojac);

// ZADATAK 20

n = 3;
m = 9;
a = 3;
suma = 0;
for(i = n; i <= m; i++){
    if(i % a == 0){
        suma += i;
    } else {
        suma += i;
    }
}
console.log(suma);


// ZADATAK 21
a = 5;
n = 5;
m = 20;
proizvod = 1;
for(i = n; i <= m; i++){
    if(i % a == 0){
        proizvod *= i;
    }
}
console.log(proizvod);

