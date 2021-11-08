const renderShipCreationStage = () => {

    const currentShipTileMap = shipTileMap1;

    drawShipTileMap(currentShipTileMap);

    const offeredShipTiles = [
        connector1(),
        connector2(),
        engine1()
    ];

    drawOfferedShipTiles(offeredShipTiles);
}