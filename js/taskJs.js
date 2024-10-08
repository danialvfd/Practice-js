var num = [10, 2, 22, -3, 50, 7]

function main() {
    _findItemManualy(30);
    _findItemAutomatic(-3);
    _sortAutomatic();
    console.log(num)
}

function _findItemManualy(item) {
    var isFound = false;
    for (var i = 0; i < num.length; i++) {
        if (num[i] == item) {
            console.log("found!");
            isFound = true;
        }
    }
    if (!isFound) {
        console.log("not found!");
    }
}

function _findItemAutomatic(item) {
    var isFound = num.includes(item);

    if (isFound) {
        console.log("found!");
    } else {
        console.log("not found!");
    }
}

function _sortAutomatic() {
    num.sort((a, b) => a - b);
}



main();