@Bamboo.module "DashboardAppsApp.List", (List, App, Backbone, Marionette, $, _) ->

  class List.Controller extends App.Controllers.Base

    initialize: ->
      apps = App.request "app:entities"
      
      App.execute 'when:fetched', apps, ->

      appsView = @getAppsView apps
      
      @show appsView,
        loading:
          entities: apps

    getAppsView: (apps) ->
      new List.Apps
        collection: apps
