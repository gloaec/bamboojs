@Bamboo.module "SidebarApp.Show", (Show, App, Backbone, Marionette, $, _) ->

  class Show.Layout extends App.Views.Layout
    template: "sidebar/show/show_layout"
    #className: "sidebar-nav navbar-collapse"

    ui:
      menu   : '#side-menu'
      sidebar: '.sidebar-collapse'

    regions:
      searchRegion: "#search-region"

    onRender: ->
      @ui.menu.metisMenu()
      @trigger 'sidebar:rendered'
      App.getCurrentRoute()
