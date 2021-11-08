const _engine1 = {
    type: SHIP_PART_TYPES.ENGINE,
    capacity: 1,
    remainingCapacity: 1,
    connectors: {
        left: true,
        right: true,
        up: false,
        down: false,
    },
    texture: 'engine1.png'
}

const engine1 = () => ({
    ..._engine1
});