function thisThrows() {
    throw new Error("Thrown from thisThrows()");
}
try {
    thisThrows();
} catch (e) {
    console.error(e);
} finally {
    console.log('We do cleanup here');
}

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