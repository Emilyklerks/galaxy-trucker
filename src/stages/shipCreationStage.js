let currentSelectedShipPart = null;
let currentSelectedTile = null;
let currentShipTileMap = shipTileMap1;

const renderShipCreationStage = () => {

    const offeredShipTiles = [
        connector1(),
        connector2(),
        engine1()
    ];

    
    drawShipTileMap(currentShipTileMap);
    drawOfferedShipParts(offeredShipTiles);
    
}