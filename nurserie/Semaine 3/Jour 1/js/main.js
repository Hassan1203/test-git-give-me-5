// let texte = "Pierre";
let nombre = 42;
// let iscool = true;

// console.log(texte)
// console.log(nombre)
// console.log(iscool)

let prenom = "Hassan"

console.log("je m\'appel" + prenom)
console.log('je m\'appel' + prenom)
console.log(`je m'appel ${prenom}`)

// je m'appel Hassan j'ai 42 ans

console.log("je m'appel " + prenom + " j'ai " + nombre + " ans")
console.log(`je m'appel ${prenom} j'ai ${42} ans`)

// //La longueur
// console.log(`Mon nom est composé de ${Hassan+6} caracteres)



// console.log(prenom.lenght)

console.log(`je m'appel : ${prenom} `)


// creer une nouvelle variable contenant un tableau js, avec au moins 5 entrées
//- puis y ajouter une nouvelle entrée au debut et à la fin
//- modifier/donner une nouvelle valeur a la 3éme entrée










// decla de tableaux
//const numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//const fruits = ["mangue", "pastèque", "poire", "orange", "ananas"];
// acces a un element du tableau
console.log(fruits[0]); // acces au 1ere element 
console.log(fruits[3]); // acces au 4eme element 
fruits.unshift("fraise"); // ajout au debut du tableau
fruits.push("banane"); // ajout en fin de tableau
fruits.shift(); // supprimer le 1er element
fruits.pop(); // supprimer le dernier element
console.log(fruits.indexOf("orange")); // retourne l’index de l'element orange

console.log(Array.isArray(fruits)); // true



const cars = ["Volvo", "Bmw", "Mercedes", "Toyota", "Audi"]
console.log(cars)
cars.unshift("total")
console.log(cars)
cars[2] = "Polo"
console.log(cars)
cars.push("Ferrari")
console.log(cars)
cars.shift("Volvo")
console.log(cars)

// nouvelle variable ``performance` vous lui donner la valeur quevous voulez, et on initialise également une variable prime à 0

//       si perf >= 90 => prime de 200
//       si perf >= 80 => prime de 150
//       si perf >= 70 => prime de 100
//       si perf < 70 => prime de 0

//      vu votre performance de xxx vous gagner une prime de xx£

let perf = 75
let prime = 0

if (perf >= 90) {
    prime = 200
} else if (perf >= 80) {
    prime = 150
} else if (perf >= 70) {
    prime = 100
} else {
    prime = 0
}
console.log(`si votre performance est de ${perf}, votre prime sera de ${prime}`)


//  let x=12
//  let message = x > 10 ? " commande permise" : "commande non permise";
//  console.log(message);

let txt1 = "how're you today";
let txt2 = "welcome to HTML";

//  a l'aide d'un ternaire afficher dans un console.log txt1 plus CanvasGradient, ou txt2 plus grand


if (txt1.length > txt2.length) {
    message = "text1. > text2"
} else if (txt1.length < txt2.length) {
    message = "text2 > text1"
} else {
    message = "text1 = text2"
}
console.log(message);

let vehicule = {
    id: 11456,
    matricule: "GH 114654",
    type: "c",
    age: 5,
};



// type : v=voiture / c=camion.
console.log(vehicule.type == "v" ? "voiture" : "camion")
console.log(vehicule.age <= 5 ? "vehicule recent" : "vicule ancient")
console.log(vehicule.age <= 5 ? 'age normal' : 'vehicule agé')
console.log(vehicule.matricule)
console.log(vehicule.type = "voiture")


// <= 5 ans : age normal

// >= 5 : vehicle agé

// prompt('Bonjour')


let age = prompt('indiquez votre age')
console.log(age)

// mineur / majeur / retraité
// 0 - 18 18 - 60 60 +

switch (true) {
    case age >= 0 && age < 18:
        console.log("mineur");
        break;
    case age >= 18 && age < 60:
        console.log("majeur");
        break;
    case age >= 60:
        console.log("retraité");
        break;
    default:
        console.log("erreur");
}

// console.log(result)

let grade = prompt('renseignez votre grade')
let salaire = 0

//        junior - confirmé - senior
// salaire:
//        1800     2500       3200

// ******************************************

// nb roues-------2:moto / 4 :  voiture / 6
// :camion  / sinon : autres
// avec un prompt demander le nb de roues du vehicule et en
// determiner le type de vehicule en fonction du nb de roues



switch (grade) {
    case "junior":
        salaire = 1800;
        break;
    case "confirmé":
        salaire = 2500;
        break;
    case "senior":
        salaire = 3200;
        break;
    default:
        salaire = 0
}

console.log(`votre grade est : ${grade}, votre salaire sera de: ${salaire}€`)


let nbRoues = parseInt(prompt('indique le nb de roue de ton vehicule (2,4,6,....'));
let result = ``;

switch (nbRoues) {
    case 2:
        result = "moto";
        break;
    case 4:
        result = 'voiture';
        break;
    case 6:
        result = 'camion';
        break;

    default:
        result = "autre";

}

console.log(result)




cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// dans votre navigateur afficher la liste complète des voiture avec une boucle for

for (let i = 0; i < cars.length; i++) {
    text = ` ${cars[i]}<br>`
}
document.write(text)



// avec le tableau todos afficher dans le navigateur la phrase(*4): la tache
// 'xxx xxx xxx' est complété/ non complété


// todos[0].text - > faire les courses
// todos[0].isCompleted - > true

//     `la tache ${} est ${}`

const todos = [{
        id: 1,
        text: "Faire les courses",
        isCompleted: true,
    },
    {
        id: 2,
        text: "Balade au vieux Lille",
        isCompleted: true,
    },
    {
        id: 3,
        text: "Préparer le diner",
        isCompleted: false,
    },
    {
        id: 4,
        text: "Regarder la TV",
        isCompleted: false,
    },
];


let result2 = "";
for (let i = 0; i < todos.length; i++) {
    message = todos[i].isCompleted ? complete : incomplete;
    result += `la tache ${todos[i].text} est ${ message }<br>`
}
document.write(result2);




// decla de tableaux
// const numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// const fruits = ["mangue", "pastèque", "poire", "orange", "ananas"];
// // acces a un element du tableau
// console.log(fruits[0]); // acces au 1ere element 
// console.log(fruits[3]); // acces au 4eme element 
// fruits.unshift("fraise"); // ajout au debut du tableau
// fruits.push("banane"); // ajout en fin de tableau
// fruits.shift(); // supprimer le 1er element
// fruits.pop(); // supprimer le dernier element
// console.log(fruits.indexOf("orange")); // retourne l’index de l'element orange

// console.log(Array.isArray(fruits)); // true