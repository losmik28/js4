let sati = 1;
let minuti = 52;
let prosloVreme = sati * 60 + minuti;
console.log("Proslo vreme od ponoci je: " + prosloVreme + " minuta");


let minuti2 = 340;
let satiOdPonoci = Math.floor(minuti2 / 60);
let minutiOdPonoci = minuti2 % 60;
// console.log(satiOdPonoci);
// console.log(minutiOdPonoci);
console.log("Proslo je: " + satiOdPonoci + " sati i " + minutiOdPonoci + " minuta.");


let cenaRobe = 200;
let kupac = 400;
let kasirka = kupac - cenaRobe;
console.log(kasirka); // --..--

let datum = new Date();
let h = datum.getHours();
let m = datum.getMinutes();
let s = datum.getSeconds();
console.log(h, m, s);

minuti2 = s * 60 + m;

console.log(minuti2);

let godina = datum.getFullYear();
let mesec = datum.getMonth();
mesec++;
let dat = datum.getDate();
let dan = datum.getDay();
// console.log(godina, mesec, dat, dan);
console.log(`${dat}.${mesec}.${godina}`);
console.log(`${godina}/${mesec}/${dat}`);


let euro = 100;
let valutaDinar = 117.6;
let ukupnoDinara = euro * valutaDinar;
console.log(ukupnoDinara);

let dinar = 1000;
let ukupnoEura = dinar / 117.6;
console.log(ukupnoEura);



// Konverzija iz Evre u dolare
let valutaDolarEuro = 0.863586;
let ukupnoDolara = euro * valutaDolarEuro;

// Konverzija iz RSD u Dolare
let valutaDolaraSrbija = 101.565;
let rsdToDollar = ukupnoDolara * valutaDolaraSrbija;

console.log(ukupnoDolara + " $");
console.log(rsdToDollar + " RSD");

// Celzijus
let celsiusTemp = 32;
let celsiuToF = celsiusTemp * 9 / 5 + 32;
console.log(celsiuToF + " F");

// Farenhajt
let fTemp = 90;
let fToCel = (fTemp - 32) * 5 / 9;
console.log(fToCel + " C");

// Celsisu to Kelvin
let kelvinToCel = celsiusTemp + 273.15;
console.log(kelvinToCel);

// Kelvin to Celsius
let kelvin;
let celsiusToKelvin = kelvin - 273.15;

