let hash = document.getElementById("hash")
let colorr = document.getElementById("color")
let btn = document.getElementById("btn")

let hashLength = 6;
let specialChar = "#"
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let numbers = "1234567890"
let allChar = specialChar + upperCase + lowerCase + numbers

function createHash() {
    let hashChar = ""
    hashChar += specialChar[Math.floor(Math.random()*specialChar.length)]
    hashChar += Math.floor(Math.random() * 16777)
    
    let randomColor = hashChar.toString(16)
    hash.value = randomColor
    console.log(randomColor);
    
    document.getElementById("color").style.background = randomColor
} 



