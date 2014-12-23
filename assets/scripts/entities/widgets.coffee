@Bamboo.module "Entities", (Entities, App, Backbone, Marionette, $, _) ->

  class Entities.Widget extends Entities.Model

    defaults:
      name: "[Untitled Widget]"
      command: "widget:default"
      icon: "fa-puzzle-piece"
      color: "default"
      class: "col-lg-3 col-md-4 col-sm-6 col-xs-12"
      type: "panel"

  class Entities.WidgetsCollection extends Entities.Collection
    model: Entities.Widget

  API =
    getWidgets: (url, params = {}) ->
      new Entities.WidgetsCollection [
        name: "Calendar md-6"
        command: "widget:calendar:sm6"
        icon: "fa-calendar"
        color: "green"
        class: "col-md-6"
      ,
        name: "Mail sm-1"
        command: "widget:mail:sm1"
        icon: "fa-envelope"
        color: "primary"
        class: "col-lg-1 col-md-2 col-sm-4 col-xs-4"
        type: "icon"
      ,
        {}
      ]
    
  App.reqres.setHandler "widget:entities", ->
    API.getWidgets()
