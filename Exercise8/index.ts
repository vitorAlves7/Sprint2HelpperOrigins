interface IPerson {
    id:number;
    name: string;
    bio: string;  
}

class Person implements IPerson{
    id: number;
    name: string;
    bio: string;
    
    constructor(id:number,name:string,bio:string){
        this.id = id;
        this.name = name;
        this.bio = bio;
    }
    
}


let lista: Array<Person> = [
     {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
     {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
     {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
     {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

class AdaLovelace extends Person {
    constructor(){
        super(1,'Ada Lovelace', 'Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina');
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

abstract class PersonFactory {
    public abstract createPerson(): Person;

}

class AdaLovelaceFactory extends PersonFactory{
    public createPerson(): Person{
        return new AdaLovelace();
    }
}

class AlanTuringFactory extends PersonFactory{
    public createPerson(): Person{
        return new AlanTuring();
    }
}

class NikolaTeslaFactory extends PersonFactory{
    public createPerson(): Person{
        return new NikolaTesla();
    }
}

class NicolauCopernicoFactory extends PersonFactory{
    public createPerson(): Person{
        return new NicolauCopernico();
    }
}
