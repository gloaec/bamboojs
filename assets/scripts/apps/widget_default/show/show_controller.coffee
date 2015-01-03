@Bamboo.module "WidgetDefaultApp.Show", (Show, App, Backbone, Marionette, $, _) ->

  class Show.Controller extends App.Controllers.Base

    initialize: ->
      @show @getWidgetView()

    getWidgetView: ->
      new Show.Widget
