let todos = [{
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
    message = todos[i].isCompleted ? `complete` : `incomplete`;
    result2 += `la tache ${todos[i].text} est ${message}<br>`
}
document.write(result2);

// a l'aide d'une boucle ajouter un attribut longeur a chaque élément
// de todos[3].isCompleted == la tache: $(todos[3].text) is completed : la tache $(todos)


let result3 = '';

// for (let i = 0; i < todos.length; i++) {
//     message = todos[i].isCompleted ? 'completée' : 'non complétée';
//     todos[i].longueur = todos[i].text.length
//     result3 += `la tache ${todos[i].text} est ${message}, elle contient ${todos[i].longueur}<br>`
// }
// document.write(result3)

// console.log(todos)
// longueur
i = 0
while (i < todos.length) {
    message = todos[i].isCompleted ? 'completée' : 'non complétée';
    todos[i].longueur = todos[i].text.length
    result3 += `la tache ${todos[i].text} est ${message}, elle contient ${todos[i].longueur}<br>`
    i++
}


cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// avec une boucle while, afficher dans le navigateur :
// 'la voiture xxx contient x lettres'
i = 0
    // while (i < cars.length){
while (cars[i]) {
    document.write(`la voiture ${cars[i]} contient ${cars[i].length} lettre`);
    i++;
}



// créer un tableau ou chaque élément est la longueur du nom de voiture respecive
// resultat attendu => [3,5,4,4,4,4]



let tab = [2]
for (let i = 0; i < cars.length; i++) {
    tab.push(cars[i].length)
}
console.log(tab)


todos.forEach(function(todo) {
    document.write(todo.text + "<br>");
});




// avec todos et forEach, afficher dans le navigateur si tache complétée
// ou tache non complété

// todos. forEach (function (todo){


todos.forEach(function(todo) {
    document.write(`la tache est ${todo.isCompleted? 'complétée':'non complétée'}<br>`)
})
let listeTodo = cars.map(function(car) {
    return car.length;

})
let listepar2 = listeTodo.map(function(nb) {
    return nb *


        console.log(todos)
    console.log(listetodo)
    console.log(listePar2)

});


// créer une fonction qui permet de calculer le produit de 3 nombre entier

var1 = 5
console.log(produit(var1, 14, 21))

function produit(para1, para2, para3) {
    return para1 * para2 * para3;
}


// créer une fonction qui permet de convertir un nombre de minute en seconde
// (ex : si je donne 5 je dois obtenir 300)
// nomComposeDePlusieurMot

function minToSec(min) {
    return min * 60

}

console.log(minToSec(60))
console.log(minToSec(10))
console.log(minToSec(25))
let x = 15
let testSec = minToSec(x)
console.log(testSec)

let tableau = ["aze", 'b', 3]


// // créer une fonction qui retourn uniquement le premier
// element d'un tableau
// getFirst

function getFirst(tab) {
    return tab[0]

}
console.log(getFirst(tableau))
console.log(getFirst(todos))
console.log(getFirst(tableau))




let phrase1 = "bonjour comment vous allez"
let phrase2 = "azertyujhgfdcgb dfghjh mqsfioh qvklhoi esfe "


function compare(phrase1, phrase2) {

    return phrase1.length > phrase2.length ? 'phrase1 plus longue' : 'phrase2plus longue'
}
console.log(compare(phrase1, phrase2))




//  avec une fonction retourner la phrase de depart
// ('mars 17 le somme nous bonjour')
// console.log(grandePhrase)
// console.log(grandePhrase.split(''))
// document.write(grandePhrase.split('').reverse().join(''))
// let grandePhrase = ' bonjour nous somme le 17 mars'






// document.write(reverse(grandPhrase))
// let reverseStringIs = reverse("bonjour nous somme le 17 mars")
// console.log(reverseStringIs)
let grandePhrase = "bonjour nous sommes le 17 mars";

function inverse(a) {
    return a.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(inverse(phrase1));


console.log('coucou', inverse(grandePhrase))


nombre1 = parseInt(prompt('entrez un premier nombre'))
nombre2 = parseInt(prompt('entrez un deuxieme nombre'))
operateur = prompt('quelle operation voulez vous faire')

function somme(a, b) {
    return a + b
}

function soustraction(a, b) {
    return a - b
}

function produit(a, b) {
    return a * b
}

function division(a, b) {
    return a / b
}

function calculette(nb1, nb2, operateur) {
    switch (operateur) {
        case '+':
            return somme(nb1, nb2);
        case '-':
            return soustraction(nb1, nb2);
        case '*':
            return produit(nb1, nb2);
        case '/':
            return division(nb1, nb2);
    }
}

console.log(calculette(nombre1, nombre2, operateur))