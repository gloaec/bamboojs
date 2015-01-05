@Bamboo.module "WidgetsApp.List", (List, App, Backbone, Marionette, $, _, eco) ->

  class List.Empty extends App.Views.ItemView
    template: "widgets/list/_empty"

  class List.Widget extends App.Views.Layout
    template: "widgets/list/_widget"

    regions:
      widgetRegion: '.widget-region'

    attributes: ->
      class: """
        widget
        col-lg-#{ if @model.get('force')  is 'icon'  then '1'  else @model.get('collg') }
        col-md-#{ if @model.get('force')  is 'icon'  then '2'  else @model.get('colmd') }
        col-sm-#{ if @model.get('force')  is 'icon'  then '3'  else @model.get('colsm') }
        col-xs-#{ if @model.get('force')  is 'panel' then '12' else @model.get('colxs') }
      """

    ui:
      link: 'a'
      appearance: '.appearance'
      name: '.name'
      inputName: '.input-name'
      widget: '.widget'
      icon: '.icon-widget'
      panel: '.panel'
      contextMenu: '.context-menu'
      iconRegion: '.icon-region'
      panelRegion: '.panel-region'

    bindings:
      '.name' : 'name'
      '.link' : 'link'
      '.icon' :
        observe: 'icon'
        updateMethod: 'html'
        onGet: (v) ->
          "<i class='fa fa-fw #{v}'></i>"
      '.big-icon' :
        observe: 'icon'
        updateMethod: 'html'
        onGet: (v) ->
          "<i class='fa fa-fw fa-2x #{v}'></i>"
      '.panel .appearance':
        observe: 'force'
        update: ($el, val) ->
          $el.parent().removeClass('active')
          $el.filter("[value='#{val}']").parent().addClass('active')
      '.context-menu .appearance':
        observe: 'force'
        update: ($el, val) ->
          $el.parent().removeClass('active')
          $el.filter("[value='#{val}']").parent().addClass('active')

      '.context-menu .input-name': 'name'
      '.panel        .input-name': 'name'
      '.context-menu .input-link' : 'link'
      '.panel        .input-link' : 'link'
      '.context-menu .input-icon' : 'icon'
      '.panel        .input-icon' : 'icon'
      '.context-menu .input-command' : 'command'
      '.panel        .input-command' : 'command'
      '.context-menu .input-colxs': 'colxs'
      '.panel        .input-colxs': 'colxs'
      '.context-menu .input-colsm': 'colsm'
      '.panel        .input-colsm': 'colsm'
      '.context-menu .input-colmd': 'colmd'
      '.panel        .input-colmd': 'colmd'
      '.context-menu .input-collg': 'collg'
      '.panel        .input-collg': 'collg'
      '.badge':
        observe: 'badge'
        updateMethod: 'html'

    events:
      "click"         : -> @trigger "widget:clicked", @model
      "click .edit"   : -> @trigger "edit:widget:clicked", @model
      "click .delete" : -> @trigger "delete:widget:clicked", @model
      "dblclick .name": "onEditWidgetNameClicked"
      #"change .appearance": "onAppearanceChange"
      "blur .input-command": "onCommandBlur"

    modelEvents:
      "change:colxs": -> @$el.attr @attributes()
      "change:colsm": -> @$el.attr @attributes()
      "change:colmd": -> @$el.attr @attributes()
      "change:collg": -> @$el.attr @attributes()

      "change:force": -># "render"
        @$el.attr @attributes()
        switch @model.get 'force'
          when 'auto'
            @ui.iconRegion
            .removeClass('hidden')
            .addClass('visible-xs')
            @ui.panelRegion
            .removeClass('hidden')
            .addClass('hidden-xs')
          when 'panel'
            @ui.iconRegion
            .removeClass('visible-xs')
            .addClass('hidden')
            @ui.panelRegion
            .removeClass('hidden')
            .removeClass('hidden-xs')
          when 'icon'
            @ui.iconRegion
            .removeClass('visible-xs')
            .removeClass('hidden')
            @ui.panelRegion
            .removeClass('hidden-xs')
            .addClass('hidden')
        @onResize()

    initialize: ->
      $(window).on 'resize', @onResize

    onCommandBlur:(e) ->
      @render()

    onAppearanceChange: (e) ->
      @model.set force: $(e.target).val()

    onResize: (e) =>
      if @ui.widget.width() < 300
        @ui.panel.find('.hidden-xs').hide()
        @ui.panel.find('.visible-xs').show()
        @ui.contextMenu.children().find('.hidden-xs').hide()
        @ui.contextMenu.children().find('.visible-xs').show()
        @ui.icon.children().find('.hidden-xs').hide()
        @ui.icon.children().find('.visible-xs').show()
      else
        @ui.panel.find('.hidden-xs').show()
        @ui.panel.find('.visible-xs').hide()
        @ui.contextMenu.children().find('.hidden-xs').show()
        @ui.contextMenu.children().find('.visible-xs').hide()
        @ui.icon.children().find('.hidden-xs').show()
        @ui.icon.children().find('.visible-xs').hide()

    onRender: ->
      @onResize()
      @ui.icon.contextmenu
        before: ->
          App.vent.trigger 'contextmenu'
          App.vent.on 'contextmenu', =>
            @closemenu()
          #$('.btn-group').button('reset')
        onItem: (context, e) ->
          #if $(e.target).prop("tagName") == 'INPUT'
          e.stopPropagation()
          # console.log $(e.target)
          if $(e.target).find('input:radio').length
            $(e.target).button('toggle')
            @closemenu()
          #false
      @stickit()
      App.execute @model.get('command'),
        widget: @model
        region: @widgetRegion
      
  class List.Widgets extends App.Views.CompositeView
    template: "widgets/list/widgets"
    itemView: List.Widget
    emptyView: List.Empty
    itemViewContainer: "#widgets"

    events:
      'change .global-appearance': 'onAppearanceChange'

    onAppearanceChange: (e) ->
      val = $(e.target).val()
      @collection.each (widget) ->
        widget.set force: val unless widget.get('force') is val
