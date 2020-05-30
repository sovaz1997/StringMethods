const str = "Test string Test string";
console.log(str.includes(" "));
console.log(str.includes(" s"));
console.log(str.includes(" ss"));

console.log(str.includes("string"));
console.log(str.indexOf("string"));
console.log(str.indexOf("-"));

console.log(str.indexOf("Test string"));
console.log(str.lastIndexOf("Test string"));

console.log(str.replace("Test string", "Replaced"));
console.log(str.split(' '));
console.log(str.padStart(50, '?!'));
console.log(str.padEnd(49, '?!'));

console.log(str.charAt(7));
console.log(str.repeat(5));

const find = (str, word) => {
    const start = str.indexOf(word);
    const end = start + word.length;

    if (start !== -1) {
        return [
            str.slice(0, start),
            str.slice(start, end),
            str.slice(end),

        ];
    }
}

console.log(find('Test string for split', 'g for'));
