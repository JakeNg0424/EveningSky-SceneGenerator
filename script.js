/* exported setup, draw */

let seed = 0;

let c1, c2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  createButton("reimagine").mousePressed(() => seed++);
}

function draw() {
  randomSeed(seed);

  // Evening Sky
  c1 = color("#000000");
  c2 = color(63, 191, 191);
  for (let y = 0; y < height; y++) {
    n = map(y, 0, height, 0, 1);
    let newc = lerpColor(c1, c2, n);
    stroke(newc);
    line(0, y, width, y);
  }
  noStroke();

  // Stars
  fill("#FFFFFF");
  const stars = 200 * random();
  const scrub = mouseX / width;
  for (let i = 0; i < stars; i++) {
    let z = random();
    let x = width * ((random() + (scrub / 50 + millis() / 500000.0) / z) % 1);
    let s = width / 10 / z;
    ellipse(x, s, width / 100, width / 100);
  }
  // The Star
  push();
  translate(random(0, width * 0.9), random(0, height * 0.65));
  rotate(frameCount / -500.0);
  star(0, 0, width / 10, height / 20, 5);
  pop();

  // Ground
  fill("#C2b280");
  rect(0, height / 1.2, width, height);
}

// The Star function
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}