function wait(n) {
    console.log(`Wait function called, will resolve after ${n} seconds.`);
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Resolved after ${n} seconds.`);
            resolve();
        }, n * 1000);
    });
}

module.exports = wait;

wait(5)