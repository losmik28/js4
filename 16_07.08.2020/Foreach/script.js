function ispisKonzola(poruka){
    console.log(poruka);
}

function ispisStranica(poruka){
    let div = document.getElementById('nekiDiv');
    div.innerHTML += poruka;
}

function ispisNiza(niz, cb){
    let poruka = "";
    for(let i = 0; i < niz.length; i++){
        poruka += niz[i] + " "; // na poruku nadovezujemo i-ti clan niza
    }

    cb(poruka); // poziv callback funkcije
}

let a = [1, 20, -15, 2, -4];
let b = [1, 1, 1, 1, 1];
ispisNiza(a, ispisKonzola); // ispisKonzola je callback funkcija
ispisNiza(a, ispisStranica); // ispisStranica je callback funkcija
ispisNiza(b, ispisKonzola);
ispisNiza(b, ispisStranica);


// Poziv funkcije ispisNiza preko anonimnih funkcija

ispisNiza(a, (poruka) => {
    console.log(poruka);
});

// ispisNiza(a, function(poruka){
//     console.log(poruka);
// });

ispisNiza(a, (poruka) => {
    let div = document.getElementById('nekiDiv');
    div.innerHTML += poruka;
});

// Ispis niza a preko forEach petlje
// 1) forEach je metoda niza
// 2) forEach prihvata callback funkciju kao argument

// Prva varijanta da prosledimo obicnu funkciju forEach-u

function ispiselementaNiza(elem){
    console.log(`Element niza je: ${elem}`);
}

a.forEach(ispiselementaNiza);

// Druga varijanta - prosledjujemo anonimnu funkciju
console.log(`Druga varijanta`);

a.forEach(elem => {
    console.log(`Element niza je: ${elem}`);
});


// Ispis niza preko forEach petlje - pristup indeksu i elemntu niza

a.forEach((elem, i) => {
    console.log(`Indeks je: ${i}, Element: ${elem}`);
});


// ZADATAK 16

let ispisLista = (niz) => { //funkcija formira ul listu sa stavkama u nizu
    let result = `<ul>`;
    niz.forEach(elem => {
        result += `<li>${elem}</li>`;
    });
    result += `</ul>`;
    let div = document.getElementById('nekiDiv');
    div.innerHTML += result;
}

let lista1 = ["Sljiva", "Breskva", "Limun", "Kajsija", "Jabuka"];
let lista2 = ["Jaja", "Mleko", "Jogurt"];

ispisLista(lista1);
ispisLista(lista2);


// ZADATAK 17

let nizImena = ["Nemanja","Bogdan", "Nemanja", "Stefan", "Boban", "Nemanja", "Milos"];

let = ispisImena = (niz) => {
    let tabela1 = `<table>`;
    niz.forEach(elem1 => {
        tabela1 += `<tr><td>${elem1}<td></tr>`;
    });
    tabela1 += `</table>`;
    let tabela = document.getElementById('nesto');
    tabela.innerHTML += tabela1;
}

ispisImena(nizImena);

// ZADATAK 18

let nizSlika = ["sea.jpg", "sunrise.jpg", "sunset.jpg", "sea.jpg", "sunrise.jpg"];


let prikazSlika = (niz) => {
    let slika1 = `<div>`
    niz.forEach(elem2 => {
        slika1 += `<img src="./images/${elem2}">`;
    });
    slika1 += `</div>`
    let slika = document.getElementById('prikazSlika');
    slika.innerHTML += slika1;
}

prikazSlika(nizSlika);

// ZADATAK 19

let words = ["Hello", "world", "pera", "zmaj", "duzinastr"];

let ispisiDuzinu = (niz) => {
    niz.forEach(elem => {
        console.log(elem.length);
    });
}

ispisiDuzinu(words);

// ZADATAK 20

let stringNajvecaDuzina = (niz) => {
    let najvecaDuzina = niz[0].length;
    let najduziString = niz[0];
    niz.forEach(elem => {
        if(elem.length > najvecaDuzina){ // sa >= onda se gleda poslednji najduzi string 
            najvecaDuzina = elem.length;
            najduziString = elem;
        }
    });
    return najduziString;
}

// ZADATAK 21

// prosecna duzina
// da se vidi koji su to prosecni

let prosecnaDuzinaStringova = (niz) => {
    let prosek = 0;
    niz.forEach(elem => {
        prosek += elem.length; // na prosek dodajemo duzinu elementa
    });
    prosek = prosek / niz.length;
    return prosek;
}

let brojNatprosecnoDugackih = (niz) => {
    // da se vidi koji je prosecan
    let prosek = prosecnaDuzinaStringova(niz);
    console.log(prosek); // da proverimo koja je prosecna duzina
    let broj = 0; 
    niz.forEach(elem => {
        if(elem.length > prosek){
            broj++; // da povecamo za 1
        }
    });
    return broj;
}

console.log(brojNatprosecnoDugackih(words));


// Ispisati sve elemente u nizu stringova sa maksimalnom duzinom

let strings = ["Pera", "Laza", "Stefan", "Ana", "Jelena", "Aca", "Milena"];

let maxDuzina = (niz) => {
    let m = niz[0].length; // u startu pretpostavimo da je prvi parametar sa max duzinom
    niz.forEach(elem => {
        if(elem.length > m){ // proveravamo da li je element veci od max parametra
            m = elem.length;
        }
    });
    return m;
}

let stringoviSaSvojstvom = (niz, svojstvo) => {
    let s = svojstvo(niz);
    niz.forEach(elem => {
        if(elem.length == s){
            console.log(elem);
        }
    });
} 

stringoviSaSvojstvom(strings, maxDuzina);


// Ispisati sve elemente koji imaju minimalnu duzinu

let minDuzina = (niz) => {
    let m = niz[0].length;
    niz.forEach(elem => {
        if(elem.length < m){
            m = elem.length;
        }
    });
    return m;
}

stringoviSaSvojstvom(strings, minDuzina);

// ZADATAK 22

// let brElemSadrziA = (niz) => {

// }


// ZADATAK 24
// a i b 2 niza koji imaju istu duzinu, c ima 2 puta vise elemenata

let a1 = [5, -8, 8, 14];
let b1 = [9, 5, -5, 8];

// Prvi nacin
let c = [];
for(let i = 0; i < a1.length; i++){// svejedno da li je a1.lenght ili b1.length
    c.push(a1[i]);
    c.push(b1[i]);
}


// Drugi nacin
c = [];
for(let i = 0; i < a1.length; i++){// svejedno da li je a1.lenght ili b1.length
    c[2 * i] = a1[i];
    c[2 * i + 1] = b1[i];
}

// Treci nacin
c = [];
let j = 0;
for(let i = 0; i < a1.length; i++){// svejedno da li je a1.lenght ili b1.length
    c[j++] = a1[i];
    c[j++] = b1[i];
}


console.log(c);
console.log(c);
console.log(c);