// ye function ek string ko reverse karta hai
// example: "helloWorld" -> "dlroWolleh"

function reverseSting(str) {
    let reversed = ''; // ek empty string banayi jisme hum reversed characters store karenge

    // loop string ke last character (index = length-1) se start hoga
    for (let i = str.length - 1; i >= 0; i--)
        reversed += str[i]; // har baar current character ko 'reversed' string ke end me append kara

    return reversed; 
}


const result = reverseSting('helloWorld');
console.log(result); // result print hota :- dlroWolleh



// ye function ek sentence (jisme multiple words hain) ke words ka order reverse karta hai
// example: "i am learning javascript" -> "javascript learning am i"

function reverseSentenceWords(sentence) {
    let word = '';   // current word ko temporarily store karne ke liye 
    let result = ''; // final answer yahan store hoga

    // sentence ko last character se start karke first character tak loop karenge
    for (let i = sentence.length - 1; i >= 0; i--) {

        // agar current character space (' ') nahi hai, to wo kisi word ka hissa hai
        if (sentence[i] !== ' ') {
            // character ko 'word' ke aage (start) me jodo
            // kyunki hum ulti taraf se padh rahe hain, isliye character ko peeche nahi, aage jodna hai
            word = sentence[i] + word; 
        }
        else {
            // agar space mila, matlab ek pura word complete ho chuka hai
            result += word + ' '; // us complete word ko result me joda space ke sath
            word = ''; // word variable ko reset karo taaki agla naya word ban sake
        }
    }

    // loop khatam hone ke baad bhi last word 'word' variable me reh jata hai
    // kyunki last word ke baad koi space nahi hota jo use result me add kara 
    // isliye use manually result me jod dete hain
    result += word;

    return result; 
}


const sentenceResult = reverseSentenceWords('i am learning javascript');
console.log(sentenceResult); // result print hota :- javascript learning am i