const TOTAL = 45;
const DIVISOR = 2;
const WIDTH  = TOTAL / DIVISOR;

const THICKNESS = 2;

const TRIANGLE_POINTS = [
  [[THICKNESS, 0], [TOTAL-THICKNESS, 0], [TOTAL/2, TOTAL/2 - 2]],
  [[0, THICKNESS], [0, TOTAL-THICKNESS], [TOTAL/2 - 2, TOTAL/2]],
  [[THICKNESS, TOTAL], [TOTAL - THICKNESS, TOTAL], [TOTAL/2, TOTAL/2 + 2]],
  [[TOTAL, THICKNESS], [TOTAL, TOTAL - THICKNESS], [TOTAL/2 + 2, TOTAL/2]]
]

const GRAY_ONE = "rgb(66, 0, 43)"; // med
const GRAY_TWO = 'rgb(45, 0, 22)'; // dark
const GRAY_THREE = 'rgb(77, 0, 53)'; // light

const PAIRS = {
  1: [0, TOTAL],
  2: [TOTAL, 0],
  3: [0, 0],
  4: [WIDTH / DIVISOR, WIDTH / DIVISOR],
  5: [WIDTH / DIVISOR, TOTAL - WIDTH / DIVISOR],
  6: [TOTAL - WIDTH / DIVISOR, WIDTH / DIVISOR],
  7: [TOTAL - WIDTH / DIVISOR, TOTAL - WIDTH / DIVISOR],
  8: [TOTAL, TOTAL]
}

const TRAPEZOID_POINTS = [
  [PAIRS[2], PAIRS[6], PAIRS[7], PAIRS[8]],
  [PAIRS[3], PAIRS[4], PAIRS[5], PAIRS[1]],
  [PAIRS[3], PAIRS[4], PAIRS[6], PAIRS[2]],
  [PAIRS[1], PAIRS[5], PAIRS[7], PAIRS[8]]
]

 // this.drawTrapezoid(ctx, PAIRS[3], PAIRS[4], PAIRS[5], PAIRS[1], GRAY_ONE); // left
    // this.drawTrapezoid(ctx, PAIRS[2], PAIRS[6], PAIRS[7], PAIRS[8], GRAY_ONE); // right
    // this.drawTrapezoid(ctx, PAIRS[3], PAIRS[4], PAIRS[6], PAIRS[2], GRAY_TWO); // top
    // this.drawTrapezoid(ctx, PAIRS[1], PAIRS[5], PAIRS[7], PAIRS[8], GRAY_THREE); // bottom

class Square {
  constructor(x, y, filepath, index) {
    this.x = x;
    this.y = y;
    this.color = "rgb(0, 0, 0)";
    this.newColor = "rgb(0, 0, 0)";

    this.toggled = false;
    this.index = index;

    // this.audio = filepath;

    // set audio in sequencer (10 instead of 100)
    this.audio = document.createElement("audio");
    this.audio.setAttribute("src", filepath);
    this.audio.setAttribute("id", index);
    this.audio.setAttribute("type", "audio/wav");
    document.body.appendChild(this.audio);
  }

  soundNote(nextColor) {
    this.newColor = nextColor;
    if (this.toggled) {
      setTimeout(() => {
        this.audio.currentTime = 0;
        this.audio.play();
      }, 0);
    } else {
      this.color = nextColor;
    }
  }

  toggle() {
    if (this.toggled === false) {
      this.toggled = true;
      this.color = "rgb(255, 255, 255)";
    } else {
      this.toggled = false;
      this.color = this.newColor;
    }
  }

  draw(ctx, style) {

    console.log("IN DRAW SQUARE", style);
    ctx.clearRect(this.x, this.y, 50, 50);

    if (style === 'Jewel') {
      this.drawTriangles(ctx);
    } else if (style === 'Square') {
      this.drawSquare(ctx);
    } else if (style === 'Circle') {
      this.drawSquare(ctx);
    } else if (style === 'Tunnel') {
      this.drawTrapezoids(ctx);
    }


    // switch (style) {
    //   case "Square":
    //     this.drawSquare(ctx);
    //   case "Circle":
    //     this.drawSquare(ctx);
    //   case "Jewel":
    //     this.drawTriangles(ctx);
    //   case "Tunnel":
    //     this.drawTrapezoids(ctx);
    //   default:
    //     this.drawSquare(ctx);
    // }
  }

  drawSquare(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, 45, 45);
  }

  drawTrapezoids(ctx) {
    const colors = [GRAY_ONE, GRAY_ONE, GRAY_TWO, GRAY_THREE];

    TRAPEZOID_POINTS.forEach( (points, idx) => {
      ctx.fillStyle = colors[idx];
      ctx.beginPath();
      ctx.moveTo(this.x + points[0][0], this.y + points[0][1]);
      ctx.lineTo(this.x + points[1][0], this.y + points[1][1]);
      ctx.lineTo(this.x + points[2][0], this.y + points[2][1]);
      ctx.lineTo(this.x + points[3][0], this.y + points[3][1]);
      ctx.closePath();
      ctx.fill();
    });

    ctx.fillStyle = this.color;
    ctx.fillRect(this.x + WIDTH/2, this.y + WIDTH/2, WIDTH, WIDTH);
    
  }


  drawTriangles(ctx) {
    const colorParts = this.color.split("(").map(part => part.split(","))[1];
    const red = parseInt(colorParts[0]);
    const blue = parseInt(colorParts[1]);
    const green = parseInt(colorParts[2]);

    const colorLeft = `rgb(${red}, ${green}, ${blue})`;
    const colorRight = `rgb(${red - 20}, ${green - 20}, ${blue - 20})`;
    const colorTop = `rgb(${red - 50}, ${green - 50}, ${blue - 50})`;
    const colorBottom = `rgb(${red - 10}, ${green - 10}, ${blue - 10})`;

    const colors = [colorLeft, colorRight, colorTop, colorBottom];

    TRIANGLE_POINTS.forEach((triangle, idx) => {
      ctx.fillStyle = colors[idx];
      ctx.beginPath();
      ctx.moveTo(this.x + triangle[0][0], this.y + triangle[0][1]);
      ctx.lineTo(this.x + triangle[1][0], this.y + triangle[1][1]);
      ctx.lineTo(this.x + triangle[2][0], this.y + triangle[2][1]);
      ctx.closePath();
      ctx.fill();
    });
  }
}

export default Square;