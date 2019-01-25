// 1. Copy and paste your prototype in here and refactor into class syntax.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

class CuboidMaker {
  constructor(attrs) {
    this.length = attrs.length;
    this.width = attrs.width;
    this.height = attrs.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(cubeAttrs) {
    super(cubeAttrs);
  }
  cubeVolume() {
    if (this.length === this.width && this.length === this.height) {
      return Math.pow(this.length, 3);
    }
    else {
      return 'Error! Cuboid is NOT a cube.';
    }
  }
  cubeSurfaceArea() {
    if (this.length === this.width && this.length === this.height) {
      return 6 * Math.pow(this.length, 2);
    }
    else {
      return 'Error! Cuboid is NOT a cube.';
    }
  }
}

const correct = new CubeMaker({
  length: 5,
  width: 5,
  height: 5
});
const incorrect = new CubeMaker({
  length: 5,
  width: 4,
  height: 5
});

console.log(correct.cubeVolume());
console.log(incorrect.cubeVolume());
console.log(correct.cubeSurfaceArea());
console.log(incorrect.cubeSurfaceArea());