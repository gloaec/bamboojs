/**
 * Widget
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    name:    'string',
    link:    'string',
    command: 'string',
    icon:    'string',
    color:   'string',
    badge:   'string',
    force:   'string',
    collg:   'integer',
    rowlg:   'integer',
    colmd:   'integer', 
    rowmd:   'integer',
    colsm:   'integer', 
    rowsm:   'integer',
    colxs:   'integer', 
    rowxs:   'integer' 
  },

  seedData: [
    {
      name: "Youtube | Agoraphonic - Fateless",
      link: "//www.youtube.com/watch?v=bTEoejDdwoM",
      command: "//www.youtube.com/embed/bTEoejDdwoM",
      icon: "fa-youtube-play",
      color: "danger",
      collg: 4,
      colmd: 6
    },
    {
      name: "Soundcloud | Agoraphonic - A line in the sand",
      link: "//soundcloud.com/agoraphonic/a-line-in-the-sand",
      command: "//w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/154345411&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
      icon: "fa-soundcloud",
      color: "warning",
      collg: 4,
      colmd: 6
    },
    {
      name: "Todos",
      link: "/todos",
      command: "todos:widget:list",
      force: "panel",
      icon: "fa-list-ul",
      color: "primary",
      collg: 6,
      colmd: 6,
      colsm: 12
    },
    {
      name: "France24 RSS",
      link: "/rss",
      command: "widget:rss:list",
      icon: "fa-rss",
      color: "warning",
      collg: 6,
      colmd: 6,
      colsm: 12,
      force: "panel",
    }
  ]

};
