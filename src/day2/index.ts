import { readInput } from "../utils/index";

interface PasswordCheck {
  low: number;
  high: number;
  letter: string;
  password: string;
}

const prepareInput = (rawInput: string) =>
  rawInput
    .split("\n")
    .filter((l) => l)
    .map((l) => {
      const arr = l.split(" ");
      const low = Number.parseInt(arr[0].split("-")[0]);
      const high = Number.parseInt(arr[0].split("-")[1]);
      const letter = arr[1].substring(0, 1);
      const password = arr[2];
      return {
        low,
        high,
        letter,
        password,
      } as PasswordCheck;
    });

const input = prepareInput(readInput());

const goA = (input: Array<PasswordCheck>) => {
  const isValidPassword = ({ password, low, high, letter }: PasswordCheck) => {
    const numberOfOccurances = password.split("").filter((c) => c === letter)
      .length;
    return numberOfOccurances >= low && numberOfOccurances <= high;
  };
  return input.filter(isValidPassword).length;
};

const goB = (input: Array<PasswordCheck>) => {
  const isValidPassword = ({ password, low, high, letter }: PasswordCheck) =>
    (password[low - 1] === letter && password[high - 1] !== letter) ||
    (password[high - 1] === letter && password[low - 1] !== letter);
  return input.filter(isValidPassword).length;
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
