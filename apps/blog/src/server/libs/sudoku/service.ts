import { sampleSize } from "@/utils/array";

import Sudoku from "./model";

const DIMENSION = 9;

const isRepeated = (
  sudoku: Sudoku,
  rowNumber: number,
  columnNumber: number,
  insertNumber: number
) =>
  sudoku.getRow(rowNumber).includes(insertNumber) ||
  sudoku.getColumn(columnNumber).includes(insertNumber) ||
  sudoku
    .getBlock(3 * Math.floor((rowNumber - 1) / 3) + Math.floor((columnNumber - 1) / 3) + 1)
    .includes(insertNumber);

// This will mutate internal Sudoku class
const iterate = (sudoku: Sudoku, rowNumber = 1, columnNumber = 1): boolean => {
  if (rowNumber === DIMENSION && columnNumber === DIMENSION) {
    // as this stops at last number, need to check if its filled
    if (sudoku.getNumber(DIMENSION, DIMENSION) !== 0) {
      return true;
    }

    const lastRow = sudoku.getRow(DIMENSION);
    for (const numberInput of Sudoku.ARRAY_FROM_ONE_TO_NINE) {
      if (lastRow.includes(numberInput)) {
        continue;
      }
      sudoku.setNumber(DIMENSION, DIMENSION, numberInput);
      break;
    }
    return true;
  }

  if (columnNumber > DIMENSION) {
    rowNumber += 1;
    columnNumber = 0;
  }

  if (sudoku.getNumber(rowNumber, columnNumber) !== 0) {
    return iterate(sudoku, rowNumber, columnNumber + 1);
  }

  for (const randomNumberInput of sampleSize(Sudoku.ARRAY_FROM_ONE_TO_NINE)) {
    if (isRepeated(sudoku, rowNumber, columnNumber, randomNumberInput)) {
      continue;
    }

    sudoku.setNumber(rowNumber, columnNumber, randomNumberInput);

    // check if it's solved
    if (iterate(sudoku, rowNumber, columnNumber + 1)) {
      return true;
    }

    // else not solved, skip this i
    sudoku.setNumber(rowNumber, columnNumber, 0);
  }

  return false;
};

export const solve = (sudoku: Sudoku): Sudoku => {
  if (sudoku.isSolved) {
    return sudoku;
  }

  // input getter creates a copy of numberArray
  const sudokuCopy = new Sudoku(sudoku.input);

  const start = Date.now();
  if (!iterate(sudokuCopy)) {
    throw new Error("Sudoku is not solvable");
  }

  // eslint-disable-next-line no-console
  console.log(`Finished in ${Date.now() - start}ms`);
  return sudokuCopy;
};

export const generateFullBoard = (): Sudoku => {
  const emptyBoard = new Sudoku(Array.from<number>({ length: Sudoku.VALID_INPUT_LENGTH }).fill(0));
  return solve(emptyBoard);
};

// TODO: add service implementation
export const generate = () => {
  const input = Array.from<number>({ length: Sudoku.VALID_INPUT_LENGTH }).fill(0);
  return new Sudoku(input);
};
