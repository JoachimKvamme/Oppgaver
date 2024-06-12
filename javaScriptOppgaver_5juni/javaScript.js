// Oppgave 1

function isPrime(num) {
    var sqrtnum=Math.floor(Math.sqrt(num));
      var prime = num != 1;
      for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
          if(num % i == 0) {
              prime = false;
              break;
          }
      }
      return prime;
  }

function partallOddetall() {

    let tall = Number(document.getElementById("tall").value)

    if (tall == 2) {
        document.getElementById("resultatTall").innerHTML = `${tall} er et partall og et primtall.`
    } else if (tall == 0) {
        document.getElementById("resultatTall").innerHTML = `${tall} er verken et partall, et oddetall eller et primtall. Null er bare null.`
    } else if ((tall % 2 != 0 && tall < 0) || (tall % 2 != 0 && !(isPrime(tall)))) {
        document.getElementById("resultatTall").innerHTML = `${tall} er et oddetall, men ikke et primtall.`
    } else if (tall % 2 == 0) {
        document.getElementById("resultatTall").innerHTML = `${tall} er partall.`
    } else if (tall % 2 != 0 && isPrime(tall) && tall > 0)  {
        document.getElementById("resultatTall").innerHTML = `${tall} er oddetall, og et primtall.`
    }

    document.getElementById("tall").focus()
    document.getElementById("tall").value = ""
}

// Oppgave 2

function høyereLavere() {
    let tall1 = Number(document.getElementById("høyLav").value)
    let tall2 = Number(document.getElementById("høyLavTo").value)

    if (tall1 > tall2) {
        document.getElementById("resultatHoyLav").innerHTML = `${tall1} er høyere enn ${tall2}`
    } else if (tall1 < tall2) {
        document.getElementById("resultatHoyLav").innerHTML = `${tall1} er lavere enn ${tall2}`
    } else {
        document.getElementById("resultatHoyLav").innerHTML = `${tall1} er identisk med ${tall2}`
    }
}

// Oppgave 3

function dagerPerMaaned() {
    let maaned = document.getElementById("maaned").value.toLowerCase()

    switch (maaned) {
        case "januar":
            document.getElementById("dagerPerMaaned").innerHTML = `${maaned.charAt(0).toUpperCase() + maaned.slice(1)} har 31 dager`
            break
        case "februar":
            document.getElementById("dagerPerMaaned").innerHTML = `${maaned.charAt(0).toUpperCase() + maaned.slice(1)} har 28 dager`
            break
        case "mars":
            document.getElementById("dagerPerMaaned").innerHTML = `${maaned.charAt(0).toUpperCase() + maaned.slice(1)} har 31 dager`
            break
        case "april":
            document.getElementById("dagerPerMaaned").innerHTML = `${maaned.charAt(0).toUpperCase() + maaned.slice(1)} har 30 dager`
            break
        case "mai":
            document.getElementById("dagerPerMaaned").innerHTML = `${maaned.charAt(0).toUpperCase() + maaned.slice(1)} har 31 dager`
            break
        case "juni":
            document.getElementById("dagerPerMaaned").innerHTML = `${maaned.charAt(0).toUpperCase() + maaned.slice(1)} har 30 dager`
            break
        case "juli":
            document.getElementById("dagerPerMaaned").innerHTML = `${maaned.charAt(0).toUpperCase() + maaned.slice(1)} har 31 dager`
            break
        case "august":
            document.getElementById("dagerPerMaaned").innerHTML = `${maaned.charAt(0).toUpperCase() + maaned.slice(1)} har 31 dager`
            break
        case "september":
            document.getElementById("dagerPerMaaned").innerHTML = `${maaned.charAt(0).toUpperCase() + maaned.slice(1)} har 30 dager`
            break
        case "oktober":
            document.getElementById("dagerPerMaaned").innerHTML = `${maaned.charAt(0).toUpperCase() + maaned.slice(1)} har 31 dager`
            break
        case "november":
            document.getElementById("dagerPerMaaned").innerHTML = `${maaned.charAt(0).toUpperCase() + maaned.slice(1)} har 30 dager`
            break
        case "desember":
            document.getElementById("dagerPerMaaned").innerHTML = `${maaned.charAt(0).toUpperCase() + maaned.slice(1)} har 31 dager`
            break
        case "1":
            document.getElementById("dagerPerMaaned").innerHTML = `Januar har 31 dager`
            break
        case "2":
            document.getElementById("dagerPerMaaned").innerHTML = `Februar har 28 dager`
            break
        case "3":
            document.getElementById("dagerPerMaaned").innerHTML = `Mars har 31 dager`
            break
        case "4":
            document.getElementById("dagerPerMaaned").innerHTML = `April har 30 dager`
            break
        case "5":
            document.getElementById("dagerPerMaaned").innerHTML = `Mai har 31 dager`
            break
        case "6":
            document.getElementById("dagerPerMaaned").innerHTML = `Juni har 30 dager`
            break
        case "7":
            document.getElementById("dagerPerMaaned").innerHTML = `Juli har 31 dager`
            break
        case "8":
            document.getElementById("dagerPerMaaned").innerHTML = `August har 31 dager`
            break
        case "9":
            document.getElementById("dagerPerMaaned").innerHTML = `September har 30 dager`
            break
        case "10":
            document.getElementById("dagerPerMaaned").innerHTML = `Oktober har 31 dager`
            break
        case "11":
            document.getElementById("dagerPerMaaned").innerHTML = `November har 30 dager`
            break
        case "12":
            document.getElementById("dagerPerMaaned").innerHTML = `Desember har 31 dager`
            break
        default:
            document.getElementById("dagerPerMaaned").innerHTML = `Du har tastet inn en ugyldig verdi.`
    }
}

