/**
 * Todo
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    content: 'string'
  },

  seedData: [
    { content: "Setup the server", done: true },
    { content: "Install git server", done: true },
    { content: "Deploy a first proto", done: true },
    { content: "Nginx access to static files", done: false },
    { content: "Write some doc", done: false },
    { content: "Take the imaginary dog out", done: false },
    { content: "Get more steam games", done: false },
    { content: "Ask for donation", done: false }
  ]

};
