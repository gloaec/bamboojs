@Bamboo.module "WidgetsApp.List", (List, App, Backbone, Marionette, $, _, eco) ->

  class List.Empty extends App.Views.ItemView
    template: "widgets/list/_empty"

  class List.Widget extends App.Views.Layout
    template: "widgets/list/_widget"

    regions:
      widgetRegion: '.widget-region'

    attributes: ->
      class: """
        col-lg-#{if @model.get('force') is 'icon'  then 1  else @model.get('collg')}
        col-md-#{if @model.get('force') is 'icon'  then 2  else @model.get('colmd')}
        col-sm-#{if @model.get('force') is 'icon'  then 3  else @model.get('colsm')}
        col-xs-#{if @model.get('force') is 'panel' then 12 else @model.get('colxs')}
      """

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

    onEditWidgetNameClicked: ->
      console.log 'edit'

    onRender: ->
      @stickit()
      App.execute @model.get('command'),
        widget: @model
        region: @widgetRegion
      
  class List.Widgets extends App.Views.CompositeView
    template: "widgets/list/widgets"
    itemView: List.Widget
    emptyView: List.Empty
    itemViewContainer: "#widgets"
