// type Shape { width, height, points, cost, income, time  }

export const SHAPES = [
  {
    points: [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    width: 2,
    height: 2,
    cost: 6,
    time: 5,
    income: 2
  },
  {
    points: [
      [0, 0],
      [0, 1],
    ],
    width: 1,
    height: 2,
    cost: 2,
    time: 1,
    income: 0
  },
  {
    points: [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    width: 1,
    height: 3,
    cost: 2, income: 0, time: 2
  },
  {
    points: [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
    ],
    width: 1,
    height: 4,
    cost: 3,
    time: 3,
    income: 1
  },
  {
    points: [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
    ],
    width: 1,
    height: 5,
    cost: 7,
    time: 1,
    income: 1
  },
  {
    points: [
      [0, 0],
      [0, 1],
      [1, 0],
    ],
    width: 2,
    height: 2,
    cost: 3,
    income: 0,
    time: 1
  },
  {
    points: [
      [0, 1],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 2],
      [3, 1],
    ],
    width: 4,
    height: 3,
    cost: 5,
    time: 3,
    income: 1
  },
  { // that one is same as before as there are 2 in the games with different costs
    points: [
      [0, 0],
      [0, 1],
      [1, 0],
    ],
    width: 2,
    height: 2,
    cost: 1,
    time: 3,
    income: 0
  },
  {
    points: [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 1]
    ],
    width: 1,
    height: 3,
    cost: 2,
    time: 2,
    income: 0
  },
  {
    points: [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 2],
      [1, 3]
    ],
    width: 2,
    height: 4,
    cost: 10,
    time: 5,
    income: 3
  }, {
    points: [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 1],
      [2, 0],
      [2, 1],
      [2, 2]
    ],
    width: 3,
    height: 3,
    cost: 2,
    time: 3,
    income: 0
  }, {
    points: [
      [0, 0],
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
      [2, 3]
    ],
    width: 3,
    height: 4,
    cost: 1,
    time: 2,
    income: 0
  }, {
    points: [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 2]
    ],
    width: 3,
    income: 3,
    time: 6,
    cost: 8,
    height: 3,
  }, {
    points: [
      [1, 0],
      [1, 1],
      [1, 2],
      [0, 2],
      [0, 3]
    ],
    width: 2,
    height: 4,
    cost: 2,
    time: 3,
    income: 1,
  },
  {
    points: [
      [2, 0],
      [0, 1],
      [1, 1],
      [1, 2],
      [2, 1],
      [3, 1]
    ],
    width: 4,
    height: 3,
    cost: 2,
    time: 1,
    income: 0,
  },
  {
    points: [
      [1, 0],
      [0, 1],
      [1, 1],
      [2, 1],
      [1, 2]
    ],
    width: 3,
    height: 3,
    cost: 5,
    time: 4,
    income: 2
  }, {
    points: [
      [0, 1],
      [1, 1],
      [2, 1],
      [3, 0],
      [3, 1],
      [3, 2]
    ],
    width: 3,
    height: 4,
    cost: 7,
    time: 2,
    income: 2
  }, {
    points: [
      [2, 0],
      [0, 1],
      [1, 1],
      [2, 1],
      [3, 1],
      [2, 2]
    ],
    width: 4,
    height: 3,
    cost: 0,
    time: 3,
    income: 1
  }, {
    points: [
      [1, 0],
      [0, 1],
      [0, 2],
      [1, 1],
    ],
    width: 2,
    height: 3,
    cost: 3,
    time: 2,
    income: 1
  }, {
    points: [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 1],
      [1, 2],
      [2, 2]
    ],
    width: 3,
    height: 3,
    cost: 10,
    time: 4,
    income: 3
  }, {
    points: [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 1],
      [2, 1],
      [2, 0]
    ],
    width: 3,
    height: 2,
    cost: 1,
    time: 2,
    income: 0
  }, {
    points: [
      [0, 0],
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
      [0, 3]
    ],
    width: 2,
    height: 3,
    cost: 1,
    time: 5,
    income: 1
  }, {
    points: [
      [1, 0],
      [2, 0],
      [0, 1],
      [1, 1],
      [1, 2],
      [2, 2]
    ],
    width: 3,
    height: 3,
    cost: 3,
    time: 6,
    income: 2
  }, {
    points: [
      [1, 0],
      [1, 1],
      [1, 2],
      [0, 2]
    ],
    width: 2,
    height: 3,
    cost: 1,
    time: 2,
    income: 1
  }, {
    points: [
      [0, 0],
      [0, 1],
      [1, 1],
      [2, 1],
      [3, 1]
    ],
    width: 4,
    height: 2,
    cost: 10,
    time: 3,
    income: 2
  }, {
    points: [
      [1, 0],
      [2, 0],
      [0, 1],
      [1, 1],
      [2, 1],
      [3, 1]
    ],
    width: 4,
    height: 2,
    cost: 7,
    time: 4,
    income: 2
  }, {
    points: [
      [1, 0],
      [2, 0],
      [0, 1],
      [1, 1]
    ],
    width: 3,
    height: 2,
    cost: 7,
    time: 6,
    income: 3
  }, {
    points: [
      [2, 0],
      [0, 1],
      [1, 1],
      [2, 1],
      [3, 1]
    ],
    width: 4,
    height: 2,
    cost: 3,
    time: 4,
    income: 1
  }, {
    points: [
      [2, 0],
      [0, 1],
      [1, 1],
      [2, 1]
    ],
    width: 3,
    height: 2,
    cost: 4,
    time: 6,
    income: 2
  }, {
    points: [
      [1, 0],
      [0, 1],
      [1, 1],
      [0, 2],
      [1, 2],
      [0, 3]
    ],
    width: 2,
    height: 4,
    cost: 4,
    time: 2,
    income: 0
  }, {
    points: [
      [2, 0],
      [0, 1],
      [1, 1],
      [2, 1],
      [3, 1],
      [4, 1],
      [2, 2]
    ],
    width: 5,
    height: 2,
    cost: 1,
    time: 4,
    income: 1
  }, {
    points: [
      [0, 0],
      [0, 1],
      [1, 1],
      [0, 2],
      [1, 2]
    ],
    width: 2,
    height: 3,
    cost: 2,
    time: 2,
    income: 0
  }, {
    points: [
      [1, 0],
      [1, 1],
      [0, 2],
      [1, 2],
      [2, 2]
    ],
    width: 3,
    height: 3,
    cost: 5,
    time: 5,
    income: 2
  }
]


export class ShapeInventory {
  #shapes = shuffleArray(SHAPES.slice());

  getNextShapes() {
    return this.#shapes.slice(0, 3);
  }

  getRemainingShapes() {
    return this.#shapes.slice(3);
  }

  selectShape(index) {
    const shape = this.#shapes[index] = {
      ...this.#shapes[index],
      position: {
        x: 0, y: 0
      },
      color: getRandomColor(),
      index
    };
    return shape;
  }

  pickShape(index) {
    const shape = this.#shapes[index];

    for (var i = 0; i < index; i++) {
      this.#shapes.push(this.#shapes.shift());
    }

    // remove shape from array
    this.#shapes.splice(index, 1);

    return shape;
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
