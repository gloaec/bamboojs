@Bamboo.module "WidgetsApp.List", (List, App, Backbone, Marionette, $, _) ->

  class List.Controller extends App.Controllers.Base

    initialize: ->
      widgets = App.request "widget:entities"

      @layout = @getLayoutView()
      
      @listenTo @layout, "show", =>
        @widgetsView widgets

      @show @layout,
        page:
          title: 'Widgets'
          subtitle: 'Overview'
          titleToolbar:
            view: @titleToolbarView widgets
          breadcrumbs:
            view: @breadcrumbsView widgets
          breadcrumbsToolbar:
            view: @breadcrumbsToolbarView widgets

    widgetsView: (widgets) ->
      widgetsView = @getWidgetsView widgets

      widgetsView.on "childview:edit:widget:clicked", (iv, widget) ->
        App.vent.trigger "edit:widget:clicked", widget

      widgetsView.on "childview:widget:clicked", (iv, widget) ->
        App.vent.trigger "widget:clicked", widget

      widgetsView.on "childview:delete:widget:clicked", (iv, widget) ->
        App.vent.trigger "delete:widget:clicked", widget

      @show widgetsView,
        loading: true
        region: @layout.widgetsRegion

    breadcrumbsView: (widgets) ->
      breadcrumbsView = @getBreadcrumbsView widgets
      breadcrumbsView

    titleToolbarView: (widgets) ->
      titleToolbarView = @getTitleToolbarView widgets
      titleToolbarView

    breadcrumbsToolbarView: (widgets) ->
      breadcrumbsToolbarView = @getBreadcrumbsToolbarView widgets
      breadcrumbsToolbarView.on "new:widget:clicked", (widgets) ->
        alert 'coucou'
        widgets.add(new widgets.model())
        App.vent.trigger "new:widget:clicked", widgets

      breadcrumbsToolbarView

    getWidgetsView: (widgets) ->
      new List.Widgets
        collection: widgets

    getBreadcrumbsView: (widgets) ->
      new List.Breadcrumbs
        collection: widgets

    getTitleToolbarView: (widgets) ->
      new List.TitleToolbar
        collection: widgets

    getBreadcrumbsToolbarView: (widgets) ->
      new List.BreadcrumbsToolbar
        collection: widgets

    getLayoutView: ->
      new List.Layout
