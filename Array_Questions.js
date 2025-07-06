 /* ============================================
    FUNCTION 1: Reverse Array 
   ============================================ */
function reverseArray(arr) {
    // Loop sirf array ki HALF length tak chalega
    // Kyunki reverse karne ke liye har element ko ek hi baar swap karna hai
    // Agar poori length tak loop chalate to elements do baar swap ho jayenge aur array wapas apni original position par aa jayenge
    for (let i = 0; i < arr.length / 2; i++) {
        
        // Current element ko temporary variable me store kiya Taki swap karte time value lost na ho
        let temp = arr[i];
        
        // Start wale index par, END wale element ko rakh diya
        // arr.length - 1 - i => ye formula END se corresponding index nikalta hai
        // Jaise: length = 6, i=0 => index = 5 (last element)
        //        length = 6, i=1 => index = 4 (second last element)
        arr[i] = arr[arr.length - 1 - i];
        
        // END wale index par, temp me stored purani START wali value rakh di
        // Isse swap complete ho gaya
        arr[arr.length - 1 - i] = temp;
    }
    
    return arr;  // Modified array return kar diya
}

const arr = [1, 2, 3, 4, 5, 6];
const reversedArr = reverseArray(arr);
console.log(reversedArr); // Output: [6, 5, 4, 3, 2, 1]



