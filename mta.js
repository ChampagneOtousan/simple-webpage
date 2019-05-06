// for every item in that array, make a button that displays on the screen.
// button innerText = the item of the array
// display on screen




let STOPS = ["8th ave", "6th ave", "14th st- union square", "3 ave", "1st ave", "bedford ave", "lorimer st", "graham ave", "grand st", "montrose ave", "morgan ave"]
let dest = prompt("What is your destination?").toLowerCase()
let div = document.querySelector("#stops")

for (stop of STOPS) {
  console.log(stop)
  if (dest == stop) {
    console.log("Leaving Train")
    break
  }
}
 for (stop of STOPS) {
   let el = document.createElement("button")
   el.innerText = stop
   div.appendChild(el)
 }
