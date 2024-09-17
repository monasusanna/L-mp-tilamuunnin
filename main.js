function muunnin(){

    const yksikko = document.getElementById('yksikko').value;
    const syote = parseFloat(document.getElementById('syote').value);
    const desimaali = document.querySelector('input[name="desimaali"]:checked').value;


    let muunnettuLämpötila;



    if (yksikko === 'cf') {
        muunnettuLämpötila = (syote * 1,8 + 32);
        if(muunnettuLämpötila < -459,67){
            document.getElementById('vastus').innerHTML = "Huomio! Lämpötila on pienempi kuin absoluuttinen nollapiste!";
        }
    }


        else if (yksikko === 'ck') {
            muunnettuLämpötila = syote + 273,15;
            if(muunnettuLämpötila < 0){
                document.getElementById('vastus').innerHTML = "Huomio! Lämpötila on pienempi kuin absoluuttinen nollapiste!";
            }
        }


        else if (yksikko === 'fc') {
            muunnettuLämpötila = (syote - 32) / 1,8;
            if(muunnettuLämpötila < -273,15){
                document.getElementById('vastus').innerHTML = "Huomio! Lämpötila on pienempi kuin absoluuttinen nollapiste!";
            }
        }

        else if (yksikko === 'fk') {
            muunnettuLämpötila = (syote + 459,67) / 1,8;
            if(muunnettuLämpötila < 0){
                document.getElementById('vastus').innerHTML = "Huomio! Lämpötila on pienempi kuin absoluuttinen nollapiste!";
            }
        }

        else if (yksikko === 'kc') {
            muunnettuLämpötila = syote - 273,15;
            if(muunnettuLämpötila < -273,15){
                document.getElementById('vastus').innerHTML = "Huomio! Lämpötila on pienempi kuin absoluuttinen nollapiste!";
            }
        }

        else if (yksikko === 'kf') {
            muunnettuLämpötila = syote * 1,8 - 459,67
            if(muunnettuLämpötila < -459.67){
                document.getElementById('vastus').innerHTML = 'Huomio! Lämpötila on pienempi kuin absoluuttinen nollapiste!';
            }
        }

document.getElementById('vastaus').innerHTML = `Muunnettu lämpötila: ${muunnettuLämpötila.toFixed(desimaali)}`;

}






