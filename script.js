fetch('https://run.mocky.io/v3/be72c1e9-c130-427a-af22-156209ba4876')
.then(response => response.json())
.then(data => kerro(data))
.catch(err => {document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pysty hakemaan</p>"});

const kerro = (data) => {
    let teksti = "";
    teksti = "<h1>" + data.otsikko + "</h1>";
    teksti += "<p>" + data.kuvaus+  "</p>";
    teksti += "<p><img src='" +data.kuva+ "' alt='kuva'/></p>";
    teksti += "<h3>Opintojakso: " +data.opintojakso.nimi + "</h3>";
    teksti += "<ul>";
    for(let i = 0; i < data.sisalto.length; i++){
        teksti += "<li>" + data.sisalto[i]+"</li>"
    }
    teksti += "</ul>";

    document.getElementById("vastaus").innerHTML= teksti;
}