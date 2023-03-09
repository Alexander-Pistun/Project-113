function preload() {
}


function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
}


function draw() {
    circle(30, 30, 20)
    triangle(40, 40, 10)
    rectangle(60, 40, 15)
}


function take_snapshot() {
    save('myFilterImage.png');
}