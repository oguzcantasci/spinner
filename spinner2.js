const spinners = [`|`, `/`, `-`, `\\`, `|`, `/`, `-`, `\\`, `|`];
let time = -100;


for (let spin of spinners) {
  time += 200;
  setTimeout(() => {
    process.stdout.write(`\r${spin}   `);
  }, time);
}
