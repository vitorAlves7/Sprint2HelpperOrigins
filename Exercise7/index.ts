/**
 * This class instantiates an object with a list of relevant numbers from an array.
 */

class ArrayRelevantDataImperative{

    private relevantNumbers: number [];

    constructor(listItems: any[]){
       this.relevantNumbers = this.filterOutRelevantNumbers(listItems)
    }

    public getRelvantNumber(): number []{
        return this.relevantNumbers;
    }

    private setRelevantNumber(listItems: any[]){
        this.relevantNumbers = listItems;
    }
    /**
     * This method filters out the relevant numbers from the array, such as biggest, smallest and mean of numbers.
     * @param listItems @typeParam any []
     * @returns if a list is of type number return list with the highest value at position 0,
     *  the lowest at 1, and the average at position 3. Else returns a empty list
     */
    public filterOutRelevantNumbers(numberList: number [],): number []{
        if(this.validatesIfItIsNumericalList(numberList)){
            let bigger: number  = numberList[0];
            let smaller: number = numberList[0];
            let sum : number = 0;
    
            for(let i = 1; i < numberList.length; i++){
                if(numberList[i] > bigger){ 
                    bigger = numberList[i];
                }
                if(numberList[i] < smaller){
                    smaller = numberList[i]
                }
                sum += numberList[i];
    
            }
            return [bigger,smaller,sum];
        }
        return [];
    }


    /**
     * This method validates whether the list is numeric or not.
     * @param listItems @typeParam any []
     * @returns if a list is of type number or not
     */

    private validatesIfItIsNumericalList(listItems: any[]) : boolean {
        for(let item of listItems){ 
            if(typeof(item) !== 'number'){
                return false;
            }
        }
        return true;
    }  

}

let listNumbers: any [] = [5,'dell',4,true];
let numberI = new ArrayRelevantDataImperative(listNumbers);

console.log(numberI.getRelvantNumber());
