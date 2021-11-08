const buildingTileAvailableTexture = PIXI.Texture.from('src/assets/empty-tile-available.png');
const buildintTileEmptyTexture = PIXI.Texture.from('src/assets/empty-tile.png'); 

const onClickShipTile = (eventData, sprite, tile) => {
    console.log('on click ship tile', tile);
    console.log('currentSelectedTile', currentSelectedTile);
    console.log('currentSelectedShipPart', currentSelectedShipPart);;

    currentSelectedTile = tile;

    if (currentSelectedShipPart && tile.isBuildingTile) {
        sprite.texture = buildingTileAvailableTexture;
    }

    if (currentSelectedShipPart && currentSelectedTile) {
        console.log('setting ship part');
        tile.shipPart = currentSelectedShipPart;
        sprite.texture = PIXI.Texture.from(`src/assets/${tile?.shipPart?.texture || 'empty-tile.png'}`);
    }
}

const onMouseOverShipTile = (eventData, sprite, tile) => {
    if (currentSelectedShipPart && tile.isBuildingTile && !tile.shipPart) {
        sprite.texture = buildingTileAvailableTexture;
    }
}

const onMouseOutShipTile= (eventData, sprite, tile) => {
    if (tile.isBuildingTile && tile.shipPart === null) {
        console.log('resetting tile to blue', tile);
        sprite.texture = buildintTileEmptyTexture;
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
            sprite
                .on('mousedown', (eventData) => onClickShipTile(eventData, sprite, tile))
                .on('mouseover', (eventData) => onMouseOverShipTile(eventData, sprite, tile))
                .on('mouseout', (eventData) => onMouseOutShipTile(eventData, sprite, tile));

            container.addChild(sprite);
        });
    });

    app.stage.addChild(container);
}
