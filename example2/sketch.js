function setup() {
    createCanvas(windowWidth, windowHeight);
    // load external data source and callback
    loadJSON('colors.json', showData);
        textAlign(CENTER);

}

function showData(data) {
    fill(data.magenta);
    textSize(32);
    text(data.magenta, width/2,height/2);
}
