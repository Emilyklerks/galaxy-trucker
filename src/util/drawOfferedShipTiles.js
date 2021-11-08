function onDragStart(event)
{
    // store a reference to the data
    // the reason for this is because of multitouch
    // we want to track the movement of this particular touch
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
}

function onDragEnd()
{
    this.alpha = 1;

    this.dragging = false;

    // set the interaction data to null
    this.data = null;
}

function onDragMove()
{
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
            .on('mousedown', onDragStart)
            .on('touchstart', onDragStart)
            // events for drag end
            .on('mouseup', onDragEnd)
            .on('mouseupoutside', onDragEnd)
            .on('touchend', onDragEnd)
            .on('touchendoutside', onDragEnd)
            // events for drag move
            .on('mousemove', onDragMove)
            .on('touchmove', onDragMove);

        container.addChild(sprite);

    });

    app.stage.addChild(container);
}

