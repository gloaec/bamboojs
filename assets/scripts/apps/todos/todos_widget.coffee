@Bamboo.module "TodosWidget", (TodosWidget, App, Backbone, Marionette, $, _) ->

  API =
    list: (params) ->
      new TodosWidget.List.Controller params
    list: (todos=false) ->
      new TodosWidget.List.Controller todos: todos, show: "all"
  
  App.commands.setHandler "todos:widget:list", (params) ->
    API.list params
