// let boxes = document.querySelectorAll(".box")

// console.log(boxes)
//  document.querySelectorAll(".box").forEach((e)=>{
//     e.style.backgroundColor="red"
//  })

let e = document.getElementsByTagName("div")
console.log(e)

// HTML Collection(6) [div.container, div.box, div.box, div#redbox.box, div.box, div.box, redbox: div#redbox.box]
// e[4].matches("#redbox")
// false
// e[3].matches("#redbox")
// true









// HTMLCollection(6) [div.container, div.box, div.box, div#redbox.box, div.box, div.box, redbox: div#redbox.box]
// documer
// document.querySelector(".container").contains(e[2])
// true
// document.querySelector(".container").contains(e[3])
// true
// document.querySelector(".container").contains(e[7])
// false
// document.querySelector(".container").contains(body)
// document.querySelector(".container").contains
// document.querySelector(".container").contains(document.querySelector("body"))
// false