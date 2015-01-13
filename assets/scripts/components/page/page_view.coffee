@Bamboo.module "Components.Page", (Page, App, Backbone, Marionette, $, _) ->
  
  class Page.LayoutView extends App.Views.Layout
    template: "page/page_layout"
    className: "page"
  
    regions:
      titleRegion              : '#page-title-region'
      breadcrumbsRegion        : '#page-breadcrumbs-region'
      breadcrumbsToolbarRegion : '#page-breadcrumbs-toolbar-region'
      titleToolbarRegion       : '#page-title-toolbar-region'
      contentRegion            : '#page-content-region'
      #flashRegion             : Marionette.Region.Flashes.extend el: ".flash-region"

  class Page.TitleView extends App.Views.ItemView
    template: "page/title_view"

    modelEvents:
      "change": "render"

    serializeData: ->
      _.extend Backbone.Marionette.ItemView::serializeData.call(@),
        title: @model?.get(@options.title_attribute) or @options.title
        subtitle: @model?.get(@options.subtitle_attribute) or @options.subtitle
