var myModule = require('./index.js')
var test = require('tape')

test('value is 1', function(t) {
  t.equal(myModule, 1, 'value is 1')
  t.end()
})
