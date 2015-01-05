@Bamboo.module "WidgetDefaultApp.Show", (Show, App, Backbone, Marionette, $, _) ->

  class Show.Controller extends App.Controllers.Base

    initialize: (options) ->
      {widget} = options
      @show @getWidgetView widget

    getWidgetView: (widget)->
      new Show.Widget
        model: widget
