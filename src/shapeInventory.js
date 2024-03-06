const SHAPES = [
  //tetris
  {
    points: [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    width: 2,
    height: 2
  },
  {
    points: [
      [0, 0],
      [0, 1],
      [1, 0],
    ],
    width: 2,
    height: 2
  },
  // cube
  {
    points: [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 1]
    ],
    width: 1,
    height: 3,
  }
]


export function randomPiece() {
  const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
  return {
    ...shape,
    position: {
      x: 0, y: 0
    },
    color: getRandomColor()
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
