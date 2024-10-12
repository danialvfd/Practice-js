function thisThrows() {
    throw new Error("Thrown from thisThrows()");
}

function _temp() {
    try {
        thisThrows();
        console.log("tessssssssssssssttt");
    } catch (e) {
        console.error("Msssssssssssssg", e);
    } finally {
        console.log('We do cleanup here');
    }
}

_temp();
/*
// با async
async function thisThrows2() {
    throw new Error("Thrown from thisThrows()");
}

async function run() {
    try {
        await thisThrows2();
    } catch (e) {
        console.error(e);
    } finally {
        console.log('We do cleanup here');
    }
}

run();
*/