function zero(a) {
    if (!a) {
        return 0;
    } else {
        return a(0)
    }
}

function one(a) {
    if (!a) {
        return 1;
    } else {
        return a(1)
    }
}

function two(a) {
    if (!a) {
        return 2;
    } else {
        return a(2)
    }
}

function three(a) {
    if (!a) {
        return 3;
    } else {
        return a(3)
    }
}

function four(a) {
    if (!a) {
        return 4;
    } else {
        return a(4)
    }
}

function five(a) {
    if (!a) {
        return 5;
    } else {
        return a(5)
    }
}

function six(a) {
    if (!a) {
        return 6;
    } else {
        return a(6)
    }
}

function seven(a) {
    if (!a) {
        return 7;
    } else {
        return a(7)
    }
}

function eight(a) {
    if (!a) {
        return 8;
    } else {
        return a(8)
    }
}

function nine(a) {
    if (!a) {
        return 9;
    } else {
        return a(9)
    }
}

function plus(x) {
    return function(y) {
        return y + x;
    }
}

function minus(x) {
    return function(y) {
        return y - x;
    }
}

function times(x) {
    return function(y) {
        return y * x;
    }
}

function dividedBy(x) {
    return function(y) {
        return parseInt(y / x);
    }
}