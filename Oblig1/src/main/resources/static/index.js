const billettListe = [];
function visbillettListe(){
let ut = "<table><tr>"+
    "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
    "</tr>";
    for (let b of billettListe){
    ut+="<tr>";
    ut+="<td>"+b.Film+"</td><td>"+b.Antall+"</td><td>"+b.Fornavn+"</td><td>"+b.Etternavn+"</td><td>"
        +b.Telefonnr+"</td><td>"+b.Epost+"</td>";
    ut+="</tr>";
    }
    document.getElementById("billettListe").innerHTML=ut;
    function choose(){
        alert("Valgt: "+document.getElementById("Film").value);
    }
    function registrer(){
        const Film = document.getElementById("Film").value;
        const Antall = document.getElementById("Antall").value;
        const Fornavn = document.getElementById("Fornavn").value;
        const Etternavn = document.getElementById("Etternavn").value;
        const Telefonnr = document.getElementById("Telefonnr").value;
        const Epost = document.getElementById("Epost").value;
    }
    const person ={
        Film : Film,
        Antall : Antall,
        Fornavn : Fornavn,
        Etternavn : Etternavn,
        Telefonnr : Telefonnr,
        Epost : Epost,
    };
    billettListe.push(person);
    document.getElementById("Film").value="";
    document.getElementById("Antall").value="";
    document.getElementById("Fornavn").value="";
    document.getElementById("Etternavn").value="";
    document.getElementById("Telefonnr").value="";
    document.getElementById("Epost").value="";
    visbillettListe()}
