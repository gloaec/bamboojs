@Bamboo.module "WidgetDefaultApp.Show", (Show, App, Backbone, Marionette, $, _) ->

  class Show.Widget extends App.Views.ItemView
    template: "widget_default/show/widget"
    className: "panel-body"
