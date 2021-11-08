const emptyTile = {
    // for now all tiles are building tiles
    isBuildingTile: true,
    shipPart: null
}

const startingTile = {
    isBuildingTile: true,
    shipPart: connector1
}

// TODO: add arguments to configure starting tile and shape
const createTiles = (width, height) => {
    const grid = [...Array(width)].map(_ => Array(height).fill(emptyTile));
    console.log(grid);
    grid[2][2] = startingTile;

    return grid;
}

