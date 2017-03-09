global.window = Object.assign(
  require('mithril/test-utils/domMock.js')(),
  require('mithril/test-utils/pushStateMock')()
)

const mq = require('mithril-query')
const o = require('mithril/ospec/ospec')
const home = require('../src/modules/home')
const store = require('../src/store')

store.init()

o.spec('math', function () {
  o('adition works', function () {
    o(1 + 2).equals(3)
  })

  o('can render home', function () {
    home.view = o.spy(home.view)
    const output = mq(home)
    o(
      output.should.contain('Hello World!')
    ).equals(2)
  })
})
