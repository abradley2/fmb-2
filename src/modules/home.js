const m = require('mithril')
const i = require('icepick')
const hyperx = require('hyperx')
const {getState, setupReducer, dispatch} = require('../store')
const html = hyperx(m)

const $editMessage = 'home/editMessage'

setupReducer('home')
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
  dispatch('home/editMessage', message)
}

function homeView () {
  const state = getState()

  return html`<div>
    <input
      value=${state.home.message}
      oninput=${m.withAttr('value', editMessage)}
    />
    <h3>${state.home.message}</h3>
  </div>`
}

module.exports = {view: homeView}
