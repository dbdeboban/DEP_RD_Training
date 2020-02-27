function rentalCarCost(d) {
    // Your solution here
    var total = 0;
    return (d >= 7) ? (d * 40) - 50 : (d >= 3) ? (d * 40) - 20 : d * 40;
}