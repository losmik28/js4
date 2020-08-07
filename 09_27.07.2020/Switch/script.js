// ZADATAK 2

let ocena = 7;

switch(ocena){
    case 1:
        console.log(`Nedovoljan`);
        break;
    case 2:
        console.log(`Dovoljan`);
        break;
    case 3:
        console.log(`Dobar`);
        break;
    case 4:
        console.log(`Vrlo Dobar`);
        break;
    case 5:
        console.log(`Odlican`);
        break;
    default:
        console.log(`Nevalidna ocena`);
}

// ZADATAK 7

let vreme = new Date();

// let mesec = 0;
let mesec = vreme.getMonth();
let godina = vreme.getFullYear();
let brDana31 = 31;
let brDana30 = 30;
let februarDana = 29;

switch(mesec){
    case 0:
        console.log(`Januar ima ${brDana31}`);
        break;
    case 1:
        console.log(`Februar ima ${februarDana} dana`);
        if(mesec == 1){
            console.log(`Trenutna godina je ${godina}.`);
        } 
        if(godina % 4 == 0 && godina % 100 != 0 || godina % 400 == 0){
            console.log(`Godina ${godina} je prestupna i ima ${februarDana} dana.`);
        } else {
            console.log(`Ne prestupna (Prosta) godina i ima 28 dana.`);
        }
        break
    case 2:
        console.log(`Mart ima ${brDana31}`);
        break;
    case 3:
        console.log(`April ima ${brDana30}`);
        break
    case 4:
        console.log(`Maj ima ${brDana31}`);
        break
    case 5:
        console.log(`Jun ima ${brDana30}`);
        break
    case 6:
        console.log(`Jul ima ${brDana31}`);
        break
    case 7:
        console.log(`Avgust ima ${brDana31}`);
        break
    case 8:
        console.log(`Septembar ima ${brDana30}`);
        break
    case 9:
        console.log(`Oktobar ima ${brDana31}`);
        break
    case 10:
        console.log(`Novembar ima ${brDana30}`);
        break
    case 11:
        console.log(`Decembar ima ${brDana31}`);
        break
    default:
        console.log(`Uneli ste pogresan datum.`);
}


// ZADATAK 8
let para = document.getElementById('para');
let color = "nista";


switch(color){
    case "crvena":
        para.style.color = "red";
        para.style.fontSize = "40px";
        break;
    case "zelena":
        para.style.color = "green";
        para.style.fontSize = "40px";
        break;
    case "plava":
        para.style.color = "blue";
        para.style.fontSize = "40px";
        break;
    default:
        para.style.color = "yellow";
        para.style.fontSize = "40px";
}

// ZADATAK 6

if(mesec == 6){
    console.log(`Jul`);
}

// ZADATAK 5

let dan = vreme.getDay();

switch(dan){
    case 1:
        console.log(`Trenutno je Ponedeljak i ostalo je jos 4 dana do vikenda.`);
        break;
    case 2:
        console.log(`Trenutno je Utorak i ostalo je jos 3 dana do vikenda.`);
        break;
    case 3:
        console.log(`Trenutno je Sreda i ostalo je jos 2 dana do vikenda.`);
        break;
    case 4:
        console.log(`Trenutno je Cetvrtak i ostalo je jos 1 dana do vikenda.`);
        break;
    case 5:
        console.log(`Trenutno je Petak i ostalo je jos 0 dana do vikenda.`);
        break;
    default:
        console.log(`Sada je vikend!!!`);
}

// ZADATAK 4

let br1 = 5;
let br2 = 0;
let op = "d";
let rez;

switch(op){
    case "s":
        rez = br1 + br2;
        console.log(`${br1} + ${br2} = ${rez}`);
        break;
    case "o":
        rez = br1 - br2;
        console.log(`${br1} - ${br2} = ${rez}`);
        break;
    case "m":
        rez = br1 * br2;
        console.log(`${br1} * ${br2} = ${rez}`);
        break;
    case "d":
        if(br2 == 0){
            console.log(`Nije dozvoljeno deliti nulom.`);
        } else {
            rez = br1 / br2;
            console.log(`${br1} / ${br2} = ${rez}`);
        }
        break;
    default:
        console.log(`Doslo je do greske.`);
}

// ZADATAK KONCERT

// let h = 18;
// let m = 30;
// let s = 00;

// let k = 30;
// let t = 5;
// let bend = 10;

// let ukupnoMinuta = (k + t) * bend;
// // console.log(ukupnoMinuta);

// let ukupnoSati = ukupnoMinuta / 60;
// // console.log(ukupnoSati);

// if(){

// }