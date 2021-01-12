//process.stdout.write('hello from spinner1.js... \rheyyy\n');

let str = ['\r|', '\r/', '\r-', '\r\\', '\r|']
let animate = (str) => {
let delay = 100;
for (const char of str) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 200
}
};

console.log(animate(str))