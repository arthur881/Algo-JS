//creation of all the div
for(i = 0; i < 21; i++) {
    var createDiv = document.createElement('div')
    createDiv.className = "square"
    document.getElementById('sqare-wrapper').appendChild(createDiv)
}

var square = document.querySelectorAll('.square')
var nextPlayerBtn = document.getElementById('nextP')
var player = document.getElementById('player')
let clickCounter = 0


//make diseapear the div on click and add 1 to the click counter so the player can pickup max 3 items 
square.forEach(function(item) {
    item.addEventListener('click', function() {
        if (clickCounter < 3) {
            item.classList.add('gone')
            clickCounter += 1
            console.log(clickCounter)
        }
    })    
})

//Changing the turn of the players
nextPlayerBtn.addEventListener('click', function(){
    if (player.innerText == 1 && clickCounter != 0) {
        clickCounter = 0
        player.innerHTML = '2'
        console.log(clickCounter)
    } else if(clickCounter != 0){
        clickCounter = 0
        player.innerHTML = '1'
    }
})