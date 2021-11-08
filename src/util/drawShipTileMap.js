
const drawShipTileMap = (shipTileMap) => {

    const X_START = 50;
    const Y_START = 50;
    const SPRITE_WIDTH = 50;
    const SPRITE_HEIGHT = 50;

    const container = new PIXI.Container();

    console.log(shipTileMap1);
    
    shipTileMap.tiles.forEach((tileRow, x) => {
        tileRow.forEach((tile, y) => {
            const locX = X_START + x * SPRITE_WIDTH;
            const locY = Y_START + y * SPRITE_HEIGHT;
            console.log(tile.texture);
            const sprite = PIXI.Sprite.from(`src/assets/${tile?.shipPart?.texture || 'empty-tile.png'}`);
            sprite.x = locX;
            sprite.width = SPRITE_WIDTH;
            sprite.height = SPRITE_HEIGHT;
            sprite.y = locY;
            // sprite.scale.set('1, 1');
            container.addChild(sprite);
        });
    });

    app.stage.addChild(container);
}
