function getMiddle(s) {
    //Code goes here!
    return s.length % 2 == 0 ? s.substring(s.length / 2 - 1, s.length / 2 + 1) : s[parseInt(s.length / 2)]
}