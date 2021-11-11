/**
 * Word
 * This is a class to instantiate word objects
 */

class Word {

    private allVowels: string[] = ['a','e','i','o','u','A','E','I','O','U'];
    private valueWord: string;
    
    constructor(valueWord: string){
        this.valueWord = valueWord; 
    }

    /**
     * This method returns the number of vowels in a string.
     * @public
     * @param void
     * @returns number od vowels
     */

    public numberOfVowels() : number{
        let allVowelsInTheStting: number = 0;
        for(let letter of this.valueWord){
            if(this.allVowels.indexOf(letter) !== -1){
                allVowelsInTheStting++;
            }
    }   
    return allVowelsInTheStting;
    }
}

let word = new Word('Ae!');
console.log(word.numberOfVowels());
