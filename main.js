function muunnin(){

    const yksikko = document.getElementById('yksikko').value;
    const syote = parseFloat(document.getElementById('syote').value);
    const desimaali = document.querySelector('input[name="desimaali"]:checked').value;


    let muunnettuLämpötila;
    const virhe = document.getElementById('virhe');
    const vastaus = document.getElementById('vastaus');

    const nollapiste = {
        cf: -459.67,
        ck: 0,
        fc: -273.15,
        fk: 0,
        kc: -273.15,
        kf: -459.67
    };

    virhe.innerText = '';
    vastaus.innerText ='';


    if (isNaN(syote)) {
        virhe.innerHTML = 'Syötä muunnettava luku!';
        return;
    }

    if (syote < nollapiste[yksikko]) {
        virhe.innerHTML = "Huomio! Lämpötila on pienempi kuin absoluuttinen nollapiste!";
        return;
    }


    if (yksikko === 'cf') {
        muunnettuLämpötila = (syote * 1.8 + 32);
    }

        else if (yksikko === 'ck') {
            muunnettuLämpötila = syote + 273.15;
        }

        else if (yksikko === 'fc') {
            muunnettuLämpötila = (syote - 32) / 1.8;
        }

        else if (yksikko === 'fk') {
            muunnettuLämpötila = (syote + 459.67) / 1.8;
        }

        else if (yksikko === 'kc') {
            muunnettuLämpötila = syote - 273.15;
        }

        else if (yksikko === 'kf') {
            muunnettuLämpötila = syote * 1.8 - 459.67  
        }

document.getElementById('vastaus').innerHTML = `Muunnettu lämpötila: ${muunnettuLämpötila.toFixed(desimaali)}`;

}



