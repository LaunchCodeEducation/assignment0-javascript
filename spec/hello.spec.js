const hello = require('../hello');

test('Checking to see if the test outputs the correct message..', () => {
	expect(hello()).toBe("Hello world!");
});
