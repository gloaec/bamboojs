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
      force: false
      collg: 3
      colmd: 4
      colsm: 6
      colxs: 3
      id: _.random 1, 999999999999999

  class Entities.WidgetsCollection extends Entities.Collection

    model: Entities.Widget

    localStorage: localStorage

    comparator: (m) ->
      m.get 'force' || ''

  API =
    getWidgets: (url, params = {}) ->
      new Entities.WidgetsCollection [
        name: "Calendar"
        link: "/calendar"
        icon: "fa-calendar"
        color: "success"
        badge: 3
        collg: 4
        colmd: 6
      ,
        name: "Mail"
        link: "/mail"
        icon: "fa-envelope"
        color: "primary"
        badge: 5
        collg: 4
        colmd: 6
      ,
        {force: 'icon', badge: '<i class="fa fa-warning text-danger"></i>'},
        {force: 'icon'},
        {force: 'icon'},
        {force: 'icon'},
      ,
        name: "Users"
        link: "/users"
        icon: "fa-users"
        color: "danger"
        badge: 1
        force: 'icon'
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
        {force: 'panel'},
        {}, {},
      ]
    
  App.reqres.setHandler "widget:entities", ->
    API.getWidgets()
