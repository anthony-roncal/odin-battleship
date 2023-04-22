const Ship = require('./Ship');

const GameboardFactory = () => { 

    let ships = [];
    
    function placeShip(startX, startY, endX, endY) {
        if(startX === endX && startY === endY) {
            let newShip = Ship(1);
            ships.push({
                x: startX,
                y: startY,
                ship: newShip
            });
        }
        return ships[ships.length-1];
    }

    function receiveAttack(x, y) {
        let isHit = false;
        ships.forEach(ship => {
            if(ship.x === x && ship.y === y) {
                ship.ship.hit();
                isHit = true;
            }
        })
        return isHit;
    }

    return {
        ships,
        placeShip,
        receiveAttack
    }
}

module.exports = GameboardFactory;