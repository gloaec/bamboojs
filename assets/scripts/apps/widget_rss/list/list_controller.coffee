@Bamboo.module "WidgetRssApp.List", (List, App, Backbone, Marionette, $, _) ->

  class List.Controller extends App.Controllers.Base

    initialize: (options) ->
      {rss, topic, lang, widget} = options # TODO
      @rss = rss or= App.request "rss:entity"

      App.execute 'when:fetched', @rss, => console.log @ ; @refreshWidget widget
      
      rssView = @getRssView @rss

      rssView.on 'topic:clicked', (topic) =>
        @rss.set topic: topic
        @rss.fetch()
        App.execute 'when:fetched', @rss, => @refreshWidget widget

      rssView.on 'lang:clicked', (lang) =>
        @rss.set lang: lang
        @rss.fetch()
        App.execute 'when:fetched', @rss, => @refreshWidget widget

      @show rssView,
        loading: true

    refreshWidget: (widget) ->
      widget.set
        name : @rss.get 'title'
        badge: @rss.get('items').length
      

    getRssView: (rss) ->
      new List.Rss
        model: rss
        collection: rss.get 'items'
