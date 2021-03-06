@Bamboo.module "Components.Page", (Page, App, Backbone, Marionette, $, _) ->
 
  class Page.TitleController extends App.Controllers.Base

    initialize: (options) ->
      @region = options.region or= App.request "default:title:region"
      if options.breadcrumb instanceof App.Entities.Model
        @breadcrumb = options.breadcrumb
      else if _.isObject options.breadcrumb
        @breadcrumb = new App.Entities.Model options.breadcrumb

      titleView = @getTitleView options
      
      @show titleView,
        loading: options.loading

    getTitleView: (options) ->
      new Page.TitleView
        title: options.title
        title_attribute: options.title_attribute
        subtitle: options.subtitle
        model: @breadcrumb

  class Page.PageController extends App.Controllers.Base
    
    initialize: (options) ->
      { view, config, loading } = options
      
      config = if _.isBoolean(config) then {} else config

      _.defaults config,
        title: ""
        title_attribute: 'name'
        subtitle: ""
        breadcrumb: @getEntities(view)
        entities: if loading.entities? then loading.entities else @getEntities(view)
        debug: false,
        loading: true
        toolbar: false


      ## TODO sync Entities.Page(title,subtitle) with
      # Entities.Breadcrumb(name,...)
      ## FIXME Title sync problems: 
      # Maybe try using "show:loading" for the whole Layout ?

      @layout = @getLayoutView config
      
      #App.flashRegion = @layout.flashRegion

      @listenTo @layout, "show", =>
        @getTitleView config
        @getTitleToolbarView config if config.breadcrumbsToolbar?
        @getBreadcrumbsView config
        @getBreadcrumbsToolbarView config if config.titleToolbar?
        @getContentView view, config

      @show @layout,
        loading: if loading? then loading else config.loading
    
    getEntities: (view) ->
      ## return the entities manually set during configuration, or just pull 
      ## off the model and collection from the view (if they exist)
      _.chain(view).pick("model", "collection").toArray().compact().value()
    
    getTitleView: (config) ->
      toolbarView = App.execute "show:title",
        title: config.title
        title_attribute: config.title_attribute
        subtitle: config.subtitle
        breadcrumbs: config.breadcrumbs
        region: @layout.titleRegion

    getBreadcrumbsView: (config) ->
      breadcrumbsView = App.execute "show:breadcrumbs",
        breadcrumbs: config.breadcrumbs
        region: @layout.breadcrumbsRegion

    getTitleToolbarView: (config) ->
      breadcrumbsToolbarView = App.execute "show:toolbar",
        toolbar: config.titleToolbar
        region: @layout.titleToolbarRegion

    getBreadcrumbsToolbarView: (config) ->
      breadcrumbsToolbarView = App.execute "show:toolbar",
        toolbar: config.breadcrumbsToolbar
        region: @layout.breadcrumbsToolbarRegion

    getContentView: (view, config) ->
      config.region = @layout.contentRegion
      App.execute "show:loading", view, config

    getLayoutView: (config) ->
      new Page.LayoutView
  
  App.commands.setHandler "show:title", (options) ->
    new Page.TitleController options

  App.commands.setHandler "show:page", (view, options) ->
    new Page.PageController
      view: view
      region: options.region
      loading: options.loading
      config: options.page
