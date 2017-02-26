// Unicode escapes
console.log('\u{1F32F}');

// Template literal
// Interpolation
const first = "John";
const last = "Smith";
console.log(`Hello ${first} ${last}`);

// Multi-line
// Includes the whitespace, e.g newline and tab
const multiline = `
	String that is
	multiline
	with several lines
`;
console.log(multiline);

// String implement iterator
for (let char of "foo bar") {
	console.log(char);
}

let chars = [..."abc"];
console.log(chars);

// Starts with
const str = "foo bar baz";
console.log(str.startsWith("foo"));
console.log(str.startsWith("oo", 1)); // param starts searching from
console.log(str.startsWith("bar"));

// Ends with
console.log(str.endsWith("baz"));
console.log(str.endsWith("ba", 10)); // the param sets the length of the string

// Includes
console.log(str.includes("bar")); // true
console.log(str.includes("bar", 7)); // false // param starts searching from

// Repeat
console.log("foo bar baz".repeat(3)); // foo bar bazfoo bar bazfoo bar baz
