const array = [
    "True wisdom comes not from knowledge, but from understanding.",
        "Patience is a virtue that can take you far.",
        "Every day is a second chance.",
        "Happiness often sneaks in through a door you didn't know you left open.",
        "The greatest risk is not taking one.",
        "Believe in yourself and all that you are.",
        "Success is a journey, not a destination.",
        "A journey of a thousand miles begins with a single step.",
        "Dream big and dare to fail.",
        "Your life does not get better by chance, it gets better by change."
];
const randomElement = getRandomElement(array);

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


