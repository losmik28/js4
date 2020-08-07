// console.log("test");

// let a = "kisa";

// if(a == "kisa"){
//     console.log("Pada kisa.");
// }

// let c = 5;
// let b = 3;

// if(c > b){
//     console.log(`${c} je vece od ${b}`);
// }

// let x = 5;
// let y = "5";

// if(x == y){
//     console.log(`${x} i ${y} su jednake vrednosti`)
// }

// if(x !== y){
//     console.log(`${x} i ${y} su jednaki po tipu i po vrednosti.`)
// }


// IF - Else
// if(c > b){
//     console.log(`a je vece od b`);
// } else {
//     console.log(`a je manje od b`);
// }

// let k = 6;
// let m = 6;

// if(k == m){
//     console.log(`C i B su jednaki`);
// } else {
//     console.log(`C = ${k} i B = ${m} nisu jednaki`);
// }

// if(k != m){
//     console.log(`C = ${k} i B = ${m} nisu jednaki.`)
// } else {
//     console.log(`C = ${k} i B = ${m} su jednaki.`);
// }


// ZADATAK 1

let x = 5;
let y = 6;

if(x < y){
    console.log(`x je manje od y`);
} else {
    console.log(`x je vece od y`);
}

// ZADATAK 2

let temperatura = 20;

if(temperatura >= 0){
    console.log(`Temperatura je u plusu`);
} else {
    console.log(`Temperatura je u minusu.`);
}

// ZADATAK 3 --> 15. slajd

let divPol = document.getElementById('pol');
let pol = "muski1";

if(pol == "muski"){
    // console.log(`Korisnik je izabrao muski avatar.`);
    divPol.innerHTML = `<img src="./images/male.png">`;

} else {
    // console.log(`Korisnik je izabrao zenski zavatar`);
    divPol.innerHTML = `<img src="./images/female.png">`;
}

// ZADATAK 4

let vreme = new Date();
let h = vreme.getHours();

if(h >= 12){
    console.log(`popodne`);
} else {
    console.log(`prepodne`);
}

// ZADATAK 5

let g = vreme.getFullYear();
let godineRodjenja = 1998;
let godine = g - godineRodjenja;
// console.log(godine);

if(godine >= 18){
    console.log(`punoletan`);
} else {
    console.lot(`maloletan`);
}

// PRIMER

let broj = 40;
if(broj <= 10){
    console.log(`Broj je u prvoj desetici.`);
} else if (broj <= 20) {
    console.log(`Broj je u drugoj desetici.`);
} else if(broj <= 30){
    console.log(`Broj je u trecoj desetici.`);
} else {
    console.log(`Broj je veci od 30.`);
}

console.log("IF-ELSE IF - ELSE je zavrsen.")

// ZADATAK 6

let b1 = 5;
let b2 = 3;
let b3 = 7;

// pretpostavka
let najveci = b1;

if(b2 > najveci){
    najveci = b2;
}
if(b3 > najveci){
    najveci = b3;
}

console.log(`Najveci je: ${najveci}`);

// ZADATAK 7

let poeni = 0;

if(poeni > 100) {
    console.log(`Nevalidan broj poena`);
} else if(poeni >= 91){
    console.log(`Student je dobio ocenu 10`);
} else if (poeni >= 91){
    console.log(`Student je dobio ocenu 9`);
} else if (poeni >= 81){
    console.log(`Student je dobio ocenu 8`);
} else if (poeni >= 71){
    console.log(`Student je dobio ocenu 7`);
} else if (poeni >= 61){
    console.log(`Student je dobio ocenu 6`);
} else {
    console.log(`Student nije polozio.`);
}

// ZADATAK 8

let d = vreme.getDay();
console.log(d);

if (d == 1) {
    console.log(`Ponedeljak, radni dan`);
} else if(d == 2) {
    console.log(`Utorak, radni dan`);
} else if(d == 3) {
    console.log(`Sreda, radni dan`);
} else if(d == 4) {
    console.log(`Cetvrtak, radni dan`);
} else if(d == 5) {
    console.log(`Petak, radni dan`);
} else if(d == 6) {
    console.log(`Subota, vikend`);
} else {
    console.log(`Nedelja, vikend`);
}

