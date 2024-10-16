var num = [10, 2, 22, -3, 50, 7];

function main() {
    _findItemManualy(30);
    _findItemAutomatic(-3);
    _sortAutomatic();
    _keydownSearch();
    _sortManual();
    console.log(num);
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

function _keydownSearch() {
    var numberPanel = document.getElementById("numberSearch");
    numberPanel.addEventListener("keydown", (e) => {
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
            var inputNumber = Number(e.key);   
            var isFound = num.includes(inputNumber);
            if (isFound) {
                alert ("found!");
            } else {
                alert ("not found!");
            }
        }
    });

}

function _sortManual() {
    var length = num.length;
    for (var i = 0; i < length - 1; i++) {
        for (var j = 0; j < length - i - 1; j++) {
            if (num[j] < num[j + 1]) {
                var temp = num[j];
                num[j] = num[j + 1];
                num[j + 1] = temp;
            }
        }
    }
}

main();