@Bamboo.module "WidgetsApp", (WidgetsApp, App, Backbone, Marionette, $, _) ->

  class WidgetsApp.Router extends Marionette.SubRouter

    prefix: "widgets"

    appRoutes:
      ""         : "list"
      ":id/edit" : "edit"
    
  API =
    list: (options) ->
      new WidgetsApp.List.Controller options

    edit: (id, widget=false) ->
      new WidgetsApp.Edit.Controller id: id, widget: widget

    delete: (id, widget=false) ->
      widget.destroy()
      
  App.vent.on "widgets:clicked", (widgets) ->
    App.navigate "widgets"
    API.list widgets

  App.vent.on "edit:widget:clicked", (widget) ->
    App.navigate "widgets/#{widget.id}/edit"
    API.edit widget.id, widget

  App.vent.on "delete:widget:clicked", (widget) ->
    App.navigate "widgets/#{widget.id}/delete"
    API.delete widget.id, widget

  App.addInitializer ->
    new WidgetsApp.Router
      controller: API