// ZADATAK 9

// let vreme = new Date();
let hour = vreme.getHours();

if(hour <= 12){
    console.log(`Dobro jutro`);
} else if(hour <= 18){
    console.log(`Dobar dan`);
} else {
    console.log(`Dobro vece`)
}

// ZADATAK 10

let dd1 = new Date(2018 - 08 - 03);
let dd2 = new Date(2019 - 08 - 03);
if(dd1.getTime() < dd2.getTime()){
    console.log(`${dd1}je ranija od ${dd2}`);
} else if (dd1.getTime() > dd2.getTime()){
    console.log(`${dd2} je kasnija od ${dd1}`);
} else {
    console.log(`Datumi su isti`);
}


let d1 = 10;
let m1 = 10;
let g1 = 2020;

let d2 = 12;
let m2 = 11;
let g2 = 2020;

if(g1 > g2) {
    console.log(`${d1}.${m1}.${g1}`);
} else if (g2 > g1) {
    console.log(`${d2}.${m2}.${g2}`);
} else {
    if(m1 < m2){
        console.log(`${d1}.${m1}.${g1}`);
    } else if (m2 < m1) {
        console.log(`${d2}.${m2}.${g2}`);
    } else {
        if(d1 < d2){
            console.log(`${d1}.${m1}.${g1}`);
        } else if(d2 < d1){
            console.log(`${d2}.${m2}.${g2}`);
        } else {
            console.log(`Datumi su isti.`);
        }
    }
}


// ZADATAK 11

let radnoVreme = vreme.getHours();
console.log(radnoVreme);

if(radnoVreme >= 9 && radnoVreme <= 17){
    console.log(`Firma trenutno radi.`);
} else {
    console.log(`Zatvoreno!`);
}

// ZADATAK 12

// let lek1p = 9;
// let lek1k = 17;

// let lek2p = 9;
// let lek2k = 13;

// if(lek1p == lek2p){
//     console.log(`Pocetak se poklapa`);
// } else if(lek1k == lek2k){
//     console.log(`Smene se poklapaju`);
// }

// ZADATAK 13

let paranNeparan = 0;

// == 0 da nam ostatak bude 0
if(paranNeparan % 2 == 0){
    console.log(`Broj je paran.`);
} else {
    console.log(`Broj je neparan`);
}

// ZADATAK 14

let deljiv = 12;

if(isNaN(deljiv)){
    console.log(`Uneti karakter nije broj.`);
} else if(deljiv % 3 === 0){
    console.log(`Broj ${deljiv} je deljiv sa 3.`);
} else {
    console.log(`Broj ${deljiv} nije deljiv sa 3.`);
}

// ZADATAK 15

let broj1 = 15;
let broj2 = 7;

if(broj1 > broj2){
    console.log(`${broj1} je veci od ${broj2}`);
    console.log(`${broj1 - broj2} rezultat`);
} else {
    if(broj2 > broj1) {
        console.log(`${broj2} je veci od ${broj1}`);
        console.log(`${broj2 - broj1} rezultat`);
    }
}

// ZADATAK 16

let unetiBroj = 77;

if(unetiBroj < 0){
    console.log(`Broj ${unetiBroj} je manji od nule.`);
} else if (unetiBroj > 0){
    console.log(`Broj ${unetiBroj} je veci od nule.`);
} else {
    console.log(`Broj ${unetiBroj} je jednak nuli.`);
}

if(unetiBroj <= 0){
    unetiBroj--;
    console.log(`Njegov sledbenik je ${unetiBroj}`);
} else {
    unetiBroj++;
    console.log(`Njegov sledbenik je ${unetiBroj}`);
}

// ZADATAK 17 / 19

let bb1 = 13;
let bb2 = 1;
let bb3 = 9;

let najveciBroj = bb1;
let najmanjiBroj = bb2;
let srednjiBroj = bb3;

if(bb2 > najveciBroj){
    najveciBroj = bb2;
}
if(bb3 > najveciBroj){
    najveciBroj = bb3;
}

if(bb1 < najmanjiBroj){
    najmanjiBroj = bb1;
}
if(bb3 < najmanjiBroj){
    najmanjiBroj = bb3;
}

