"use strict";
/**
 * This class instantiates an object that takes a list and filters
 *  the list of relevant numbers from an array in an imperative way.
 */
class ArrayRelevantDataImperative {
    constructor(listItems) {
        this.relevantNumbers = this.filterOutRelevantNumbers(listItems);
    }
    getRelvantNumber() {
        return this.relevantNumbers;
    }
    setRelevantNumber(listItems) {
        this.relevantNumbers = listItems;
    }
    /**
     * This method filters out the relevant numbers from the array, such as biggest, smallest and mean of numbers.
     * @param listItems @typeParam any []
     * @returns if a list is of type number return list with the highest value at position 0,
     *  the lowest at 1, and the average at position 3. Else returns a empty list
     */
    filterOutRelevantNumbers(numberList) {
        if (this.validatesIfItIsNumericalList(numberList)) {
            let bigger = numberList[0];
            let smaller = numberList[0];
            let sum = numberList[0];
            for (let i = 1; i < numberList.length; i++) {
                if (numberList[i] > bigger) {
                    bigger = numberList[i];
                }
                if (numberList[i] < smaller) {
                    smaller = numberList[i];
                }
                sum += numberList[i];
            }
            let avarege = sum / numberList.length;
            return [bigger, smaller, avarege];
        }
        return [];
    }
    /**
     * This method validates whether the list is numeric or not.
     * @param listItems @typeParam any []
     * @returns if a list is of type number or not
     */
    validatesIfItIsNumericalList(listItems) {
        for (let item of listItems) {
            if (typeof (item) !== 'number') {
                return false;
            }
        }
        return true;
    }
}
class ArrayRelevantDataFunctional {
    constructor(listItems) {
        this.relevantNumbers = this.filterOutRelevantNumbers(listItems);
    }
    getRelvantNumber() {
        return this.relevantNumbers;
    }
    setRelevantNumber(listItems) {
        this.relevantNumbers = listItems;
    }
    /**
     * This method filters out the relevant numbers from the array, such as biggest, smallest and mean of numbers.
     * @param listItems @typeParam any []
     * @returns if a list is of type number return list with the highest value at position 0,
     *  the lowest at 1, and the average at position 3. Else returns a empty list
     */
    filterOutRelevantNumbers(numberList) {
        if (this.validatesIfItIsNumericalListFunctional(numberList)) {
            let bigger = this.returnTheBiggestNumberInArrayFunctional(numberList);
            let smaller = this.returnTheSmallerNumberInArrayFunctional(numberList);
            let sum = this.returnTheAverageOfTheNumbersInArrayFunctional(numberList);
            return [bigger, smaller, sum];
        }
        return [];
    }
    /**
     * This method returns the highest value in the list
     * @param numberList @typeParam number []
     * @returns the highest number in the list
     */
    returnTheBiggestNumberInArrayFunctional(numberList) {
        return Math.max.apply(Math, numberList);
    }
    /**
     * This method returns the smaller value in the list
     * @param numberList @typeParam number []
     * @returns the smaller number in the list
     */
    returnTheSmallerNumberInArrayFunctional(numberList) {
        return Math.min.apply(Math, numberList);
    }
    /**
     * This method returns the average of all values in the list.
     * @param numberList @typeParam number
     * @returns the  the average of the numbers in the list
     */
    returnTheAverageOfTheNumbersInArrayFunctional(numberList) {
        return (numberList.reduce((previousValue, currentValue) => previousValue + currentValue)) / numberList.length;
    }
    /**
     * This method validates whether the list is numeric or not.
     * @param listItems @typeParam any []
     * @returns if a list is of type number or not
     */
    validatesIfItIsNumericalListFunctional(listItems) {
        let result = true;
        listItems.forEach((item) => { if (typeof (item) !== 'number')
            result = false; });
        return result;
    }
}
let numbersList = [5, 2, 3, 5, 8];
const anyList = [5, 'dell', 4, true];
let numberRevelevantsExempleImperative = new ArrayRelevantDataImperative(numbersList);
let numberRevelevantsExempleFunctional = new ArrayRelevantDataFunctional(numbersList);
console.log(numberRevelevantsExempleImperative.getRelvantNumber());
console.log(numberRevelevantsExempleFunctional.getRelvantNumber());
