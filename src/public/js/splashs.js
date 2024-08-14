const splashs = ["Dont get onto any weird stuff plz", "Dont die...", "As seen on TV!", "Unlock-o-matic?", "The Bread Arachnid calls", "From Minecraft: May contain Nuts!", "i hate school, real", "Aspect was here"]
var randomNumber = Math.floor(Math.random()*splashs.length);
let splash = splashs[randomNumber]

const bar = document.querySelector("#uv-address");
bar.placeholder = splash