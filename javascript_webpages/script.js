// array for the generated fortune
const array = [
    "True wisdom comes not from knowledge, but from understanding",
        "Just one small positive thought in the morning can change your whole day",
        "Every day is a second chance",
        "You must be the change you wish to see in the world",
        "The greatest risk is not taking one.",
        "Believe in yourself and all that you are.",
        "Success is not final, failure is not fatal: it is the courage to continue that counts",
        "Love yourself first and everything else falls into line",
        "You only live once, but if you do it right, once is enough",
        "Your life does not get better by chance, it gets better by change."
];


function displayFortune(array) {
    
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomElement = array[randomIndex];
    document.getElementById('fortune-text').innerText = randomElement;
    


    // var myArray = [
    //     "Apples",
    //     "Bananas",
    //     "Pears"
    //   ];
      
    //   var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    //   document.getElementById('fortune-text').innerHTML = randomItem;
    
}

window.onload = function() {
    displayFortune(array);
    
}


