export function compare(objOne, objTwo, propertyName) {
    if (objOne[propertyName] < objTwo[propertyName]) {
        return -1;
    }
    if (objOne[propertyName] > objTwo[propertyName]) {
        return 1;
    }
    return 0;
}