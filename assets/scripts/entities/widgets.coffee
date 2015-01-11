@Bamboo.module "Entities", (Entities, App, Backbone, Marionette, $, _) ->

  localStorage = new Backbone.LocalStorage "WidgetsCollection"

  class Entities.Widget extends Entities.Model

    localStorage: localStorage

    defaults: ->
      name: "[Untitled Widget]"
      link: '/404'
      command: "widget:default:show"
      icon: "fa-puzzle-piece"
      color: "default"
      badge: false
      force: "auto"
      collg: 3, rowlg: 12
      colmd: 4, rowmd: 12
      colsm: 6, rowsm: 12
      colxs: 3, rowxs: 1
      id: _.random 1, 999999999999999

  class Entities.WidgetsCollection extends Entities.Collection

    model: Entities.Widget

    localStorage: localStorage

    #comparator: (m) ->
    #  m.get 'force' || ''

  API =
    getWidgets: (url, params = {}) ->
      new Entities.WidgetsCollection [
        name: "Mail"
        link: "/mail"
        icon: "fa-envelope"
        color: "primary"
        badge: 5
        collg: 4
        colmd: 6
        force: 'icon'
      ,
        name: "Calendar"
        link: "/calendar"
        icon: "fa-calendar"
        color: "success"
        badge: 3
        collg: 4
        colmd: 6
        force: 'icon'
      ,
        name: "Users"
        link: "/users"
        icon: "fa-users"
        color: "danger"
        force: 'icon'
      ,
        {force: 'icon', badge: '<i class="fa fa-warning text-warning"></i>'}
      ,
        name: "Youtube | Agoraphonic - Fateless",
        link: "//www.youtube.com/watch?v=bTEoejDdwoM"
        command: "//www.youtube.com/embed/bTEoejDdwoM"
        icon: "fa-youtube-play"
        color: "danger"
        collg: 4
        colmd: 6
      ,
        name: "Soundcloud | Agoraphonic - A line in the sand",
        link: "//soundcloud.com/agoraphonic/a-line-in-the-sand"
        command: "//w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/154345411&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
        icon: "fa-soundcloud"
        color: "warning"
        collg: 4
        colmd: 6
      ,
        name: "Todos"
        link: "/todos"
        command: "todos:widget:list"
        force: "panel"
        icon: "fa-list-ul"
        color: "info"
        collg: 6
        colmd: 6
        colsm: 12
      ,
        name: "France24 RSS"
        link: "/rss"
        command: "widget:rss:list"
        icon: "fa-rss"
        color: "warning"
        collg: 6
        colmd: 6
        colsm: 12
        force: 'panel'
      ,
        {force: 'panel'},
        {}, {},
        {}, {},
        {force: 'icon'},
        {force: 'icon'},
        {force: 'icon'},
        {force: 'icon'},
      ]
    
  App.reqres.setHandler "widget:entities", ->
    API.getWidgets()
