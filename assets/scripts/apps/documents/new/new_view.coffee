@Bamboo.module "DocumentsApp.New", (New, App, Backbone, Marionette, $, _) ->

  class New.Document extends App.Views.ItemView
    template: "documents/new/new_document"

    initialize: ->
      @listenTo @model, 'validated', (_, __, attrs) => @showErrors(attrs)

    ui:
      "name"       : "#name"
      "dataTable"  : "#dataTable"

    events:
      'submit form' : 'formSubmitted'

    bindings:
      "#name"      : "name"

    onRender: ->
      @ui.dataTable.dataTable
        paging: false
        searching: false
        info: false
        language:
          emptyTable: "No files added"
      @stickit()
      @validateit()

    formSubmitted: (e) ->
      e.preventDefault()
      if @model.isValid(true)
        @model.save null,
          success: =>
            @collection.add @model
            App.execute "flash:success", "Post ##{@model.id} successfully created"
            App.navigate "posts", trigger: true
          error: (post, jqXHR) =>
            @showErrors $.parseJSON(jqXHR.responseText).errors
