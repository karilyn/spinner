let delay = 0;
let fullSpin = ['|', '/', '-', '\\', '|', '/', '\\', '|', '/', '-', '\\', '|', '/', '\\', '|'];

for (const spin of fullSpin) {
  setTimeout(() => {
    process.stdout.write('\r');
    process.stdout.write(spin);
  }, delay);
  delay += 200;
}

