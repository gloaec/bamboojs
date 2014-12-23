@Bamboo.module "WidgetsApp.List", (List, App, Backbone, Marionette, $, _) ->

  class List.Empty extends App.Views.ItemView
    template: "widgets/list/_empty"

  class List.Widget extends App.Views.ItemView
    template: "widgets/list/_widget"

    attributes: ->
      class: @model.get 'class'

    events:
      "click"         : -> @trigger "widget:clicked", @model
      "click .edit"   : -> @trigger "edit:widget:clicked", @model
      "click .delete" : -> @trigger "delete:widget:clicked", @model
      "dblclick .name": "onEditWidgetNameClicked"

    onEditWidgetNameClicked: ->
      console.log 'edit'

    onRender: ->
      @stickit()

    templateHelpers: ->


  class List.Widgets extends App.Views.CompositeView
    template: "widgets/list/widgets"
    itemView: List.Widget
    emptyView: List.Empty
    itemViewContainer: "#widgets"
