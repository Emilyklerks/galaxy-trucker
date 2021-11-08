

function onDragStart(event, draggedShipPart, sprite) {
    // store a reference to the data
    // the reason for this is because of multitouch
    // we want to track the movement of this particular touch
    
    console.log('onDragStart', this);
    console.log(event);
    console.log(sprite);
    sprite.data = event.data;
    sprite.alpha = 0.5;
    sprite.dragging = true;

    currentDraggedShipPart = draggedShipPart;
}

function onDragEnd(eventData, draggedShipPart, sprite) {
    sprite.alpha = 1;

    sprite.dragging = false;

    // set the interaction data to null
    sprite.data = null;

    currentHoveredTile.shipPart = draggedShipPart;

    currentDraggedShipPart = null;
}

function onDragMove() {
    if (this.dragging)
    {
        var newPosition = this.data.getLocalPosition(this.parent);
        this.position.x = newPosition.x;
        this.position.y = newPosition.y;
    }
}


const drawOfferedShipTiles = (shipTiles) => {

    const X_START = 400;
    const Y_START = 50;

    const SPRITE_WIDTH = 50;
    const GAP_WIDTH = 30;
    const SPRITE_HEIGHT = 50;
    
    const container = new PIXI.Container();
    console.log('Drawing shipTiles: ', shipTiles);
    
    shipTiles.forEach((tile, index) => {
        const locX = X_START + index * (SPRITE_WIDTH + GAP_WIDTH);
        const locY = Y_START;

        const sprite = PIXI.Sprite.from(`src/assets/${tile?.texture || 'empty-tile.png'}`);
        sprite.x = locX;
        sprite.y = locY;
        sprite.width = SPRITE_WIDTH;
        sprite.height = SPRITE_HEIGHT;
        sprite.anchor.set(0.5);

        sprite.interactive = true;
        sprite.buttonMode = true;

        sprite
            // events for drag start
            .on('mousedown', (eventData) => onDragStart(eventData, tile, sprite))
            .on('touchstart', (eventData) => onDragStart(eventData, tile, sprite))
            // events for drag end
            .on('mouseup', (eventData) => onDragEnd(eventData, tile, sprite))
            .on('mouseupoutside', (eventData) => onDragEnd(eventData, tile, sprite))
            .on('touchend', (eventData) => onDragEnd(eventData, tile, sprite))
            .on('touchendoutside', (eventData) => onDragEnd(eventData, tile, sprite))
            // events for drag move
            .on('mousemove', onDragMove)
            .on('touchmove', onDragMove);

        container.addChild(sprite);

    });

    app.stage.addChild(container);
}

