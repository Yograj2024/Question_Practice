// ye function ek string ko reverse karta hai
// example: "helloWorld" -> "dlroWolleh"

function reverseSting(str) {
    let reversed = ''; // ek empty string banayi jisme hum reversed characters store karenge

    for (let i = str.length - 1; i >= 0; i--) // loop string ke last character (index = length-1) se start hoga
        reversed += str[i]; // har baar current character ko 'reversed' string ke end me append kara

    return reversed; 
}

const result = reverseSting('helloWorld');
console.log(result); // result print hota :- dlroWolleh



// ye function ek sentence (jisme multiple words hain) ke words ka order reverse karta hai
// example: "i am learning javascript" -> "javascript learning am i"

function reverseSentenceWords(sentence) {
    let word = '';   // current word ko temporarily store karne ke liye 
    let result = ''; 

    for (let i = sentence.length - 1; i >= 0; i--) {  // sentence ko last character se start karke first character tak loop karenge

        if (sentence[i] !== ' ') {  // agar current character space (' ') nahi hai, to wo kisi word ka hissa hai
            // character ko 'word' ke aage (start) me jodo
            // kyunki hum ulti taraf se padh rahe hain, isliye character ko peeche nahi, aage jodna hai
            word = sentence[i] + word; 
        }
        else { // agar space mila, matlab ek pura word complete ho chuka hai
            result += word + ' '; // us complete word ko result me joda space ke sath
            word = ''; // word variable ko reset karo taaki agla naya word ban sake
        }
    }

    // loop khatam hone ke baad bhi last word 'word' variable me reh jata hai
    // kyunki last word ke baad koi space nahi hota jo use result me add kara 
    result += word;
    return result; 
}

const sentenceResult = reverseSentenceWords('i am learning javascript');
console.log(sentenceResult); // result print hota :- javascript learning am i



// ye function sentence ke word ko individually reverse karta hai
// lekin words ka order same hi rakhta hai

function reverseEachWord(sentence) {
    let word = '';   // temporary storage
    let result = ''; 
    let reversedLastWord = '';

    for (let i = 0; i < sentence.length; i++) {   // sentence ko start se end tak (left to right) padhenge

        if (sentence[i] !== ' ') { // agar current character space nahi hai, to wo kisi word ka hissa hai
            word += sentence[i]; // character ko 'word' ke end me joda
        }
        else {
            // agar space mil gaya, matlab ek word complete ho chuka hai and is word ko reverse karke result me jodenge
            let reversedWord = '';

            // word ke characters ko last se first tak padho aur reversedWord me joda
            for (let j = word.length - 1; j >= 0; j--) 
                reversedWord += word[j];

            result += reversedWord + ' '; // reversed word ko result me joda, sath me ek space bhi
            word = ''; // word ko reset kar do taaki agla naya word ban sake
        }
    }

    // loop khatam hone ke baad last word 'word' variable me reh jata hai kyunki last word ke baad koi space nahi hota
    for (let j = word.length - 1; j >= 0; j--) 
        reversedLastWord += word[j];

    result += reversedLastWord;
    return result; 
}

const output = reverseEachWord('i love you');
console.log(output); // Output: "i evol uoy"