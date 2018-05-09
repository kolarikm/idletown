const SPEED = 1000;

var gameTime = 1;

var blurTime = 0;

var gameData = {
    bux: 0,
    peeps: 0,
    houses: 0
}

var gameTimer = setInterval(() => {
    gameTime++;
    tick();
    updateDisplay();
}, SPEED);

function fastForward(deltaTime) {
    var missedTicks = (Math.round(deltaTime/1000)*1000)/1000;
}

function tick() {
    if (gameData.houses > 0) {
        (gameData.bux += (2 * gameData.houses));
    }
}

function updateDisplay() {
    document.getElementById("bux").innerText = gameData.bux;
    document.getElementById("population").innerText = gameData.peeps;
    document.getElementById("numHouses").innerText = gameData.houses;
}

function addPerson() {
    gameData.peeps++;
    document.getElementById("population").innerText = gameData.peeps;
};

function addHouse() {
    if (gameData.peeps >= 10) {
        gameData.houses++;
        gameData.peeps -= 10;
        document.getElementById("numHouses").innerText = gameData.houses;
        document.getElementById("population").innerText = gameData.peeps;
    }
}

var gameActive;
    
window.onfocus = function () {
    gameActive = true;
    var deltaTime = new Date().getTime() - blurTime;
    fastForward(deltaTime);
};

window.onblur = function () {
    gameActive = false;
    blurTime = new Date().getTime();
};