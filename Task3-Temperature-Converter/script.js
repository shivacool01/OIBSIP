const input = document.getElementById("temp");
const fromunit = document.getElementById("tempType");
const tounit = document.getElementById("tempType2");
const resultText = document.querySelector(".ans p");
const btn = document.getElementById("btn");
const formula = document.querySelector(".formula p");

btn.addEventListener("click" , () => {

    let value = input.value;

    if(value === ""){
        resultText.innerText = "Enter a value";
        return;
    }


    value = Number(value);

    let valueInCelsius;

    if(fromunit.value === "cToF"){
        valueInCelsius = value;
    }
    else if(fromunit.value === "fToC"){
        valueInCelsius = (value - 32) * 5 / 9;
    }
    else if(fromunit.value === "kToC"){
        valueInCelsius = value - 273.15;
    }


    let finalValue;
    if(tounit.value === "cToF"){
        finalValue = valueInCelsius;
    }
    else if(tounit.value === "fToC"){
        finalValue = (valueInCelsius * 9 / 5 ) + 32;
    }
    else if(tounit.value === "kToC"){
        finalValue = valueInCelsius + 273.15;
    }

    resultText.innerText = finalValue.toFixed(2);

    if(fromunit.value === "cToF" && tounit.value === "cToF"){
        formula.innerText = "NONE";
    }
    else if(fromunit.value === "cToF" && tounit.value === "fToC"){
        formula.innerText = "("+value+"* 9 / 5) + 32 = "+finalValue;
    }
    else if(fromunit.value === "cToF" && tounit.value === "kToC"){
        formula.innerText = value+" + 273.15 = "+finalValue.toFixed(2);
    }

    else if(fromunit.value === "fToC" && tounit.value === "cToF"){
        formula.innerText = "( "+value+ "- 32 ) * 5 / 9 = "+finalValue.toFixed(2);
    }
    else if(fromunit.value === "fToC" && tounit.value === "fToC"){
        formula.innerText = "NONE";
    }
    else if(fromunit.value === "fToC" && tounit.value === "kToC"){
        formula.innerText = "( "+value+" - 32 ) * 5 / 9 + 273.15 = "+finalValue.toFixed(1);
    }
    
    else if(fromunit.value === "kToC" && tounit.value === "cToF"){
        formula.innerText = value + "- 273.15 = "+finalValue.toFixed(2);
    }
    else if(fromunit.value === "kToC" && tounit.value === "fToC"){
        formula.innerText = "( "+value+" - 273.15 ) * 9 / 5 + 32 = " +finalValue.toFixed(2);
    }
    else if(fromunit.value === "kToC" && tounit.value === "kToC"){
        formula.innerText = "NONE";
    }
});