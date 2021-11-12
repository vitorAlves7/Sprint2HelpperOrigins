"use strict";
let lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
/**
 * This class instantiates objects of type people in imperative way
 */
class PeopleImperative {
    constructor(listPeople) {
        this.listPeople = listPeople;
    }
    /**
     * This method get the listPeople atribute
     * @returns list of the people
     */
    getListPeople() {
        return this.listPeople;
    }
    /**
    * This method returns a person's bibliography or a  a person's name via their id
    *
    * @param id  @typeParam number
    * @param option @typeParam  keyof IPerson
    * @returns name or biobliography of the person that id was passed by params
    */
    getPersonAttributeById(id, option) {
        for (let person of this.listPeople) {
            if (person.id === id) {
                return person[option];
            }
        }
        return undefined;
    }
    /**
     * This method delete a person that id was passed by params
     * @param id @typeParam number
     */
    deletePersonById(id) {
        for (let i = 0; i < this.listPeople.length; i++) {
            if (id === this.listPeople[i].id) {
                this.listPeople.splice(i, 1);
            }
        }
    }
    changeAPesonBio(id, option, newValue) {
        for (let person of this.listPeople) {
            if (person.id === id) {
                if (option === "name" || option === "bio") {
                    person[option] = newValue;
                }
            }
        }
    }
}
/**
 * This class instantiates objects of type people in functional way
 */
class PeopleFunctional {
    constructor(listPeople) {
        this.listPeople = listPeople;
    }
    getListPeople() {
        return this.listPeople;
    }
    /**
     * This method returns a person's bibliography or a  a person's name via their id
     *
     * @param id  @typeParam number
     * @param option @typeParam  keyof IPerson
     * @returns name or biobliography of the person that id was passed by params
     */
    getPersonAttributeByIdFunctional(id, option) {
        var _a;
        return (_a = this.listPeople.find(person => person.id === id)) === null || _a === void 0 ? void 0 : _a[option];
    }
    /**
     * This method delete a person that id was passed by params
     * @param id @typeParam number
     */
    deletePersonByIdFunctional(id) {
        return this.listPeople.forEach((person, index) => {
            if (person.id === id) {
                lista.splice(index, 1);
            }
        });
    }
    /**
     * This method changes a person's name or bio in the list of person
     * @param id @typeParam number
     * @param option @typeParam keyof IPerson
     * @param newValue @typeParam string
    */
    changeAPesonBioFunctional(id, option, newValue) {
        lista.forEach((person, index) => {
            if (person.id === id) {
                if (option === "name" || option === "bio") {
                    this.listPeople[index][option] = newValue;
                }
            }
        });
    }
}
let scientistsFunctional = new PeopleFunctional(lista);
let scientistsImperative = new PeopleImperative(lista);
console.log(scientistsFunctional.getPersonAttributeByIdFunctional(2, "bio"));
console.log(scientistsFunctional.deletePersonByIdFunctional(2));
console.log(scientistsFunctional.getListPeople());
console.log(scientistsFunctional.changeAPesonBioFunctional(1, "name", "Apache"));
console.log(scientistsFunctional.getListPeople());
