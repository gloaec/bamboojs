@Bamboo.module "DashboardApp.Show", (Show, App, Backbone, Marionette, $, _) ->

  class Show.Controller extends App.Controllers.Base

    initialize: ->
      @layout = @getLayoutView()

      @listenTo @layout, "show", =>
        @listApps()

      @show @layout
    
    listApps: ->
      App.execute "list:dashboard:apps", @layout.appsRegion

    getLayoutView: ->
      new Show.Layout
