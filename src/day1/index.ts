import { readInput } from "../utils/index";

const prepareInput = (rawInput: string) =>
  rawInput
    .split("\n")
    .map((x) => Number.parseInt(x))
    .sort();

const input = prepareInput(readInput());

const goA = (input: number[]) => {
  for (let i = 0; i <= input.length; i += 1) {
    for (let j = input.length - 1; j > i; j -= 1) {
      if (input[i] + input[j] === 2020) {
        return input[i] * input[j];
      }
    }
  }
};

const goB = (input: number[]) => {
  for (let i = 0; i <= input.length; i += 1) {
    for (let j = input.length - 1; j > i; j -= 1) {
      for (let k = input.length - 1; k > j; k -= 1) {
        if (input[i] + input[j] + input[k] === 2020) {
          return input[i] * input[j] * input[k];
        }
      }
    }
  }
};

/* Tests */

/* Results */

console.time("Time");
const resultA = goA(input);
const resultB = goB(input);
console.timeEnd("Time");

console.log("Solution to part 1:", resultA);
console.log("Solution to part 2:", resultB);
