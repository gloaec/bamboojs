@Bamboo.module "Entities", (Entities, App, Backbone, Marionette, $, _) ->

  localStorage = new Backbone.LocalStorage "TodosCollection"

  class Entities.Todo extends Entities.Model

    localStorage: localStorage
    url: false

    defaults:
      done: false

    toggle: (done = null) ->
      @set done: if done is null then not @get('done') else done

    isDone: ->
      @get('done')
    
  class Entities.TodosCollection extends Entities.Collection

    model: Entities.Todo

    localStorage: localStorage

    _filter: 'all'
    getFilter: -> @_filter
    setFilter: (filter)-> @_filter = filter

    #initialize: ->
    #  @updateCounts()
    #  @on('add', @updateCounts, @)
    #  @on('remove', @updateCounts, @)
    #  @on('change:done', @updateCounts, @)

    comparator: (m) ->
      -m.get 'created_at'

    completed: -> new Entities.TodosCollection @where done: true
    remaining: -> new Entities.TodosCollection @where done: false

    clearCompleted: ->
      @completed().destroyAll()

    toggleAll: (done) ->
      done or= @completed().size() < @remaining().size()
      @each (todo) ->
        todo.toggle(done)

#####

        #updateCounts: ->
        #  counts =
        #    total: @length
        #    done: @doneCount()

        #  counts.remaining = counts.total - counts.done
        #  counts.allDone = (counts.remaining is 0 and counts.done > 0)

        #  @counts = counts
        #  @trigger('update:counts', counts)

        #doneCount: ->
        #  doneCount = @reduce (memo, todo) ->
        #    if todo.isDone()
        #      memo += 1
        #    return memo
        #  , 0
        #  return doneCount


  API =

    getTodos: (filter) ->
      todos = new Entities.TodosCollection
      todos.fetch reset: true
      switch filter
        when 'completed' then todos.completed()
        when 'remaining' then todos.remaining()
        else todos

  App.reqres.setHandler "todo:entities", (filter) ->
    API.getTodos filter
