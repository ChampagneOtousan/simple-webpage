console.log("Hello World")

function sayHello() {
  document.write("Hello User")
}

sayHello()

let x1 = document.getElementsByClassName("header1")[0]
console.log(x1)

let x2 = document.getElementsByTagName("h1")[0]
console.log(x2)

let x3 = document.getElementById("header1")
console.log(x3)

let x4 = document.querySelector("#header1")
console.log(x4)
