function myFunction(){
    console.log(`Hello world`);
}

myFunction();
for(let i = 1; i < 5; i++){
    console.log(i);
}
myFunction();
console.log(`Moja funkcija`);
myFunction();

function ispisiTekst(tekst){
    console.log(tekst);
}

ispisiTekst(`Nesto`);
ispisiTekst(`Pravim web sajt.`);
ispisiTekst(`Neki tekst`);

function ispisiKorisnika(ime){
    console.log(`Ulogovani korisnik je ${ime}`);
    console.log(`Dobrodosli!!!`);
}

ispisiKorisnika(`Milos`);
ispisiKorisnika(`Dragana`);

// Funkcija sa tri prosledjena parametra
function korisnik(ime, prezime, god){
    console.log(`Korisnik je: ${ime} ${prezime} ima ${god} godina.`);
}

korisnik("Milos", "Kocic", 22);
korisnik("Pera", "Peric", 24);

let a = "Milena";
let b = "Djordjevic";
korisnik(a, b); // vrednost koju ne prosledimo je undefined

// Funkcija koja odredjuje zbir dva broja
function zbir(br1, br2){
    let rez = br1 + br2;
    console.log(rez);
}

zbir(5, 6);
zbir(-21, 5);
let x = 5;
let y = 7;
zbir(x, y);

// Funkcija koja VRACA rezultat
function zbirTri(br1, br2, br3){
    let rez = br1 + br2 + br3;
    return rez;
}

// Moramo da sacuvamo tu vrednost koja je vracena u nekoj promenljivoj
let z = zbirTri(1, 2, 5);
console.log(`Rezultat je: ${z}.`);

// Ili ako hocemo direktno da je ispise
console.log(`Rezultat je: ` + zbirTri(4, 1, 7));

let i = zbirTri(1, 1, 1); // vraca 3
let j = zbirTri(2, 2, 2); // vraca 6
let k = zbirTri(3, 3, 3); // vraca 9

console.log(i, j, k);

let t = zbirTri(i, j, k);
console.log(t);

console.log(zbirTri( zbirTri(1, 1, 1), zbirTri(2, 2, 2), zbirTri(3, 3, 3)));


zbir(i, j);

// Kada funkcija ISPISUJE, samo je pozovemo
// Kada funkcija VRACA (return), onda sacuvamo njenu vrednost negde pa tek onda ispisemo

