function sleep(milliseconds) {
    const start = Date.now();
    while (Date.now() - start < milliseconds) {
        // Busy wait
    }
    console.log("Promise resolved");
    return Promise.resolve();
}

module.exports = sleep;

sleep(5000)
console.log("Code after sleep function");
