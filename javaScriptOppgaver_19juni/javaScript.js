let mineDyr = [
    {navn: "Millie Vanilli",
        fodselsaar: 2020,
        art: "Hund"
    },
    {navn: "Bing",
        fodselsaar: 2018,
        art: "Hund"
    },
    {navn: "Pip",
        fodselsaar: 2022,
        art: "Undulat"
    },
    {navn: "Pos",
        fodselsaar: 2022,
        art: "Undulat"
    },
    {navn: "Solveig",
        fodselsaar: 2014,
        art: "Katt"
    }]

function dyrene() {
    for (let i = 0; i < mineDyr.length; i++) {
        let navn = mineDyr[i].navn
        let fodselsaar = mineDyr[i].fodselsaar
        let art = mineDyr[i].art

        document.getElementById("dyreutskrift").innerHTML += `${navn} er født i ${fodselsaar}. Den er en ${art.toLowerCase()}, og er ${2024 - fodselsaar} år gammel. <br>`
    }
    
}

let duckene = [{
    fornavn: "Donald",
    etternavn: "Duck",
    adresse: "Andebyveien 1",
    poststed: "Andeby 1001",
    telefon: {
        privat: "900 90 900",
        jobb: "910 91 910",
    },
    epost: {
        privat: "donald@duck.no",
        jobb: "donald@andeby.no",
    }
    },
    {
    fornavn: "Ole",
    etternavn: "Duck",
    adresse: "Andebyveien 1",
    poststed: "Andeby 1001",
    telefon: {
        privat: "900 90 900",
        jobb: "400 00 400"
    },
    epost: {
        privat: "ole@duck.no",
        jobb: "ole@hakkespett.no"
    }
    }, {
    fornavn: "Dole",
    etternavn: "Duck",
    adresse: "Andebyveien 1",
    poststed: "Andeby 1001",
    telefon: {
        privat: "900 90 900",
        jobb: "401 00 401"
    },
    epost: {
        privat: "dole@duck.no",
        jobb: "dole@hakkespett.no"
    }
    }, {
    fornavn: "Skrue",
    etternavn: "McDuck",
    adresse: "Pengebingeveien 1",
    poststed: "Andeby 1011",
    telefon: {
        privat: "100 01 000",
        jobb: "100 10 100"
    },
    epost: {
        privat: "skrue@mcduck.no",
        jobb: "skrue@duckco.no"
    }
    }
]

function andeby() {
    for (let i = 0; i < duckene.length; i++) {
        document.getElementById("andebyutskrift").innerHTML += `
        Fornavn: ${duckene[i].fornavn}
        Etternavn: ${duckene[i].etternavn}
        Adresse: ${duckene[i].adresse}
        Poststed: ${duckene[i].poststed}
        Telefon 
            Privat: ${duckene[i].telefon.privat}
            Jobb: ${duckene[i].telefon.jobb}
        Epost
            Privat: ${duckene[i].epost.privat}
            Jobb: ${duckene[i].epost.jobb}
            
            `
    }

    for (let i = 0; i < duckene.length; i++) {
        document.getElementById("andebyutskrift").innerHTML += 
        `Den private epost-adressen til ${duckene[i].fornavn} er ${duckene[i].epost.privat}.

        `
    }
    for (let i = 0; i < duckene.length; i++) {
        document.getElementById("andebyutskrift").innerHTML += 
        `
        Fornavn: ${duckene[i].fornavn}
        Etternavn: ${duckene[i].etternavn}
        Jobbtelefon: ${duckene[i].telefon.jobb}
        `
    }
}