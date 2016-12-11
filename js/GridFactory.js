import CellFactory from './CellFactory';
import getNeighbors, { splitPlan } from './utils';

//takes an array of strings, length 8, should return the number of bombs inside aka "X"
function countBombs(neighbors) {
  return neighbors.reduce((acc, cur) => {
    return cur === "X" ? acc += 1 : acc;
  }, 0);
}

function generateCells(plan) {
  const width = plan[0].length;
  const height = plan.length;
  const split = splitPlan(plan);
  const cells = split.map((planCell, i) => {
    const x = i % width;
    const y = Math.floor(i/width);
    return CellFactory(x, y, planCell);
  });

  return cells;
}


//START AGAIN HERE
function generatePlan(width, height, bombs) {
  //   IMPLEMENT THE GRID GENERATION HERE USING RANDOM PLACEMENT OF BOMBS WITH REMAINING BOMBS TO LOCATE AND A WHILE LOOP

  return plan;
}

function GridFactory(width, height, bombs) {
  const empty = width * height - bombs;
  const plan = generatePlan(width, height, bombs);
  const cells = generateCells(plan);

  return {
    width: width,
    height: height,
    bombs: bombs,
    flags: 0,
    emptyCellsTotal: empty,
    emptyCellsRemaining: empty,
    plan: plan,
    cells: cells
  };
}

export { countBombs, generateCells, generatePlan }; //exported for tests
export default GridFactory;
