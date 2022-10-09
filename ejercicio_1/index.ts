import MyMatriz from "./MyMatriz";

const example = [
  new MyMatriz([1, 2]),
  new MyMatriz([
    [1, 2],
    [2, 4],
  ]),
  new MyMatriz([
    [1, 2],
    [2, 4],
    [2, 4],
  ]),
  new MyMatriz([
    [
      [3, 4],
      [6, 5],
    ],
  ]),
  new MyMatriz([
    [[1, 2, 3]],
    [
      [5, 6, 7],
      [5, 4, 3],
    ],
    [
      [3, 5, 6],
      [4, 8, 3],
      [2, 3],
    ],
  ]),
  new MyMatriz([
    [
      [1, 2, 3],
      [2, 3, 4],
    ],
    [
      [5, 6, 7],
      [5, 4, 3],
    ],
    [
      [3, 5, 6],
      [4, 8, 3],
    ],
  ]),
];

example.forEach((matriz, i) => {
  console.log(`Example:  ${i + 1}`);
  console.log(`Dimension: ${matriz.dimension()}`);
  console.log(`Straight: ${matriz.straight()}`);
  console.log(`Compute: ${matriz.compute()}`);
  console.log("\n");
});
