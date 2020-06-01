let bonjour = document.getElementById('b1');
let ajouter = document.getElementById('b2');

bonjour.addEventListener('click', alerte);
ajouter.addEventListener('click', ajout);

function alerte(){
    alert('Bonjour');
}
function ajout(){
    let para = document.createElement('p');
    para.textContent = 'Paragraphe ajouté';
    document.body.appendChild(para);
}

/* commentaire
multi
lignes*/
 //commentaire une ligne

 let prenom = 'Antoine';
 let monAge;
 monAge = 23;

 prenom ='Remi';

 let prenom1 = 'Antoine';
 let age = 23;
 let age1 = "23";

 document.getElementById('p1').innerHTML = 'Type de prenom : ' + typeof prenom1;
document.getElementById('p2').innerHTML = 'Type de age : ' + typeof age;
document.getElementById('p3').innerHTML = 'Type de age2 : ' + typeof age1;

let x = 10;
let y = -2;
let z = 3.14;

let vrai = true;
let faux = false;

let resultat = 8 > 4;

let nul = null;
let ind;

document.getElementById('p11').innerHTML = 'Type de nul : ' + typeof nul;
document.getElementById('p12').innerHTML = 'Type de ind : ' + typeof ind;

let a = x + 1; //a stocke 2 + 1 = 3
let b = x + y; //b stocke 2 + 3 = 5
let c = x - y; //c stocke 2 - 3 = -1
let d = x * y; //d stocke 2 * 3 = 6
let e = x / y; //e stocke 2 / 3
let f = 5 % 3; //f stocke le reste de la division euclidienne de 5 par 3
let g = x ** 3; //g stocke 2^3 = 2 * 2 * 2 = 8

/*On affiche les résultats dans une boite d'alerte en utilisant l'opérateur
 *de concaténation "+". On retourne à la ligne dans l'affichage avec "\n"*/
alert('a contient : ' + a +
      '\nb contient : ' + b +
      '\nc contient : ' + c +
      '\nd contient : ' + d +
      '\ne contient : ' + e +
      '\nf contient : ' + f +
      '\ng contient : ' + g);

      x += 7;

 alert('x stocke =' + x);

 x = 22+1;
 y = 'ans';
 z = 'Bonjour et bienvenue';

 alert(z + ' Je m\'appel Antoine et j\'ai ' + x);

 const navigateur = 'Chrome';
 const carteGraph = 'GTX 970';

 let i = 4; //On stocke le chiffre 4 dans x

/*Les comparaisons sont effectuées avant l'affectation. Le JavaScript va donc
 *commencer par comparer et renvoyer true ou false et nous allons stocker ce
 *résultat dans nos variables test*/
let test1 = i == 4;
let test2 = i === 4;
let test3 = i == '4';
let test4 = i === '4';
let test5 = i != '4';
let test6 = i !== '4';
let test7 = i > 4;
let test8 = i >= 4;
let test9 = i < 4;

alert('Valeur dans i égale à 4 (en valeur) ? : ' + test1 +
      '\nValeur dans i égale à 4 (valeur & type) ? : ' + test2 +
      '\nValeur dans i égale à "4" (en valeur) ? : ' + test3 +
      '\nValeur dans i égale à "4" (valeur & type) ? : ' + test4 +
      '\nValeur dans i différente de "4" (en valeur) ? : ' + test5 +
      '\nValeur dans i différente de "4" (valeur & type) ? : ' + test6 +
      '\nValeur dans i strictement supérieure à 4 ? : ' + test7 +
      '\nValeur dans i supérieure ou égale à 4 ? : ' + test8 +
      '\nValeur dans i strictement inférieure à 4 ? : ' + test9);


let m = 10;

let testa1 = m == 10;
let testa2 = m === 10;
let testa3 = m <= 10;
let testa4 = m == '10';
let testa5 = m === '10';
let testa6 = m == 11;

alert('Valeur dans m est égal à ' + testa1 +
      '\nValeur dans m est égal à ' + testa2 +
      '\nValeur dans m est inferieur ou égal à ' + testa3 +
      '\n' + testa4 + '\n' + testa5 + '\n' + testa6);

let h = 15;

switch(h){
    case 2 : document.getElementById('p1').innerHTML = 'h stock la valeur de 2'
  break;

    case 5 : document.getElementById('p1').innerHTML = 'h stock la valeur de 5'
  break;

   case 15 : document.getElementById('p1').innerHTML = 'h stock la valeur de 15'
  break;

  case 30 : document.getElementById('p1').innerHTML = 'h stock la valeur de 30'
  break;

  default : document.getElementById('p1').innerHTML = 'x ne stock ni la valeur de 2, 5, 15 ,30.';
}

let nombre10 = 5
let nombre20 = 10

function aleatoire(){
  return Math.random() * 100;

}

function multiplication(nombre10, nombre20){
  return nombre10 + ' * ' + nombre20 + ' = ' + (nombre10 * nombre20);
}
