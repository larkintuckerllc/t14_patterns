/* eslint-disable no-console */
const stack: number[] = [];
stack.push(1);
stack.push(2);
stack.push(3);
while (stack.length !== 0) {
  const top = stack.pop();
  console.log(top);
}

const v = ['a', 'b', 'c'];
for (let index = 0; index < v.length; index += 1) {
  const value = v[index];
  console.log(`${value} is at index ${index}`);
}
v.forEach((value, index) => {
  console.log(`${value} is at index ${index}`);
});

{
  const [x, y, z] = [1, 2, 3];
}

{
  const printCoordinates = ([x, y]: [number, number]): void => {
    console.log(`Current location: (${x}, ${y})`);
  };
  const point: [number, number] = [3, 5];
  printCoordinates(point);
}

interface Point {
  x: number;
  y: number;
}

{
  const p: Point = { x: 0, y: 7 };
  const { x, y } = p;
}

{
  const foo = (_: number, y: number): void => {
    console.log(`This code only uses the y parameter: ${y}`);
  };
  foo(3, 4);
}

{
  const numbers = [2, 4, 8, 16, 32];
  const [first, _second, third, _fourth, fifth] = numbers;
}

{
  const origin: Point = { x: 0, y: 0 };
  const { x } = origin;
}
