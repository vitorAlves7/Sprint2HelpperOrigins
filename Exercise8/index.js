"use strict";
class Person {
    constructor(id, name, bio) {
        this.id = id;
        this.name = name;
        this.bio = bio;
    }
}
let lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
class AdaLovelace extends Person {
    constructor() {
        super(1, 'Ada Lovelace', 'Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina');
        this.adaCreator = true;
    }
}
class AlanTuring extends Person {
    constructor() {
        super(2, 'Alan Turing', 'Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial');
        this.adaCreator = false;
    }
}
class NikolaTesla extends Person {
    constructor() {
        super(3, 'Nikola Tesla', 'Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada');
        this.adaCreator = false;
    }
}
class NicolauCopernico extends Person {
    constructor() {
        super(4, 'Nicolau Copérnico', 'Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar');
        this.adaCreator = false;
    }
}
class PersonFactory {
}
class AdaLovelaceFactory extends PersonFactory {
    createPerson() {
        return new AdaLovelace();
    }
}
class AlanTuringFactory extends PersonFactory {
    createPerson() {
        return new AlanTuring();
    }
}
class NikolaTeslaFactory extends PersonFactory {
    createPerson() {
        return new NikolaTesla();
    }
}
class NicolauCopernicoFactory extends PersonFactory {
    createPerson() {
        return new NicolauCopernico();
    }
}
let adaLovelaceFactory = new AdaLovelaceFactory();
let ada = adaLovelaceFactory.createPerson();
let copernicoFactory = new NicolauCopernicoFactory();
let copernico = copernicoFactory.createPerson();
function creatorOfTheAdaLanguage(person) {
    if (person.adaCreator === true) {
        console.log(` A pessoa ${person.name} é criador da linguagem Ada`);
    }
    else {
        console.log(` A pessoa ${person.name} não é criador da linguagem Ada`);
    }
}
creatorOfTheAdaLanguage(copernico);
creatorOfTheAdaLanguage(ada);
