import { test, readInput } from "../utils/index";

interface Position {
  x: number;
  y: number;
}

type Square = "." | "#";

type Map = Array<Array<Square>>;

const prepareInput = (rawInput: string) =>
  rawInput.split("\n").map((l) => l.split("")) as Map;

const input = prepareInput(readInput());

const countTrees = (map: Map, xIncrement: number, yIncrememnt: number) => {
  const currentPosition: Position = { x: 0, y: 0 };
  let treesEncountered = 0;
  while (currentPosition.y < map.length) {
    treesEncountered +=
      map[currentPosition.y][currentPosition.x] === "#" ? 1 : 0;
    currentPosition.x += xIncrement;
    currentPosition.y += yIncrememnt;
    if (currentPosition.x >= map[0].length) {
      currentPosition.x = 0 + currentPosition.x - map[0].length;
    }
  }
  return treesEncountered;
};

const goA = (input: Map) => {
  return countTrees(input, 3, 1);
};

const goB = (input: Map) => {
  return (
    countTrees(input, 1, 1) *
    countTrees(input, 3, 1) *
    countTrees(input, 5, 1) *
    countTrees(input, 7, 1) *
    countTrees(input, 1, 2)
  );
};

/* Tests */

// test()

/* Results */

console.time("Time");
const resultA = goA(input);
const resultB = goB(input);
console.timeEnd("Time");

console.log("Solution to part 1:", resultA);
console.log("Solution to part 2:", resultB);
