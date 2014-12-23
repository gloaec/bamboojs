@Bamboo.module "DashboardAppsApp.List", (List, App, Backbone, Marionette, $, _) ->

  class List.Controller extends App.Controllers.Base

    initialize: ->
      apps = App.request "app:entities"
      
      appsView = @getAppsView apps
      
      @show appsView,
        loading: true

    getAppsView: (apps) ->
      new List.Apps
        collection: apps
