const sum = require('./sum');

test('zero', () => {
  expect(sum(result=>{return "-> "+result})).toBe("-> prints: -> 0");
});

test('one', () => {
  expect(sum(1)(result=>{return "-> "+result})).toBe("-> prints: -> 1");
});

test('two', () => {
  expect(sum(1)(2)(result=>{return "-> "+result})).toBe("-> prints: -> 3");
});

test('three', () => {
  expect(sum(1)(2)(4)(result=>{return "-> "+result})).toBe("-> prints: -> 7");
});