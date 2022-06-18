document.querySelector('.rollDice').addEventListener('click', function(){
    let diceNumber = Math.floor((Math.random()*6) + 1);
    document.getElementById("dicePic").src = `./images/dice-${diceNumber}.png`
});