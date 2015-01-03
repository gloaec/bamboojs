@Bamboo.module "Entities", (Entities, App, Backbone, Marionette, $, _) ->

  class Entities.Todo extends Entities.Model
    defaults:
      done: false

    toggle: (done) ->
      @set
        done: done

    isDone: ->
      return @get('done')
    
  class Entities.TodosCollection extends Entities.Collection

    model: Entities.Todo

    initialize: ->
      @updateCounts()
      @on('add', @updateCounts, @)
      @on('remove', @updateCounts, @)
      @on('change:done', @updateCounts, @)

    clearCompleted: ->
      completed = @where({done: true})
      _.each completed, (todo) =>
        @remove(todo)

    toggleAll: (done) ->
      @each (todo) ->
        todo.toggle(done)

    updateCounts: ->
      counts =
        total: @length
        done: @doneCount()

      counts.remaining = counts.total - counts.done
      counts.allDone = (counts.remaining is 0 and counts.done > 0)

      @counts = counts
      @trigger('update:counts', counts)

    doneCount: ->
      doneCount = @reduce (memo, todo) ->
        if todo.isDone()
          memo += 1
        return memo
      , 0
      return doneCount


  API =

    getTodos: ->
      todos = new Entities.TodosCollection
      todos.fetch reset: true
      todos

  App.reqres.setHandler "todo:entities", ->
    if not App.todoList
      App.todoList = API.getTodos()
    App.todoList
