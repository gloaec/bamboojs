@Bamboo.module "WidgetRssApp", (WidgetRssApp, App, Backbone, Marionette, $, _) ->

  API =
    list: (params) ->
      new WidgetRssApp.List.Controller params
  
  App.commands.setHandler "widget:rss:list", (params) ->
    API.list params
