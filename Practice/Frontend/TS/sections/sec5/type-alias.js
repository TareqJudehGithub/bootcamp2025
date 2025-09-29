function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function aliasFunc(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
console.log(doublePoint({ x: 2, y: 4 }));
console.log(aliasFunc({ x: 2, y: 4 }));
