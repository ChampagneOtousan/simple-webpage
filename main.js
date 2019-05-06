console.log("Hello World")

let answer = prompt("How are you doing?").toLowerCase()

if (answer == "good") {
  console.log("That\'s great!")
  let answer2 = prompt("Where are you from?").toLowerCase()
  if (answer2 == "smashville") {
    console.log("YEEEEEURD!")
  }
} else if (answer == "bad") {
  console.log("Ol' Roy gotchu huh?")
} else {
  console.log("Get good, dawg")
}

// Different methods of selection

// let x1 = document.getElementsByClassName("header1")[0]
// console.log(x1)
//
// let x2 = document.getElementsByTagName("h1")[0]
// console.log(x2)
//
// let x3 = document.getElementById("header1")
// console.log(x3)
//
// let x4 = document.querySelector("#header1")
// console.log(x4)
