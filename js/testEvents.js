function main() {
    _onChangeNamePanel();
}

function _onChangeNamePanel() {
    var namePanel = document.getElementById("namepanel");
    namePanel.addEventListener("keydown", (e) => {
        console.log(`Key "${e.key}" pressed [event: keydown]`);
    });
}

function print() {
    console.log("hi")
}

function sum() {
    console.log(4 + 2);
}

function printMyName(eventTemp) {
    console.log("danial")
}

var main = new main();