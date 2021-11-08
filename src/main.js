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