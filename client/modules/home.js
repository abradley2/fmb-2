const m = require('mithril')
const i = require('icepick')
const hyperx = require('hyperx')
const store = require('../store')

const html = hyperx(m)

const $editMessage = 'home/editMessage'

store.setupReducer('home')
  .on('__INIT__', function () {
    return {
      message: 'Hello World!'
    }
  })
  .on($editMessage, function (oldState, payload) {
    return i.set(oldState, 'message', payload)
  })
  .create()

function editMessage (message) {
  store.dispatch($editMessage, message)
}

function homeView () {
  const state = store.getState()

  return html`<div>
    <input
      value=${state.home.message}
      oninput=${m.withAttr('value', editMessage)}
    />
    <h3>${state.home.message}</h3>
  </div>`
}

module.exports = {view: homeView}
