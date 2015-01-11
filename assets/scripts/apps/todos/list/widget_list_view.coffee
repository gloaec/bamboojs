@Bamboo.module "TodosWidget.List", (List, App, Backbone, Marionette, $, _) ->
    
  ENTER = 13

  class List.Layout extends App.Views.Layout
    template: "todos/list/widget_list_layout"

    regions:
      todosHeaderRegion: ".todos-header-region"
      todosMainRegion:   ".todos-main-region"
      todosFooterRegion:  ".todos-footer-region"

  class List.Todo extends App.Views.ItemView
    template: "todos/list/_widget_todo"
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
    itemView: List.Todo
    tagName: 'ul'
    className: 'list-group bottom-0'
    collectionEvents:
      'filter': 'render'
        
  class List.Form extends App.Views.ItemView
    template: "todos/list/_widget_form"

    initialize: ->
      @listenTo @model, 'validated', (_, __, attrs) => @showErrors(attrs)

    ui:
      content: '.content'
        
    bindings:
      '.content': "content"

    collectionEvents:
      'change': 'render'
    
    events:
      "keypress .content" : 'onKeyPress'
      "click .add"        : 'onAddClicked'
      "click .toggle-all" : 'onToggleAllClicked'

    onAddClicked: (e) =>
      @save()

    onToggleAllClicked: (e) =>
      @collection.toggleAll()

    onKeyPress : (e) =>
      switch e.which
        when ENTER
          @save()

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

    
    onRender: ->
      @stickit()
      @validateit()

    templateHelpers: =>
      allDone: =>
        @collection.remaining().size() == 0

  class List.Footer extends App.Views.ItemView
    template: "todos/list/_widget_footer"

    initialize: ->
      @listenTo @collection, 'all', @render, @

    ui:
      filter: "change input[name='filter']"

    events:
      "click .clear-completed"     : "onClearCompleted"
      "change input[name='filter']": "onFilterChange"

    onClearCompleted: (e) ->
      @collection.completed().destroyAll()

    onFilterChange: (e) ->
      @trigger "filter:clicked", $(e.target).val()

    serializeData: ->
      _.extend super(),
        completed: @collection.completed().size()
        filter: @collection.getFilter()
      
