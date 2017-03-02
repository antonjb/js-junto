// ES6 String tests

test("Template literal", () => {
	const firstName = "Jane";
	const lastName = "Smith";
	const expected = "Hello Jane Smith";

	// Use template literal to match expected
	const result = ``;
	expect(result).toBe(expected);
});

test("Multiline string", () => {
	const expected = `foo
	bar`;
	const result = ``;
	expect(result).toBe(expected);
});

test("Iterator", () => {
	const str = "foo";
	const expected = ["f","o","o"];
	const result = [];

	// User for-of to generate expected
	expect(result).toBe(expected);
});

test("Spread", () => {
	const str = "foo";
	const expected = ["f", "o", "o"];
	const result = [];
	// use the spread operator to create expected
	expect(result).toBe(expected);
});

test("Starts with", () => {
	const str = "foo bar baz";
	// use startsWith to make true
	expect(str).toBe(true);
	// use startsWith to make true
	expect(str.startsWith("bar")).toBe(true);
});

test("Ends with", () => {
	const str = "foo bar baz";
	// use endsWith to make true
	expect(str).toBe(true);
	// use endsWith to make true
	expect(str.endsWith("bar")).toBe(true);
});

test("Repeat", () => {
	const str = "foo";
	const expected = "foofoofoo";
	result = "";
	// use repeat to make true
	expect(result).toBe(true);
});
