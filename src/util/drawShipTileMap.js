const buildingTileAvailableTexture = PIXI.Texture.from('src/assets/empty-tile-available.png');

const mouseoverShipTile = (eventData, sprite, hoveredTile) => {
    console.log('mouseover ship tile');
    console.log('current hovered tile: ', hoveredTile);
    console.log('current Dragged part: ', currentDraggedShipPart)

    currentHoveredTile = hoveredTile;

    if (currentDraggedShipPart && hoveredTile.isBuildingTile) {
        sprite.texture = buildingTileAvailableTexture;
    }
}

const drawShipTileMap = (shipTileMap) => {

    const X_START = 50;
    const Y_START = 50;
    const SPRITE_WIDTH = 50;
    const SPRITE_HEIGHT = 50;

    const container = new PIXI.Container();
    container.interactive = false;

    console.log('Drawing ship tile map ', shipTileMap1);
    
    shipTileMap.tiles.forEach((tileRow, x) => {
        tileRow.forEach((tile, y) => {
            const locX = X_START + x * SPRITE_WIDTH;
            const locY = Y_START + y * SPRITE_HEIGHT;
            const sprite = PIXI.Sprite.from(`src/assets/${tile?.shipPart?.texture || 'empty-tile.png'}`);
            sprite.anchor.set(0.5)
            sprite.x = locX;
            sprite.y = locY;
            sprite.width = SPRITE_WIDTH;
            sprite.height = SPRITE_HEIGHT;

            // TODO: only make tiles interactive that can still be built on
            sprite.interactive = true;
            sprite.mouseover = (eventData) => mouseoverShipTile(eventData, sprite, tile);
            // sprite.scale.set('1, 1');
            container.addChild(sprite);
        });
    });

    app.stage.addChild(container);
}
