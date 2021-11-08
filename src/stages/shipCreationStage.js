let currentDraggedShipPart = null;
let currentHoveredTile = null;
let currentShipTileMap = shipTileMap1;

const renderShipCreationStage = () => {

    const offeredShipTiles = [
        connector1(),
        connector2(),
        engine1()
    ];

    app.ticker.add((delta) => {
        drawShipTileMap(currentShipTileMap);
        drawOfferedShipTiles(offeredShipTiles);
    });
}