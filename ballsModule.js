import { Module } from "../core/module";

export class BallsModule extends Module {
  static dataType = "BallsModule";
  constructor() {
    super(BallsModule.dataType, "Запустить мячики");
    this.bodyEl = document.querySelector("body");
  }

  trigger() {
    const canvas = document.createElement("p");
    canvas.innerText = "Запустить мячики";
    this.bodyEl.append(canvas);
    this.bodyEl.addEventListener("click", () => {
      loop();
    });
    const ctx = canvas.getContext("2d");
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    function random(min, max) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      return num;
    }

    function randomRGB() {
      return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
    }

    function Ball(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
    }

    Ball.prototype.draw = function () {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
    };

    Ball.prototype.update = function () {
      if (this.x + this.size >= width) {
        this.velX = -this.velX;
      }

      if (this.x - this.size <= 0) {
        this.velX = -this.velX;
      }

      if (this.y + this.size >= height) {
        this.velY = -this.velY;
      }

      if (this.y - this.size <= 0) {
        this.velY = -this.velY;
      }

      this.x += this.velX;
      this.y += this.velY;
    };

    const balls = [];

    function loop() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
      ctx.fillRect(0, 0, width, height);

      while (balls.length < 35) {
        let ball = new Ball(
          random(0, width),
          random(0, height),
          random(-7, 7),
          random(-7, 7),
          "rgb(" +
            random(0, 255) +
            "," +
            random(0, 255) +
            "," +
            random(0, 255) +
            ")",
          random(10, 20)
        );
        balls.push(ball);
      }

      for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
      }

      requestAnimationFrame(loop);
    }
    setTimeout(() => {
      alert(`Если хочешь, быстрее кликай чаще!`);
    }, 3000);
  }
}
