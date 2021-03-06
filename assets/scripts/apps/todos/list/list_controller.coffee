@Bamboo.module "TodosApp.List", (List, App, Backbone, Marionette, $, _) ->

  class List.Controller extends App.Controllers.Base

    initialize: (options) ->
      {widget, todos} = options
      @todos = todos or= App.request "todo:entities"

      @layout = @getLayoutView todos

      @listenTo @layout, "show", =>
        @todosView todos
        @footerView todos
        @formView todos
			
      @show @layout

    formView: (todos) ->
      formView = @getFormView todos

      formView.on "new:todo:clicked", (todo) ->
        App.vent.trigger "new:todo:clicked", todo

      formView.on "filter:clicked", (filter) =>
        @todos.setFilter filter
        @todos.trigger 'filter'

      @show formView, region: @layout.todosHeaderRegion
		
    todosView: (todos) ->
      todosView = @getTodosView todos

      todosView.on "childview:destroy:todo:clicked", (iv, todo) ->
        App.vent.trigger "destroy:todo:clicked", todo

      @show todosView,
        region: @layout.todosMainRegion
        loading: if @layout.todosMainRegion.currentView then { loadingType: "opacity" } else true

    footerView: (todos) ->
      footerView = @getFooterView todos

      footerView.on "clear-completed:todos:clicked", (todos) ->
        App.vent.trigger "clear-completed:todos:clicked", todos

      @show footerView, region: @layout.todosFooterRegion

    getFormView: (todos) ->
      new List.Form
        model: new todos.model()
        collection: todos

    getTodosView: (todos) ->
      new List.Todos
        collection: todos

    getFooterView: (todos) ->
      new List.Footer
        collection: todos

    getLayoutView: (todos) ->
      new List.Layout
        collection: todos
