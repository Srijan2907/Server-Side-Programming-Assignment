function showClock() {

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    console.log(hours + ":" + minutes + ":" + seconds);
}

// Run every 1 second (1000 milliseconds)
setInterval(showClock, 1000);