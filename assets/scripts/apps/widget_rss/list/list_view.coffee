@Bamboo.module "WidgetRssApp.List", (List, App, Backbone, Marionette, $, _) ->

  class List.Empty extends App.Views.ItemView
    template: "widget_rss/list/_empty"

  class List.RssItem extends App.Views.ItemView
    template: "widget_rss/list/_rss_item"
    tagName: "a"
    className: "list-group-item clearfix"
    attributes: ->
      href: @model.get 'link'

    initialize: ->
      @timer = setInterval =>
        @model.trigger "change:pubDate", @model
      , 30000

    bindings:
      ".updated_at" :
        observe: "publishedDate"
        onGet: (value) -> "#{moment(value).fromNow()}" if value

    onRender: ->
      @stickit()

    onClose: ->
      clearInterval(@timer)


  class List.Rss extends App.Views.CompositeView
    template: "widget_rss/list/rss"
    emtpyView: List.Empty
    itemView: List.RssItem
    itemViewContainer: ".rss-items"

    # TODO Component Dropdown menu

    bindings:
      '.topic': 'topic'
      '.lang' : 'lang'

    events: ->
      'click .topics a': (e) =>
        e.preventDefault()
        @trigger 'topic:clicked', $(e.target).text()
      'click .langs a': (e) =>
        e.preventDefault()
        @trigger "lang:clicked", $(e.target).text()

    onRender: ->
      @stickit()



