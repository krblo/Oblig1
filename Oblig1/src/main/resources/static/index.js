const billetListe = [];
function visbilletListe() {
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";
    for (let b of billetListe) {
        ut += "<tr>";
        ut += "<td>" + b.Film + "</td><td>" + b.Antall + "</td><td>" + b.Fornavn + "</td><td>" + b.Etternavn + "</td><td>"
            + b.Telefonnr + "</td><td>" + b.Epost + "</td>";
        ut += "</tr>";
    }
    document.getElementById("billetListe").innerHTML = ut;
}
    function registrer(){
        const Film = document.getElementById("Film").value;
        const Antall = Number(document.getElementById("Antall").value);
        const Fornavn = document.getElementById("Fornavn").value;
        const Etternavn = document.getElementById("Etternavn").value;
        const Telefonnr = document.getElementById("Telefonnr").value;
        const Epost = document.getElementById("Epost").value;

    const person ={
        Film : Film,
        Antall : Antall,
        Fornavn : Fornavn,
        Etternavn : Etternavn,
        Telefonnr : Telefonnr,
        Epost : Epost,
    };
    billetListe.push(person);
    document.getElementById("Film").value="";
    document.getElementById("Antall").value="";
    document.getElementById("Fornavn").value="";
    document.getElementById("Etternavn").value="";
    document.getElementById("Telefonnr").value="";
    document.getElementById("Epost").value="";
    visbilletListe()}

function slett(){
    billetListe.splice(0,billetListe.length);
    document.getElementById("billetListe").innerHTML="";
}
