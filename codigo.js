function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function election(play) {
    let resultado = ""
    if(play == 1) {
        result = "ice rock🧊"
    } else if(play == 2) {
        result = "plant rock🍃"
    } else if(play == 3) {
        result = "fire rock🔥"
    } else{
        result = "BAD ELECTION❌"    
    }
    return result
}

// 1 ice rock, 2 plant rock, 3 fire rock
let player = 0
let pc = 0
let triumphts = 0
let losses = 0

while (triumphts < 3 && losses < 3) {
    pc = aleatorio(1,3) 
    player = prompt("select: 1 for ice rock, 2 for plant rock, 3 for fire rock")
    //alert("Select " + player)
    
    alert("PC select: " + election(pc))
    alert("you select: " + election(player))

    // !COMBAT¡
    if(pc == player) {
        alert("EMPATE🤝")
    } else if(player == 1 && pc == 3) {
        alert("YOU WIN🏆🥇")
        triumphts = triumphts + 1
    } else if(player == 2 && pc == 1) {
        alert("YOU WIN🏆🥇")
        triumphts = triumphts + 1
    } else if(player == 3 && pc == 2) {
        alert("YOU WIN🏆🥇")
        triumphts = triumphts + 1
    } else {
        alert("YOU LOSE❌")
    }   losses = losses + 1
}

alert("You win " + triumphts + " times. you lose " + losses
+ " times."
)