// Oppgave 4

let antallTall = 0
let sum = 0
let intervall = 1
let gjennomsnitt = 0

function leggTil() {
    let innførtTall = Number(document.getElementById("innførtTall").value)
    sum += innførtTall
    antallTall += intervall

    document.getElementById("antallTall").innerHTML = `Antall tall: ${antallTall}`
    document.getElementById("totalsum").innerHTML = `Totalsum: ${sum}`
    document.getElementById("innførtTall").value = ""
    document.getElementById("innførtTall").focus()
    document.getElementById("tallListe").innerHTML += `${antallTall}. ${innførtTall} \r\n`

    
}

function nullstill() {
    sum = 0
    antallTall = 0
    gjennomsnitt = 0

    document.getElementById("antallTall").innerHTML = `Antall tall: ${antallTall}`
    document.getElementById("totalsum").innerHTML = `Totalsum: ${sum}`
    document.getElementById("resultatGjennomsnitt").innerHTML = `Gjennomsnitt: ${gjennomsnitt}`
    document.getElementById("tallListe").innerHTML = ""
}


function gjennomsnittberegning() {
    gjennomsnitt = (sum / antallTall).toFixed(2)

    document.getElementById("resultatGjennomsnitt").innerHTML = `Gjennomsnitt: ${gjennomsnitt}`
}

// Oppgave 5

let personer = ["Ole", "Dole", "Doffen", "Donald", "Dolly"]

function andebyInn() {
    let nyttElement = document.createElement("p")
    let innholdNy = document.createTextNode("Hallo!")

    nyttElement.appendChild(innholdNy)
    let elementGammelt = document.getElementById("leggTilKnapp")

    document.body.insertBefore(nyttElement, elementGammelt)

    let andebyListe = document.createElement("ol")
    andebyListe.setAttribute("id", "andebyliste")
    document.body.insertBefore(andebyListe, elementGammelt)

    let listePunkt1 = document.createElement("li")
    listePunkt1.innerHTML = personer[0]
    document.getElementById("andebyliste").appendChild(listePunkt1)

    let listePunkt2 = document.createElement("li")
    listePunkt2.innerHTML = personer[1]
    document.getElementById("andebyliste").appendChild(listePunkt2)

    let listePunkt3 = document.createElement("li")
    listePunkt3.innerHTML = personer[2]
    document.getElementById("andebyliste").appendChild(listePunkt3)

    let listePunkt4 = document.createElement("li")
    listePunkt4.innerHTML = personer[3]
    document.getElementById("andebyliste").appendChild(listePunkt4)

    let listePunkt5 = document.createElement("li")
    listePunkt5.innerHTML = personer[4]
    document.getElementById("andebyliste").appendChild(listePunkt5)
}

function leggTilInnbygger() {
    let andebo = document.getElementById("innbygger").value
    let nyttListePunkt = document.createElement("li")
    nyttListePunkt.innerHTML = andebo
    document.getElementById("andebyliste").appendChild(nyttListePunkt)
}



