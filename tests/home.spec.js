global.window = Object.assign(
  require('mithril/test-utils/domMock.js')(),
  require('mithril/test-utils/pushStateMock')()
)

const test = require('tape')
const mq = require('mithril-query')
const home = require('../src/modules/home')
const store = require('../src/store')

store.init()

test('renders', function (t) {
  t.plan(1)

  const output = mq(home)

  t.doesNotThrow(function () {
    output.should.contain('Hello World!')
  })
})

test('edit message', function (t) {
  let output
  t.plan(2)

  output = mq(home)

  t.throws(function () {
    output.should.contain('New Message!')
  })

  store.dispatch('home/editMessage', 'New Message!')

  output = mq(home)

  t.doesNotThrow(function () {
    output.should.contain('New Message!')
  })
})
