# bamboo.app
@Bamboo = do (Backbone, Marionette) ->

  # Inform that the application is loading
  console.info 'Loading application'

  # Declare a new Marionette Application
  App = new Marionette.Application

  # Add regions to the application
  App.addRegions
    
    # - Header region
    headerRegion:       "#header-region"

    # - Sidebar region
    sidebarRegion:      "#sidebar-region"

    # - Main region
    mainRegion:         "#main-region"

    # - Footer region
    footerRegion:       "#footer-region"

    # - Using the default
    #   [Region.Flashes](components/flash/flash_controller.html)
    #   component
    flashRegion:        Marionette.Region.Flashes.extend el: ".flash-region"

    # - Using the default
    #   [Region.Breadcrumbs](components/breadcrumbs/breadcrumbs_controller.html)
    #   component
    breadcrumbsRegion:  Marionette.Region.Breadcrumbs.extend el: "#breadcrumbs-region"

    # - Using the default
    #   [Region.Dialog](components/dialog/dialog_controller.html)
    #   component
    dialogRegion:       Marionette.Region.Dialog.extend el: "#dialog-region"
  
  # Set the default route to `dashboard`
  App.rootRoute = "/dashboard"

  App.reqres.setHandler "default:region", ->
    App.mainRegion
  App.reqres.setHandler "default:flash:region", ->
    App.flashRegion
  App.reqres.setHandler "default:breadcrumbs:region", ->
    App.breadcrumbsRegion
  App.reqres.setHandler "default:dialog:region", ->
    App.dialogRegion

  App.addInitializer ->
    App.module("HeaderApp").start()
    App.module("SidebarApp").start()
    App.module("FooterApp").start()
  
  App.commands.setHandler "register:instance", (instance, id) ->
    App.register instance, id
  
  App.commands.setHandler "unregister:instance", (instance, id) ->
    App.unregister instance, id

  App.on "initialize:after", (options) ->
    @startHistory()
    @navigate(@rootRoute, trigger: true) unless @getCurrentRoute()

  App
