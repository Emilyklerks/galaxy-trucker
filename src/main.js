// Create the application helper and add its render target to the page
const app = new PIXI.Application({ width: 800, height: 600 });
document.body.appendChild(app.view);

const STAGES = {
    CREATE_SHIP: 'createShip'
}

let currentStage = STAGES.CREATE_SHIP;


switch(currentStage) {
    case STAGES.CREATE_SHIP:
        renderShipCreationStage();
}


// // Create the sprite and add it to the stage
// let sprite = PIXI.Sprite.from('./assets/Connector1.png');
// app.stage.addChild(sprite);

// // Add a ticker callback to move the sprite back and forth
// let elapsed = 0.0;
// app.ticker.add((delta) => {
//     elapsed += delta;
//     sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
// });