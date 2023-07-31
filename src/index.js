module.exports = function reverse(n) {
    let stringNum = n.toString();
    let reverseNum = stringNum.replace(/[^0-9]/g, '').split("").reverse().join("");
    return reverseNum;
}
