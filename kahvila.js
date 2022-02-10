fetch('https://run.mocky.io/v3/3320e244-0bd8-45d7-8fbb-4c9750b8c2a7')
.then(response => response.json())
.then(data => nayta(data))
.catch(err =>{
    document.getElementById("vastaus").innerHTML= "<p>JSON ongelma</p>";
})

const nayta = (data) =>{
    let teksti = "";
    teksti += "<h1>" + data.yritys+"</h1>";
    teksti += "<p>Osoite: " +data.yhteystiedot.osoite+ "<br>";
    teksti += "Puhelin: " +data.yhteystiedot.puhelin+ "<br>";
    teksti += "Sähköposti: " +data.yhteystiedot.email+ "</p>";
    teksti += "<h2>Tuotteet</h2>";
    teksti += "<ul>";
    for (let i = 0; i < data.tuotteet.length; i++){
        teksti += "<li>"+data.tuotteet[i]+"</li>"
    }
    teksti += "</ul>";
    teksti += "<h2>Henkilökunta</h2>";
    for (let i = 0; i < data.henkilokunta.length; i++){
        teksti += "<li>"+data.henkilokunta[i].nimi+ ", " + data.henkilokunta[i].titteli+  "</li>"
       }

    document.getElementById("vastaus").innerHTML= teksti;
}