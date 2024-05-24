function aldersfunksjon() {
    alder = Number(document.getElementById("alder").value)
    if (alder > 120) {
        document.getElementById("myndighet").innerHTML = `Din alder er for høy, jeg tror ikke på den.`
    }
    else if (alder > 66 && alder < 120) {
        document.getElementById("myndighet").innerHTML = `Du er myndig, og (forhåpentlig) pensjonist.`
    } 
    else if (alder > 17) {
        document.getElementById("myndighet").innerHTML = `Du er myndig.`
    }
    else if (alder < 18 && alder > 0) {
        document.getElementById("myndighet").innerHTML = `Du er ikke myndig.`
    }
    
}