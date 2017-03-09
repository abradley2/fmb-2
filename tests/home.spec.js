global.window = Object.assign(
  require('mithril/test-utils/domMock.js')(),
  require('mithril/test-utils/pushStateMock')()
)

const test = require('tape')
const mq = require('mithril-query')
const home = require('../src/modules/home')
const store = require('../src/store')

store.init()

test('home', function (t) {
  t.equals(1 + 2, 3)

  const output = mq(home)

  t.doesNotThrow(function () {
    output.should.contain('Hello World!')
  })

  t.end()
})
