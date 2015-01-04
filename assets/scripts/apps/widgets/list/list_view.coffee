@Bamboo.module "WidgetsApp.List", (List, App, Backbone, Marionette, $, _, eco) ->

  class List.Empty extends App.Views.ItemView
    template: "widgets/list/_empty"

  class List.Widget extends App.Views.Layout
    template: "widgets/list/_widget"

    regions:
      widgetRegion: '.widget-region'

    ui:
      link: 'a'
      appearance: '.appearance'

    bindings:
      '.name' : 'name'
      '.badge':
        observe: 'badge'
        updateMethod: 'html'

    events:
      "click"         : -> @trigger "widget:clicked", @model
      "click .edit"   : -> @trigger "edit:widget:clicked", @model
      "click .delete" : -> @trigger "delete:widget:clicked", @model
      "dblclick .name": "onEditWidgetNameClicked"
      "change .appearance": "onAppearanceChange"

    modelEvents:
      "change:force": "render"

    onClearCompleted: (e) ->
      @collection.completed().destroyAll()

    onAppearanceChange: (e) ->
      @model.set force: $(e.target).val()

    onEditWidgetNameClicked: ->
      console.log 'edit'

    onRender: ->
      @stickit()
      @ui.link.contextmenu
        before: ->
          $('body').on 'click contextmenu', =>
            @closemenu()
          $('.context-menu.open').removeClass 'open'
        onItem: (context, e) ->
          if $(e.target).find('.appearance').length
            $(e.target).find('.appearance').trigger 'change'
      App.execute @model.get('command'),
        widget: @model
        region: @widgetRegion
      
  class List.Widgets extends App.Views.CompositeView
    template: "widgets/list/widgets"
    itemView: List.Widget
    emptyView: List.Empty
    itemViewContainer: "#widgets"
