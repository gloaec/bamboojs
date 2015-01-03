do (Backbone) ->
  Backbone.Wreqr.Handlers.extend
    request: (name) ->
      if @hasHandler(name)
        @getHandler(name).apply @, _.rest arguments
      else
        alert "Handler not found '#{name}'"
