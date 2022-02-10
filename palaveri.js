fetch("https://run.mocky.io/v3/bb684692-6498-479a-9a4d-95c61032cb35")
.then(response => response.json())
.then(data => nayta(data))
.catch(err =>{
    console.error(err);
    document.getElementById("palaveri").innerHTML = "<p>JSON ongelma</p>";
})

const nayta = (data) =>{
    let teksti = "<h1>Palaverin tiedot</h1>";
    teksti += "<p>Aihe: " + data.aihe +"<br>";
    teksti += "Paikka: " + data.paikka +"<br>";
    teksti += "Osallistujien lukumäärä: " + data.osallistujat_lkm +"<br></p>";
    teksti += "<h3>Osallistujat</h3>";
    teksti += "<ul>";
    for (let i = 0; i < data.osallistujat.length;i++){
        teksti +="<li>" + data.osallistujat[i]+"</li>";
    }
    teksti += "</ul>";

    





    document.getElementById("palaveri").innerHTML = teksti;

}