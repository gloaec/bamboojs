@Bamboo.module "Entities", (Entities, App, Backbone, Marionette, $, _) ->

  class Entities.RssItem extends Entities.Model

  class Entities.RssItemsCollection extends Entities.Collection
    model: Entities.RssItem

    comparator: (m) ->
      -m.get 'publishedDate'

    parse: (data) ->
      data.publishedDate = Date.parse data.publishedDate
      data

  class Entities.Rss extends Entities.Model

    defaults:
      items: []
      publishedDate: new Date()
      topics: [
        'top-stories'
        'france'
        'sport'
        'timeline'
      ],
      langs: [
        'fr'
        'en'
      ]

    relations: [
      type: Backbone.Many
      key: 'items'
      collectionType: 'Bamboo.Entities.RssItemsCollection'
    ]

    url: ->
      "http://www.france24.com/#{@get 'lang'}/#{@get 'topic'}/rss"

    sync: (method, model, options) ->
      if method is not 'read'
        super
      else
        @_fetch = new $.Deferred()
        feed = new google.feeds.Feed @url()
        feed.load (result) =>
          if result.error
            options.error result
           else
            options.success result
          @_fetch.resolve(true)

    parse: (data = {}) =>
      data.items = data.feed.entries
      data.title = data.feed.title
      data

  API =

    getRss: (params = {}) ->
      _.defaults params,
        lang:  'en'
        topic: 'top-stories'
        title: 'Top stories'
      rss = new Entities.Rss params
      rss.fetch reset: true
      rss
      

    getFrance24Feeds: (topic = 'top-stories', lang = 'en') ->
      rssFeeds = new Entities.RssFeedsCollection
      rssFeeds._fetch = new $.Deferred()
      feed = new google.feeds.Feed "http://www.france24.com/#{lang}/#{topic}/rss"
      feed.load (result) ->
        if !result.error
          setTimeout ->
            rssFeeds.reset result.feed.entries
            rssFeeds._fetch.resolve(true)
          , 2000
      rssFeeds

    getRssFeeds: (url, params = {}) ->
      _.defaults params,
        apikey: "vzjnwecqq7av3mauck2238uj" ## App.request "rotten:tomatoes:api:key"
        country: "us"
			
      rssFeeds = new Entities.RssFeedsCollection
      rssFeeds.url = "http://www.france24.com/en/france/rss/"
      rssFeeds.fetch
        reset: true
        data: params
      rssFeeds
		
  App.reqres.setHandler "rss:entity", (params) ->
    API.getRss params

  App.reqres.setHandler "search:rss_feed:entities", (searchTerm) ->
    API.getRssFeeds "movies",
      q: $.trim(searchTerm)
	
  App.reqres.setHandler "user:rss_feed:entities", ->
    API.getRssFeeds "lists/movies/upcoming",
      page_limit: 10
      page: 1
		
# Use this in your browser's console to initialize a JSONP request to see the API in action.
# $.getJSON("http://api.rottentomatoes.com/api/public/v1.0/movies.json?callback=?", {apikey: "vzjnwecqq7av3mauck2238uj", q: "shining"})
