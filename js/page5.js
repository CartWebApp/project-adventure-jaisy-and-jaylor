const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor")

const words = ["Hello?", "Sweetie...(Mom)", "Is everything okay?", "Sweetie, your grandfather has passed away unexpectedly. (Mom)", "What?! How?", "I'll explain more when I get home, I promise. (Mom)", "Okay...See you later then Mom."];
const typingDelay = 200;
const erasingDelay = 200;
const newLetterDelay = 2000;
let index = 0;
let charIndex = 0;

document.addEventListener('DOMContentLoaded', ()=> {
    if (words.length) {
        setTimeout(type, newLetterDelay);
    }
})

function type() {
    if (charIndex < words[index].length) {
        typedTextSpan.tectContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, newLetterDelay);
    } else {
        setTimeout(earse, newLetterDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.tectContent = words[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay)
    } else {
        index++
        id (index >= words.length); {
            index = 0;
        }
        setTimeout(type, typingDelay + 1100);
    }
}