let string = 'Ala ma kota.';

console.log(string.slice(-5, -2));
console.log(string.substring(-5));
console.log(string.substr(1, 5));
console.log(string.split(' '));

console.log(string.split('').reverse().join(''));

let table = ['0', '1', '2', '3', '4'];

console.log(table.shift());
console.log(table);
console.log(table.unshift(3));
console.log(table);

console.log(table.pop());
console.log(table);
console.log(table.push(56));
console.log(table);

console.log(table.splice(1, 3, 'seks'));
console.log(table);

console.log(table.splice(0, 2, 6, 8, 'kot'));
console.log(table);

let sortowanie = [110, 11, 2, 21, 1, 2, 'a'];
console.log(sortowanie.sort());
