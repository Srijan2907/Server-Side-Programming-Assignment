function parseURL(url) {

    let parsed = new URL(url);

    console.log("Protocol:", parsed.protocol);
    console.log("Host:", parsed.hostname);
    console.log("Port:", parsed.port);
    console.log("Path:", parsed.pathname);
    console.log("Query:", parsed.search);
    console.log("Hash:", parsed.hash);
}

parseURL("https://www.example.com:8080/path/page.html?name=John#section1");