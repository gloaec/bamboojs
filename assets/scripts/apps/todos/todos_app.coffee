@Bamboo.module "TodosApp", (TodosApp, App, Backbone, Marionette, $, _) ->

  class TodosApp.Router extends Marionette.SubRouter

    prefix: "todos"

    appRoutes:
      ""          : "list"
      "completed" : "list_completed"
      "active"    : "list_active"
      
  API =
    list: (todos=false) ->
      new TodosApp.List.Controller todos: todos, show: "all"

    list_completed: (todos=false) ->
      new TodosApp.List.Controller todos: todos, show: "completed"

    list_active: (todos=false) ->
      new TodosApp.List.Controller todos: todos, show: "active"
      
    delete: (id, todo=false) ->
      todo.destroy()

    clearCompleted: (todos=false) ->
      _.each todos.getCompleted().models, (todo) ->
        todo.destroy()

  App.vent.on "todos:clicked", (todos) ->
    App.navigate "todos"
    API.list todos

  App.vent.on "destroy:todo:clicked", (todo) ->
    App.navigate "todos"
    API.delete todo.id, todo

  App.vent.on "clear-completed:todos:clicked", (todos) ->
    App.navigate "todos"
    API.clearCompleted todos

  App.addInitializer ->
    new TodosApp.Router
      controller: API
