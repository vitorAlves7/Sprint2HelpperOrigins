
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

/**
 * This method renders in HTML the number of vowels in the word entered in the input
 * @public
 */

function responseVowels(): void{
    let inputWord : HTMLInputElement = document.getElementById('stringInput') as HTMLInputElement;
    let vowels : HTMLElement = document.getElementById('vowels') as HTMLElement;
    let word = new Word(inputWord.value);   
    vowels.textContent = word.numberOfVowels().toString();
}

document.addEventListener('input', responseVowels);