@Bamboo.module "CoreApp.NotFound", (NotFound, App, Backbone, Marionette, $, _) ->
  
  class NotFound.NotFound extends App.Views.ItemView
    template: "_core/not_found/page"

    onRender: -> App.mainRegion.$el.parent().addClass('not-found')
    onClose: -> App.mainRegion.$el.parent().removeClass('not-found')
