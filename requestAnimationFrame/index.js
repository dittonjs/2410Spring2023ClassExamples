const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Animatable {
  update(deltaT) {

  }

  render(context) {}

  setAnimation(animation) {
    this.animation = animation;
  }
}

class Ball extends Animatable {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.v = 0;
  }

  update(deltaT) {
    const deltaV = 50 * (deltaT / 1000);
    this.v += deltaV;
    this.y += this.v;
    console.log(this.x);
    // console.log(this.y);
  }

  render(context) {
    context.beginPath();
    context.arc(this.x, this.y, 50, 0, 2 * Math.PI);
    context.fillStyle = "Red";
    context.fill();
    context.stroke();
  }
}


class Animation {

  constructor(context, width, height) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.animatables = [];
  }

  addAnimatable(animatable) {
    this.animatables.push(animatable);
  }

  removeAnimatable(animatable) {
    this.animatables.splice(this.animatables.indexOf(animatable), 1);
  }

  update(timeStamp) {
    if (!this.lastTimeStamp) {
      this.lastTimeStamp = timeStamp;
    }
    const deltaT = timeStamp - this.lastTimeStamp;
    this.context.clearRect(0, 0, this.width, this.height);

    this.animatables.forEach(animatable => animatable.update(deltaT));

    this.animatables.forEach(animatable => animatable.render(this.context));


    this.lastTimeStamp = timeStamp;
    // start process again
    requestAnimationFrame((timeStamp) => {
      this.update(timeStamp);
    })
  }

  start() {
    requestAnimationFrame((timeStamp) => {
      this.update(timeStamp);
    })
  }
}

const animation = new Animation(ctx, 800, 800);
animation.start();


canvas.addEventListener("click", (e) => {
  const ball = new Ball(e.offsetX, e.offsetY);
  ball.setAnimation(animation);
  animation.addAnimatable(ball);
});