/**
 * Word
 * This is a class to instantiate word objects
 */

class Word {

    private allVowels: string[] = ['a','e','i','o','u','à','á','é','í','ó','ú','â','ê','ô','ã','õ'];
    private valueWord: string[];
    
    constructor(valueWord: string){
        this.valueWord = valueWord.toLowerCase().split(""); 
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

let word = new Word('Bacon é muito bom!');
console.log(word.numberOfVowels());
