let suma = function(a, b){
    return a + b;
}

console.log(suma(5, 6));

let suma2 = (a, b) => {
    return a + b;
}

console.log(suma2(10, 29));

let hello = () => {
    console.log(`Hello world.`);
}

hello();

// Obicna funkcija
function neparan(n){
    if(n % 2 != 0){
        return true;
    } else {
        return false;
    }
}
let n = 6;
if(neparan(n)){ //Skracen zapis za if(neparan(n) == true)
    console.log(`Broj ${n} je neparan.`);
} else {
    console.log(`Broj ${n} je paran.`);
}
// console.log(neparan(3));


// Arrow funkcija
let neparan2 = (n) => {
    if(n % 2 != 0){
        return true;
    } else {
        return false;
    }
}

n = 7;
if(neparan2(n)){ //Skracen zapis za if(neparan(n) == true)
    console.log(`Broj ${n} je neparan.`);
} else {
    console.log(`Broj ${n} je paran.`);
}

// ZADATAK 13 

// ARROW F-JA
let aritmetickaSredina = (n, m) => {
    let suma = 0;
    let brojac = 0;
    for(let i = n; i <= m; i++){
        suma += i;
        brojac++;
    }
    let ar = suma / brojac;
    return ar;
}

n = 5;
m = 10;
let arsr = aritmetickaSredina(n, m);
console.log(arsr);


// ZADATAK 14

// ANONIMNA F-JA
let aritmetickaSredina2 = function(n, m){
    let suma2 = 0;
    let brojac2 = 0;
    for(let i = n; i <= m; i++){
        suma2 += i;
        brojac2++;
    }

    let ar2 = suma2 / brojac2;
    return ar2;
}

console.log(aritmetickaSredina2(5, 20));


// ZADATAK 12

// ARROW F-ja
let mnozenje = (n, m) => {
    let pr = 1;
    for(let i = n; i <= m; i++){
        pr *= i;
    }
    return pr;
}

console.log(mnozenje(1, 4));

// ZADATAK 11

// ANONIMNA F-ja
let sumiraj = function(n, m){
    sum = 0;
    for(let i = n; i <= m; i++){
        sum += i;
    }
    return sum;
}

n = 5;
m = 10;
let sumaSumiraj = sumiraj(n, m);
console.log(sumaSumiraj);

// ZADATAK 18

let vreme = (t, p, n) => {
    if(p > t){
        return 0;
    } else {
        return Math.abs(p + n - t);
    }
}
console.log(vreme(15, 20, 25));
console.log(vreme(15, 10, 12));

// ZADATAK 5

// Napisati arrow funkciju
let slika = (urlSlike) => {
    return `<img src="./images/${urlSlike}" style='width:150px'>`;
}

// Skracena vrezija
let slika2 = (urlSlike) => `<img src="./images/${urlSlike}" style='width:150px'>`;

// Jos skracenija verzija
let slika3 = urlSlike => `<img src="./images/${urlSlike}" style='width:150px'>`;

let div = document.getElementById(`slike`);
div.innerHTML += slika('slika.jpg');
div.innerHTML += slika2('slika.jpg');
div.innerHTML += slika3('slika.jpg');


// Napisati funkciju koja vraca veci od dva prosledjena broja
// Parametri funkcije: dva broja a i b
// Rezultat: broj

let max2 = (a, b) => {
    if(a > b){
        return a;
    } else {
        return b;
    }
}

console.log(max2(3, 5));
console.log(max2(5, 3));
console.log(max2(5, 5));

// Napisati funkciju koja vraca najveci od 4 zadata broja
// let max4 = (a, b, c, d) => {
//     let m1 = max2(a, b);
//     let m2 = max2(c, d);
//     let m3 = max2(m1, m2);
//     return m3;
// }

let max4 = (a, b, c, d) => max2(max2(a, b), max2(c, d));

// let max4drugi = (a, b, c, d) => {
//     let m1 = max2(a, b);
//     let m2 = max2(m1, c);
//     let m3 = max2(m2, d);
//     return m3;
// }

let max4drugi = (a, b, c, d) => max2(max2(max2(a, b), c), d);