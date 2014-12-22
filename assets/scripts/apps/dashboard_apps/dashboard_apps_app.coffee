@Bamboo.module "DashboardAppsApp", (DashboardAppsApp, App, Backbone, Marionette, $, _) ->

  API =
    list: (region) ->
      new DashboardAppsApp.List.Controller
        region: region
  
  App.commands.setHandler "list:dashboard:apps", (region) ->
    API.list region
