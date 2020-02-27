function partitionOn(pred, items) {
    var trueArr = [];
    var falseArr = [];
    for (i in items) {
        if (pred(items[i])) {
            trueArr.push(items[i]);
        } else {
            falseArr.push(items[i]);
        }
    }
    items.length = 0;
    for (i in falseArr) {
        items.push(falseArr[i]);
    }
    for (i in trueArr) {
        items.push(trueArr[i]);
    }
    return falseArr.length;
}