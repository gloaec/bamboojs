@Bamboo.module "WidgetDefaultApp", (WidgetDefaultApp, App, Backbone, Marionette, $, _) ->
    
  API =
    show: (params) ->
      new WidgetDefaultApp.Show.Controller params
  
  App.commands.setHandler "widget:default:show", (params) ->
    API.show params
