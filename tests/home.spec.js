global.window = Object.assign(
  require('mithril/test-utils/domMock.js')(),
  require('mithril/test-utils/pushStateMock')()
)

const test = require('tape')
const mq = require('mithril-query')
const home = require('../client/modules/home')
const store = require('../client/store')

test('renders', function (t) {
  t.plan(1)

  store.init()

  const output = mq(home)

  t.doesNotThrow(function () {
    output.should.contain('Hello World!')
  })
})

test('edit message', function (t) {
  t.plan(2)

  store.init()

  const outputBefore = mq(home)

  t.throws(function () {
    outputBefore.should.contain('New Message!')
  })

  store.dispatch('home/editMessage', 'New Message!')

  const outputAfter = mq(home)

  t.doesNotThrow(function () {
    outputAfter.should.contain('New Message!')
  })
})
