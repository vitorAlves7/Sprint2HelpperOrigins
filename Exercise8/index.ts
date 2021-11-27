interface IPerson {
    id:number;
    name: string;
    bio: string;  
}

class Person implements IPerson{
    id: number;
    name: string;
    bio: string;
    private adaCreator: boolean;
    
    constructor(id:number,name:string,bio:string){
        this.id = id;
        this.name = name;
        this.bio = bio;
        this.adaCreator = false;
    }

    public setAdaCreator(valueAda: boolean){
        this.adaCreator = valueAda;
    }
    
}


let lista: Array<IPerson> = [
     {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
     {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
     {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
     {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

class AdaLovelace extends Person {
    constructor(){
        super(1,'Ada Lovelace', 'Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina');
        this.setAdaCreator(true);
    }

}

class AlanTuring extends Person {
    constructor() {
        super(2, 'Alan Turing', 'Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial');

    }
}

class NikolaTesla extends Person {
    constructor() {
        super(3, 'Nikola Tesla', 'Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada');
    }
}

class NicolauCopernico extends Person {
    constructor() {
        super(4, 'Nicolau Copérnico', 'Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar');
    }
}

class PersonFactory {
    /**
     * This method creates a person matching the passed id or returns null if the id doesn't match any person
     * @param idPessoa
     * @typeParam number
     * @returns The person corresponding to the passed id 
     */
    public createPerson(idPessoa: number): Person | any{
        
        if(idPessoa === 1){
            return new AdaLovelace();
        } else if(idPessoa === 2){
            return new AlanTuring();
        } else if(idPessoa === 3){
            return new NikolaTesla();
        } else if(idPessoa === 4){
            return new NicolauCopernico();
        }
        return null;
    }

}


let adaLovelaceFactory: PersonFactory = new PersonFactory();
let ada: Person = adaLovelaceFactory.createPerson(1);

let copernicoFactory: PersonFactory = new PersonFactory();
let copernico: Person = copernicoFactory.createPerson(4);

function creatorOfTheAdaLanguage(person: Person){
    if(person.adaCreator === true){
        console.log(` A pessoa ${person.name} é criador da linguagem Ada`);
    } else {
        console.log(` A pessoa ${person.name} não é criador da linguagem Ada`);
    }
}

creatorOfTheAdaLanguage(copernico);
creatorOfTheAdaLanguage(ada); 