"use strict";
/**
 * Word
 * This is a class to instantiate word objects
 */
class Word {
    constructor(valueWord) {
        this.allVowels = ['a', 'e', 'i', 'o', 'u', 'à', 'á', 'é', 'í', 'ó', 'ú', 'â', 'ê', 'ô', 'ã', 'õ'];
        this.valueWord = valueWord.toLowerCase().split("");
    }
    /**
     * This method returns the number of vowels in a string.
     * @public
     * @param void
     * @returns number od vowels
     */
    numberOfVowels() {
        let allVowelsInTheStting = 0;
        for (let letter of this.valueWord) {
            if (this.allVowels.indexOf(letter) !== -1) {
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
function responseVowels() {
    let inputWord = document.getElementById('stringInput');
    let vowels = document.getElementById('vowels');
    let word = new Word(inputWord.value);
    vowels.textContent = word.numberOfVowels().toString();
}
document.addEventListener('input', responseVowels);