let srednji = (bb1 + bb2 + bb3) - (najmanjiBroj + najveciBroj);
console.log(`${srednji} SREDNJI BROJ`);

console.log(`Najveci je: ${najveciBroj}`);
console.log(`Najmanji je: ${najmanjiBroj}`);


// ZADATAK 18

let = broj3 = 16;

if(Number.isInteger(broj3)){
    console.log(`Jeste`);
} else {
    console.log(`Nije`);
}

let broj4 = 17.2;

console.log(broj4, Math.trunc(broj4));
if(broj4 == Math.trunc(broj4)){
    console.log(`Ceo broj`);
} else {
    console.log(`Decimalni broj.`);
}

// ZADATAK 20

let ceoBroj1 = 2;
let ceoBroj2 = 4;

if(ceoBroj1 > ceoBroj2){
    if(ceoBroj1 % 2 == 0){
        console.log(`Broj ${ceoBroj1} je veci u odnosu na broj ${ceoBroj2}, takodje je i broj ${ceoBroj1} paran`);
    } else {
        console.log(`Broj nije paran`);
    }
} else if(ceoBroj2 > ceoBroj1){
    if(ceoBroj2 % 2 == 0){
        console.log(`${ceoBroj2} je veci u odnosu na ${ceoBroj1}, takodje je i broj ${ceoBroj2} paran`);
    } else {
        console.log(`Broj nije paran`);
    }
} else {
    console.log(`Nevalidno uporodjenje.`);
}

// ZADATAK 21

let br1 = 33;
let br2 = 33;
let br3 = 9;

if(br1 >= br2 && br1 >= br3){
    console.log(`Broj ${br1} je najveci.`);
} else if(br2 >= br1 && br2 >= br3){
    console.log(`Broj ${br2} je najveci.`);
} else {
    console.log(`Broj ${br3} je najveci.`);
}

// Primer ako su brojevi isti
if(br1 == br2 && br2 == br3){
    console.log(`Sva tri broja su ista`);
} else if(br1 == br2){
    console.log(`Broj 1 i broj 2 su isti`);
} else if(br1 == br3){
    console.log(`Broj 1 i broj 3 su isti`);
} else {
    console.log(`Brojevi 1, 2 i 3 su razliciti`);
}

// ZADATAK 22

let ekranIspis = document.getElementById('ekranIspis');

let temperatura1 = 20;

if(temperatura1 < -15 || temperatura1 > 40){
    ekranIspis.innerHTML = "<i>ekstremna temperatura</i>";
} else {
    ekranIspis.innerHTML = "<b>Normalna temperatura</b>";
}

// ZADATAK 23

let prestupnaGod = vreme.getFullYear();

// if(prestupnaGod % 4 == 0){
//     console.log(`Jeste`);
// } else if (prestupnaGod % 100 != 0) {
//     console.log(`Nije`);
// } else if (prestupnaGod % 400 == 0) {
//     console.log(`Jeste`);
// } else {
//     console.log(`Nije`);
// }

if(prestupnaGod % 4 == 0 && prestupnaGod % 100 != 0 || prestupnaGod % 400 == 0){
    console.log(`Godina ${prestupnaGod} je prestupna.`);
} else {
    console.log(`Ne prestupna (Prosta) godina.`);
}

// ZADATAK 24

// Zadata vrednost u minutima, prevesti je u sate i minute
let minuti = 229;
let sati = Math.trunc(minuti / 60);
let minn = minuti % 60;
console.log(`${sati} : ${minn}`);

// ZADATAK 26

let butikVreme = vreme.getHours();
let butikDan = vreme.getDay();

if(butikVreme >= 9 && butikVreme < 20){
    if(butikDan >= 0 && butikDan <=5){
        console.log(`Butik je otvoren, u periodu od 9h do 20h.`);
    } else {
        console.log(`Butik je zatvoren, radno vreme od 9h do 20h.`);
    }
} else {
    if(butikVreme >= 10 && butikVreme < 18){
        console.log(`Butik je trenutno ovtoren, u periodu od 10h do 18h.`);
    } else {
        console.log(`Butik je trenutno zatvoren, radno vreme vikendom od 10h do 18h.`);
    }
}