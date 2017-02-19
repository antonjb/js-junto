const fibonacci = {
	[Symbol.iterator]: function*() {  // don't know what this is yet
		let pre = 0;
		let cur = 1;
		for (;;) { // infinite loop
			let temp = cur;
			pre = cur;
			cur += temp;
			yield cur;  // pauses the function
		}
	}
}

for (let n of fibonacci) {
	if (n > 1000) break;
	console.log(n);
}

// Simple generator
function* idMaker() {
	let index = 0;
	while (true) {
		yield index++;
	}
}

// var idGenerator = idMaker();
// console.log(idGenerator.next()); // 0
// console.log(idGenerator.next()); // 1
// console.log(idGenerator.next()); // 2
// console.log(idGenerator.return()); // undefined - done // returns the value and ends the generator
// console.log(idGenerator.next()); // undefined - done

// Combining generators
function* someGenerator(i) {
	yield i + 1;
	yield i + 2;
	yield i + 3;
}

function* generator(i = 0) {
	yield i;
	yield* someGenerator(i);
	yield i + 10;
}

// const gen = generator(10);
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


const iteratorTest = {
	[Symbol.iterator]: function*() { // conforming to the iterator protocol
		for (let i = 0; i < 10; i++) {
			yield `iterate ${i}`;
		}
	}
}

for (let n of iteratorTest) {
	console.log(n);
}

const str = "foo bar baz";
const strIterator = str[Symbol.iterator]();

for (let s of strIterator) {
	console.log(s);
}
