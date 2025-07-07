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



// ============================================
// FUNCTION 2: Array Palindrome hai ya nahi check karna
// Palindrome = jo array start se aur end se same dikhta hai
// Jaise: [1,2,3,2,1] => palindrome hai
//        [1,2,3,4,5] => palindrome nahi hai
// ============================================

function isPalindrome(arr) {
    // Yahan bhi sirf HALF length tak loop chalta hai
    // Kyunki har pair (start-index aur uske corresponding end-index) ek hi baar compare karna kaafi hai
    for (let i = 0; i < arr.length / 2; i++) {
        
        // START wale element ko uske corresponding END wale element se compare kiya
        // Agar dono match nahi karte, to array palindrome nahi hai
        if (arr[i] !== arr[arr.length - 1 - i]) {
            // Mismatch milte hi turant "No" return kar diya Poore loop ko complete karne ki zarurat nahi 
            // kyo ki first and last elemtent match nahi karte to palinrome nahi hai  (early exit for efficiency)
            return ["No", arr];
        }
    }
    
    // Agar loop poora chal gaya aur koi mismatch nahi mila, to iska matlab array palindrome hai
    return ["yes", arr];
}

const palindromeArr = [1, 2, 3, 2, 1];      // Ye palindrome hai
const nonPalindromeArr = [1, 2, 3, 4, 5];   // Ye palindrome nahi hai

// Function call karke result destructure kiya
// isPalindrome() ek array return karta hai: [status, originalArray]
// Destructuring se dono values alag-alag variables me store ho gayi
const [isPal, passArr] = isPalindrome(nonPalindromeArr);
console.log(`${isPal} array is palindrome \nand the array is : [${passArr}]`);
// Output: "No array is palindrome 
//          and the array is : [1,2,3,4,5]"