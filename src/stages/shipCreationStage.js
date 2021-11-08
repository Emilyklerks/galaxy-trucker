let currentDraggedShipPart = null;
let currentHoveredTile = null;
let currentShipTileMap = shipTileMap1;

const renderShipCreationStage = () => {

    const offeredShipTiles = [
        connector1(),
        connector2(),
        engine1()
    ];

    
    drawShipTileMap(currentShipTileMap);
    drawOfferedShipTiles(offeredShipTiles);
    
}