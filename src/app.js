
function startGame() {
    alert("Game Started!");
    // Here you would initiate the game logic
}

function showOptions() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('options').style.display = 'block';
}

function backToMenu() {
    document.getElementById('options').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}

function exitGame() {
    alert("Game Exited!");
    // Here you would add logic to close the game or redirect
}
