@Bamboo.module "DashboardAppsApp.List", (List, App, Backbone, Marionette, $, _) ->

  class List.Empty extends App.Views.ItemView
    template: "dashboard_apps/list/_empty"

  class List.App extends App.Views.ItemView
    template: "dashboard_apps/list/_app"
    className: "col-md-3"

    modelEvents:
      'change': 'render'

  class List.Apps extends App.Views.CompositeView
    template: "dashboard_apps/list/apps"
    itemViewContainer: "#apps"
    itemView: List.App
    emptyView: List.Empty
