/*EXEMPLE1 let para = document.getElementById("container")
para.innerHTML = "<button onclick='buy()'>bonjour fatima</button >"
function buy() {
    para.innerHTML = "<p>Merci tu as un bon client</p>"
}*/
let array = []
let inp = document.getElementById("input-el")
let ul = document.getElementById("listeAdd")
let ull = document.getElementById("sa")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("array"))
let dele = document.getElementById("del")
let saveBtn = document.getElementById("SAVE")
const tabs = [
    { url: "https://www.linkedin.com/in/per-harald-borgen/" }
]
saveBtn.addEventListener("click", function () {
    //console.log(tabs[0].url) //Pour afficher the url without {}[]
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        for (let j = 0; j < tabs.length; j++) {
            ull.innerHTML += `<li>
                  <a href="#"> ${tabs[0].url}
          </li> `

            // Cette méthode est travaill mais lorseque on ecrire queque chose on input et faire click the url qui existe devient sa place dans click
            //array.push(tabs[0].url)
            //localStorage.setItem("array", JSON.stringify(array))
            //render(array)

        }
    })

})

dele.addEventListener("dblclick", function () {
    console.log("double click")
    localStorage.clear()
    array = []
    move()

})


console.log(leadsFromLocalStorage)
function buy() {
    array.push(inp.value)
    localStorage.setItem("array", JSON.stringify(array))
    console.log(array)
    move()
    clear()

}
function move() {
    let AAAA = ""/*PUR MONTRER QUE CE VARIABLE EST UN CHAINE DE CHARACTERE*/
    for (i = 0; i < array.length; i++) {
        /* AAAA += "<li>" + "<a href='#'>" + array[i] + "</a>" + "</li>"*/
        /*methode2 */   AAAA += `
    <li>
           <a  href='#'>
               ${array[i]}
           </a>
       </li>
   `
    }
    ul.innerHTML = AAAA
}
function clear() {
    if (inp.value != "") {
        inp.value = ""

    }

}
