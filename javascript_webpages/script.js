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


// for convert currency script 
const conversionRates = {
    usd: { usd: 1, gbp: 2.03032, cad: 1.01941, eur: 1.41544, aud: 0.88297, },
    gbp: { usd: 0.49246, gbp: 1, cad: 0.50221, eur: 0.69714, aud: 0.43497, },
    cad: { usd: 0.98054, gbp: 1.99169, cad: 1, eur: 1.38814, aud: 0.86613, },
    eur: { usd: 0.70641, gbp: 1.43448, cad: 0.72037, eur: 1, aud: 0.62382, },
    aud: { usd: 1.13262, gbp: 2.29964, cad: 1.15498, eur: 1.60329, aud: 1, },
};

// convert currency function
function convertCurrency(baseCurrency) {
    const baseValue = parseFloat(document.getElementById(baseCurrency).value);

    if (isNaN(baseValue)) return;

    for (let currency in conversionRates[baseCurrency]) {
        if (currency !== baseCurrency) {
            const convertedValue = (baseValue * conversionRates[baseCurrency][currency]).toFixed(5);
            document.getElementById(currency).value = convertedValue;
        };
    };
}










window.onload = function() {
    displayFortune(array);
    
}


