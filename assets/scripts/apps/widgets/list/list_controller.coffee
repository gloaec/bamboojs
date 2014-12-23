@Bamboo.module "WidgetsApp.List", (List, App, Backbone, Marionette, $, _) ->

  class List.Controller extends App.Controllers.Base

    initialize: ->
      widgets = App.request "widget:entities"

      widgetsView = @getWidgetsView widgets

      widgetsView.on "childview:edit:widget:clicked", (iv, widget) ->
        App.vent.trigger "edit:widget:clicked", widget

      widgetsView.on "childview:widget:clicked", (iv, widget) ->
        App.vent.trigger "widget:clicked", widget

      widgetsView.on "childview:delete:widget:clicked", (iv, widget) ->
        App.vent.trigger "delete:widget:clicked", widget

      @show widgetsView,
        loading: true

    getWidgetsView: (widgets) ->
      new List.Widgets
        collection: widgets
