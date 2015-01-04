@Bamboo.module "Entities", (Entities, App, Backbone, Marionette, $, _) ->
  
  class Entities.Collection extends Backbone.Collection

    destroyAll: =>
      model.destroy() while model = @first()

#    @mixin 'mutli_selectable'
#    @mixin 'single_selectable'
