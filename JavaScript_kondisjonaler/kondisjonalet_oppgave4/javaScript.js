function kmtTilMph() {
    let kmt = Number(document.getElementById("kmt").value)
    let mph = 0.621
    let fart = kmt * mph
    document.getElementById("kmtIMph").innerHTML = `${kmt} kilometer i timer tilsvarer ${fart} miles per hour.`

}

function mphTilKmt() {
    let mph = Number(document.getElementById("mph").value)
    let kmt = 1.609
    let fart = (mph * kmt)
    document.getElementById("mphIKmt").innerHTML = `${mph} miles per hour tilsvarer ${fart} kilometer i timen.`
}