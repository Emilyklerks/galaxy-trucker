const _connector2 = {
    type: SHIP_PART_TYPES.CONNECTOR,
    capacity: 0,
    remainingCapacity: 0,
    connectors: {
        left: true,
        right: false,
        up: true,
        down: true,
    },
    texture: 'connector2.png'
}

const connector2 = () => ({
    ..._connector2
});