const vize = 85;
const final = 100;
let donemNotu = (vize * 30 + final * 70) / 100;
let harfNotu;

if (donemNotu >= 90 && donemNotu <= 100) {
  harfNotu = 'A';
} else if (donemNotu >= 80 && donemNotu < 90) {
  harfNotu = 'B';
} else if (donemNotu >= 70 && donemNotu < 80) {
  harfNotu = 'C';
} else if (donemNotu >= 60 && donemNotu < 70) {
  harfNotu = 'D';
} else if (donemNotu >= 50 && donemNotu < 60) {
  harfNotu = 'E';
} else {
  harfNotu = 'F';
}

console.log(harfNotu);
