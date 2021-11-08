

function onClickOfferedShipTile(event, selectedShipPart, sprite) {    
    currentSelectedShipPart = selectedShipPart;
}

const drawOfferedShipParts = (shipParts) => {

    const X_START = 400;
    const Y_START = 50;

    const SPRITE_WIDTH = 50;
    const GAP_WIDTH = 30;
    const SPRITE_HEIGHT = 50;
    
    const container = new PIXI.Container();
    container.interactive = false;
    console.log('Drawing shipParts: ', shipParts);
    
    shipParts.forEach((shipPart, index) => {
        const locX = X_START + index * (SPRITE_WIDTH + GAP_WIDTH);
        const locY = Y_START;

        const sprite = PIXI.Sprite.from(`src/assets/${shipPart?.texture || 'empty-tile.png'}`);
        sprite.x = locX;
        sprite.y = locY;
        sprite.width = SPRITE_WIDTH;
        sprite.height = SPRITE_HEIGHT;
        sprite.anchor.set(0.5);

        sprite.interactive = true;
        sprite.buttonMode = true;

        sprite
            // events for drag start
            .on('mousedown', (eventData) => onClickOfferedShipTile(eventData, shipPart, sprite))
            .on('touchstart', (eventData) => onClickOfferedShipTile(eventData, shipPart, sprite))

        container.addChild(sprite);

    });

    app.stage.addChild(container);
}

