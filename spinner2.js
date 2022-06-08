// process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinner2 = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|', '\n'];
const spin = 0;
let speed = 0;

for (const spin of spinner2) {

  setTimeout(() => process.stdout.write(spin), speed += 200);
  
}