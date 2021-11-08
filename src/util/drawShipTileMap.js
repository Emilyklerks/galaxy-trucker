
const drawShipTileMap = (shipTileMap) => {

    const X_START = 50;
    const Y_START = 50;

    const container = new PIXI.Container();

    console.log(shipTileMap1);
    
    shipTileMap.tiles.forEach((tileRow, x) => {
        tileRow.forEach((tile, y) => {
            const locX = X_START + x * 10;
            const locY = Y_START + y * 10;
            
            const sprite = PIXI.Sprite.from(`src/assets/${tile.texture || 'empty-tile.png'}`);
            sprite.x = locX;
            sprite.y = locY;
            container.addChild(sprite);
        });
    });

    app.stage.addChild(container);
    
    // grid.lineStyle(2, 400);

    // const GRID_WIDTH = 400;
    // const GRID_HEIGHT = 400;
    // const SQUARE_SIZE = 100;

    // for (let y = Y_START; y <= GRID_HEIGHT + Y_START; y += SQUARE_SIZE) {
    //     grid.moveTo(X_START, y);
    //     grid.lineTo(X_START + GRID_WIDTH, y);
    // }

    // for (let x = 50; x <= GRID_WIDTH + X_START; x+= SQUARE_SIZE) {
    //     grid.moveTo(x, Y_START);
    //     grid.lineTo(x, Y_START + GRID_HEIGHT);
    // }
}
