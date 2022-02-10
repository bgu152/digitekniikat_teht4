fetch("http://gis.vantaa.fi/rest/tyopaikat/v1/Tekninen ala")
.then(response => response.json())
.then(data => nayta(data))
.catch(err => {
    console.error(err);
    document.getElementById("vantaanDuunit").innerHTML = "<p>JSON ongelma</p>";
})

const nayta = (data) =>{
    let teksti = "<h1>Vantaan työpaikat</h1>";
    teksti += "<ul>";
    for(let i = 0; i < data.length; i++){
        teksti+="<li>"+data[i].tyotehtava+", " + data[i].osoite + ", " + "<a href=" + data[i].linkki +" >" + "linkki" + "</a>" + "  </li>"
    }
    teksti+="</ul>"
    document.getElementById("vantaanDuunit").innerHTML = teksti;
}