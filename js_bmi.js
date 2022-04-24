function calc(){
    var bmi;
    var vysledek = document.getElementById("vysledek");
    var vyska = document.getElementById("vyska").value;
    var vaha = document.getElementById("vaha").value;

    bmi = (vaha / Math.pow( (vyska/100), 2 )).toFixed(1);

    vysledek.textContent = bmi;

    console.log(vysledek)
    console.log(bmi)


    if (vyska < 80 || vaha < 20) {
        zarazeni = "Nesmyslné údaje! Zadejte pravdivé hodnoty."
        vysledek.style.color = "#ff5e57";
        vysledek.textContent = "😡";
    }
    else if(bmi < 16.5){
        zarazeni = "Podvýžíva ☠️";
        vysledek.style.color = "#ff5e57";
    }
    else if(bmi >= 16.5 && bmi < 18.5){
        zarazeni = "Podváha 🦴";
        vysledek.style.color = "#ffc44d";
    }

    else if( bmi >= 18.5 && bmi < 25 ){
        zarazeni = "Normální váha 😎";
        vysledek.style.color = "#0be881";
    }

    else if( bmi >= 25 && bmi < 30 ){
        zarazeni = "Nadváha 😮";
        vysledek.style.color = "#ff884d";
    }

    else if(bmi >=30 && bmi <=400 ){
        zarazeni = "Obezita 🫃";
        vysledek.style.color = "#ff5e57";
    }
    else{
        zarazeni = "Nesmyslná hodnota zadejte správné hodnoty";

    }
    document.getElementById("zarazeni").textContent = zarazeni;
}