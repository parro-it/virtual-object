const test = require('esenv/tape');
const virtualObject = require('..');

test('add details files', function *(t) {
  const result = yield virtualObject();
  t.equal(result, 42);
});
