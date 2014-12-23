@Bamboo.module "Entities", (Entities, App, Backbone, Marionette, $, _) ->

  class Entities.App extends Entities.Model
      
    urlRoot: -> "/api/app"

    relations: []

    defaults:
      name: '[Untitled Application]'
      icon: 'fa-cube'
      route: null
      color: 'default'
      count: ' '
      count_label: ' '

    validation:
      route: [
        required: true
        msg: 'Route is required'
      ,
        pattern: /^\//
        msg: 'Must start with "/"'
      ]
    
  class Entities.AppsCollection extends Entities.Collection

    model: Entities.App

    url: -> "/api/app"

    comparator: (m) ->
      -m.get "created_at"

    getFavorites: (id) ->
        #@where _id: id
	

  API =
    newApp: ->
      new Entities.App

    getApps: ->
      apps = new Entities.AppsCollection
      apps.fetch reset: true
      apps

    getApp: (id) ->
      app = new Entities.App id: id
      app.fetch()
      app

  App.reqres.setHandler "app:entities", ->
    API.getApps()
    
  App.reqres.setHandler "app:entity", (id) ->
    API.getApp id

  App.reqres.setHandler "new:app:entity", ->
    API.newApp
