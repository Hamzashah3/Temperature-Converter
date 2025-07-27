const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
function converttemp(){
    if(this === celsius){
        const celsius = parseFloat(celsiusInput.value);
        if(!isNaN(celsius)){
            fahrenheitInput.value = ((celsius * 9/5 + 32).toFixed(2));
            kelvinInput.value =(celsius + 273.15);
        }else{
            fahrenheitInput.value = "";
            kelvinInput.value = "";
        }
    }
    else if (this === fahrenheit) {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        if(!isNaN(fahrenheit)){
        celsiusInput.value = ((fahrenheit - 32) * 5/9).toFixed(2);
        kelvinInput.value = ((fahrenheit - 32) * 5/9 + 273.15).toFixed(2);
        }else{
            celsiusInput.value = "";
            kelvinInput.value = "";        
        }
        
    }
    else if(this === kelvin){
        const kelvin = parseFloat(kelvinInput.value);
        if(isNaN(kelvin)){
            celsiusInput.value = (kelvin - 273.15).toFixed(2);
            fahrenheitInput.value = ((kelvin - 273.15) * 9/5 + 32).toFixed(2);
        }else{
            celsiusInput.value = "";
            fahrenheitInput.value = "";

        }
    }
    }
    celsiusInput.addEventListener("input",converttemp)
    fahrenheitInput.addEventListener("input",converttemp)
    kelvinInput.addEventListener("input",converttemp)

