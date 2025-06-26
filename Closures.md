### Замыкания Closures
``` function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  }
}
const fn = outer();
fn(); // 1
fn(); // 2 — count запоминается
```