// ZADATAK 3 Vraca tacno ukoliko je broj neparana u suprotnom netacno.

function neparanBroj(broj){
    if(broj % 2 != 0){
        return true;
    } else {
        return false;
    }
}

let nb = neparanBroj(5);
console.log(nb);

nb = neparanBroj(10);
console.log(nb);

if(nb == true){
    console.log(`Neparan`);
} else {
    console.log(`Paran`);
}

for(let i = 0; i < 10; i++){
    let pom = neparanBroj(i);
    if(pom == true){
        console.log(`Broj ${i} je neparan`);
    } else {
        console.log(`Broj ${i} je paran`);
    }
}

// ZADATAK 4

function maks2(br1, br2){
    if(br1 > br2){
        return br1;
    } else {
        return br2;
    }
}

let max3 = maks2(10, 6);
console.log(`${max3} je najveci broj.`);

function maks4(br1, br2, br3, br4){
    if(br1 > br2 && br1 > br3 && br1 > br4){
        return br1;
    } else if(br2 > br1 && br2 > br3 && br2 > br4){
        return br2;
    } else if(br3 > br1 && br3 > br2 && br3 > br4){
        return br3;
    } else {
        return br4;
    }
}

let max4 = maks4(20, 5, 15, 30);
console.log(`${max4} je najveci broj`);

// ZADATAK 5

function slika(urlSlike){
    let s = document.getElementById('slika');
    s.innerHTML = `<img src="${urlSlike}">`;
}

slika("./images/slika.jpg");

// ZADATAK 6

function boji(boja){
    para = document.getElementById("para");
    para.innerHTML = `Neki paragraf`;
    para.style.color = `${boja}`;
}

boji("blue");


// ZADATAK 7

function prosledjeniBroj(velFonta){
    let para1 = document.getElementById("para1");
    para1.innerHTML = `Neki paragraf`;
    para1.style.fontSize = `${velFonta}px`;
}

prosledjeniBroj(50);


// ZADATAK 8

function ispisRecenicu(recenica){
    let divRecenica = document.getElementById('recenica');
    for(let i = 10; i <= 30; i += 5){
        divRecenica.innerHTML += `<p style="font-size:${i}px"> ${recenica} </p>`;
    }
}

ispisRecenicu(`Neka recenica`);


// ZADATAK 10

function deljivSaTri(n, m){
    let brojac = 0;
    for(let i = n; i < m; i++){
        if(i % 3 == 0){
            console.log(i);
            brojac++;
        }
    }
    // console.log(brojac);
    return brojac;
}

let dt = deljivSaTri(5, 10);
console.log(dt);



// ZADATAK 11 

function sumiraj(n, m){
    suma = 0;
    for(let i = n; i <= m; i++){
        suma += i;
    }
    return suma;
}

let s = sumiraj(5, 10);
console.log(s);

// ZADATAK 12

function mnozi(n, m){
    let proizvod = 1;
    for(let i = n; i <= m; i++){
        proizvod *= i;
    }
    return proizvod;
}

let p = mnozi(2, 4);
console.log(p);

// ZADATAK 13

function aritmetickaSredina(n, m){
    let s = sumiraj(n, m);

    let br = 0;
    for(let i = n; i <= m; i++){
        br++;
    }

    let arsr = s / br;
    return arsr;
}

let a = aritmetickaSredina(1, 6);
console.log(a);

// DRUGI NACIN

function aritmetickaSredina1(n, m){
    let s = 0;

    let br = 0;
    for(let i = n; i <= m; i++){
        s += 1;
        br++;
    }

    let arsr = s / br;
    return arsr;
}

let a1 = aritmetickaSredina1(1, 6);
console.log(a1);

// ZADATAK 14

function aritmetickaSredina3(n, m){
    let s3 = 0;
    let br3 = 0;
    for(let i = n; i <= m; i++){
        if(i % 10 == 3){
            s3 += i;
            br3++;
        }
    }
    let arsr3 = s3 / br3;
    return arsr3;
}
let ar3 = aritmetickaSredina3(30, 50);
console.log(ar3);

// ZADATAK 16
// n meseci traje
// a dinara osnovica
// d dinara povisice svakog meseca

/*
Primer
n = 4
a = 1000
d = 300

i = 1: plata1 = 1000 + 300 * 0
i = 2: plata2 = 1000 + 300 = 1000 + 300 * 1
i = 3: plata3 = 1000 + 300 + 300 = 1000 + 300 * 2
i = 4: plata3 = 1000 + 300 + 300 + 300 = 1000 + 300 * 3

ukupnaPlata = plata1 + plata2 + plata3
*/

function placenaPraksa(n, a, d){
    ukupnaPlata = 0;
    for(let i = 1; i <=n; i++){
        let tekuciMesecPlata = a + (i - 1)*300;
        ukupnaPlata += tekuciMesecPlata;
    }
    return ukupnaPlata;
}

n = 10;
a = 1000;
d = 300;

console.log(`Ukupna plata nakon ${n} meseci, sa osnovicom ${a} i povisicom ${d} iznosi ${placenaPraksa(n, a, d)}`);
// ukupnaPlata = 0;
// for(let i = 1; i <=n; i++){
//     let tekuciMesecPlata = a + (i - 1)*300;
//     ukupnaPlata += tekuciMesecPlata;
// }

// console.log(ukupnaPlata);