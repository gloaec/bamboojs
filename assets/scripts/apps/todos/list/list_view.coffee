@Bamboo.module "TodosApp.List", (List, App, Backbone, Marionette, $, _) ->
    
  ENTER = 13

  class List.Empty extends App.Views.ItemView
    template: "todos/list/_empty"

  class List.Layout extends App.Views.Layout
    template: "todos/list/list_layout"

    regions:
      todosHeaderRegion: ".todos-header-region"
      todosMainRegion:   ".todos-main-region"
      todosFooterRegion:  ".todos-footer-region"

  class List.Todo extends App.Views.ItemView
    template: "todos/list/_todo"
    tagName: "li"
    className: "bottom-0 top-0 clearfix"

    ui:
      toggleBtn: '.toogle'

    events:
      "click .destroy" : -> @trigger 'destroy:todo:clicked', @model
      "click .toggle"  : 'onToggle'
      "blur .content"  : 'onBlur'

    modelEvents:
      'change:done': 'render'

    bindings:
      '.content': 'content'

    onRender: ->
      @stickit()

    onToggle: (e) =>
      @model.toggle()
      @model.save null,
        success: =>
          console.log @model.attributes
          #@trigger 'toggle:todo:clicked', @model
        error: (todo, jqXHR) =>
          @showErrors $.parseJSON(jqXHR.responseText)

    onBlur: (e) =>
      if @model.isValid(true)
        @model.save null,
          error: (todo, jqXHR) =>
            @showErrors $.parseJSON(jqXHR.responseText)

    templateHelpers: =>
      isHidden: =>
        if @model.get 'done'
          @model.collection.getFilter() is 'remaining'
        else
          @model.collection.getFilter() is 'completed'

  class List.Todos extends App.Views.CollectionView
    template: "todos/list/_todos"
    itemView: List.Todo
    emptyView: List.Empty
    tagName: 'ul'
    className: 'list-group bottom-0'
    collectionEvents:
      'filter': 'render'
        
  class List.Form extends App.Views.ItemView
    template: "todos/list/_form"

    initialize: ->
      @listenTo @model, 'validated', (_, __, attrs) => @showErrors(attrs)

    ui:
      content: '.content'
      filter: "change input[name='filter']"

    bindings:
      '.content': "content"

    collectionEvents:
      'change': 'render'
    
    events:
      "keypress .content" : 'onKeyPress'
      "click .add"        : 'onAddClicked'
      "click .toggle-all" : 'onToggleAllClicked'
      "change input[name='filter']": "onFilterChange"

    onAddClicked: (e) =>
      @save()

    onToggleAllClicked: (e) =>
      @collection.toggleAll()

    onKeyPress : (e) =>
      switch e.which
        when ENTER
          @save()

    onFilterChange: (e) ->
      @trigger "filter:clicked", $(e.target).val()

    onRender: ->
      @stickit()
      @validateit()

    save: =>
      if @model.isValid(true)
        @model.save null,
          success: =>
            @collection.add(@model)
            @model = new @collection.model()
            @render()
            @ui.content.focus()
            @trigger 'new:todo:clicked', @model
          error: (todo, jqXHR) =>
            @showErrors $.parseJSON(jqXHR.responseText)

    
    serializeData: ->
      _.extend super(),
        filter: @collection.getFilter()
        remaining: @collection.remaining().size()

    templateHelpers: =>
      allDone: =>
        @collection.remaining().size() == 0

  class List.Footer extends App.Views.ItemView
    template: "todos/list/_footer"

    initialize: ->
      @listenTo @collection, 'all', @render, @

    events:
      "click .clear-completed"     : "onClearCompleted"

    onClearCompleted: (e) ->
      @collection.completed().destroyAll()

    serializeData: ->
      _.extend super(),
        completed: @collection.completed().size()
