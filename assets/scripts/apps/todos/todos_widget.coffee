@Bamboo.module "TodosWidget", (TodosWidget, App, Backbone, Marionette, $, _) ->

  API =
    list: (params) ->
      new TodosWidget.List.Controller params
  
  App.commands.setHandler "todos:widget:list", (params) ->
    API.list params
