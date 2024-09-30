function main() {
    _onChangeNamePanel();
    _printButtom();
    _sumButtom();
    _mouseoverTest();
    _focusTest();
}

function _onChangeNamePanel() {
    var namePanel = document.getElementById("namepanel");
    namePanel.addEventListener("keydown", (e) => {
        console.log(`Key "${e.key}" pressed [event: keydown]`);
    });
}

function _printButtom() {
    var printButtom = document.getElementById("printbuttom");
    printButtom.addEventListener("click", (e) => {
        console.log("hi");
    });

}

function _sumButtom() {
    var SumButtom = document.getElementById("sumButtom");
    SumButtom.addEventListener("click", (e) => {
        console.log(4 + 2);
    });

}

function _mouseoverTest() {
    var mouseover1 = document.getElementById("mouseover");
    mouseover1.addEventListener("mouseover", (e) => {
        console.log("test mouseover");
    });

}


function _focusTest() {
    var focusTest = document.getElementById("focusTest");
    focusTest.addEventListener("focus", (e) => {
        focusTest.style.background = "yellow";
    });

}


function _printMyName(eventTemp) {
    console.log("danial")
}

var main = new main();