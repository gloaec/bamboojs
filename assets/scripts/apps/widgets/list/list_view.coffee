@Bamboo.module "WidgetsApp.List", (List, App, Backbone, Marionette, $, _, eco) ->

  class List.Empty extends App.Views.ItemView
    template: "widgets/list/_empty"

  class List.Widget extends App.Views.Layout
    template: "widgets/list/_widget"

    regions:
      widgetRegion: '.widget-region'
      setttingsRegion: '.settings-region'

    attributes: ->
      class: """
        widget
        col-lg-#{ if @model.get('state') is 'maximized' then '12' else if @model.get('force') is 'icon'  then '1'  else @model.get('collg') }
        col-md-#{ if @model.get('state') is 'maximized' then '12' else if @model.get('force') is 'icon'  then '2'  else @model.get('colmd') }
        col-sm-#{ if @model.get('state') is 'maximized' then '12' else if @model.get('force') is 'icon'  then '3'  else @model.get('colsm') }
        col-xs-#{ if @model.get('state') is 'maximized' then '12' else if @model.get('force') is 'panel' then '12' else @model.get('colxs') }
        row-lg-#{ if @model.get('state') is 'maximized' then '12' else if @model.get('force') is 'icon'  then '2'  else @model.get('rowlg') }
        row-md-#{ if @model.get('state') is 'maximized' then '12' else if @model.get('force') is 'icon'  then '2'  else @model.get('rowmd') }
        row-sm-#{ if @model.get('state') is 'maximized' then '12' else if @model.get('force') is 'icon'  then '2'  else @model.get('rowsm') }
        row-xs-#{ if @model.get('state') is 'maximized' then '12' else if @model.get('force') is 'panel' then '6'  else @model.get('rowxs') }
      """

    ui:
      link              : 'a'
      appearance        : '.appearance'
      name              : '.name'
      inputName         : '.input-name'
      widget            : '.widget'
      icon              : '.icon-widget'
      panel             : '.panel'
      contextMenu       : '.context-menu'
      iconRegion        : '.icon-region'
      panelRegion       : '.panel-region'
      sliders           : '.slider-control input'
      panelColXsInput   : '.panel .input-colxs'
      contextColXsInput : '.context-menu .input-colxs'
      panelRowXsInput   : '.panel .input-rowxs'
      contextRowXsInput : '.context-menu .input-rowxs'
      panelColSmInput   : '.panel .input-colsm'
      contextColSmInput : '.context-menu .input-colsm'
      panelRowSmInput   : '.panel .input-rowsm'
      contextRowSmInput : '.context-menu .input-rowsm'
      panelColMdInput   : '.panel .input-colmd'
      contextColMdInput : '.context-menu .input-colmd'
      panelRowMdInput   : '.panel .input-rowmd'
      contextRowMdInput : '.context-menu .input-rowmd'
      panelColLgInput   : '.panel .input-collg'
      contextColLgInput : '.context-menu .input-collg'
      panelRowLgInput   : '.panel .input-rowlg'
      contextRowLgInput : '.context-menu .input-rowlg'

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
      '.badge':
        observe: 'badge'
        updateMethod: 'html'
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
      '.panel .state-icon':
        observe: 'state'
        onGet: (v) ->
          icon = switch v
            when 'maximized' then 'fa-compress'
            else 'fa-expand'
          "<i class='fa fa-fw #{icon}'></i>"
        updateMethod: 'html'
      '.panel .state-input':
        observe: 'state'
        onSet: (v) ->
          if v then 'maximized' else null
        updateMethod: 'html'
      '.context-menu .state-icon':
        observe: 'state'
        onGet: (v) ->
          icon = switch v
            when 'maximized' then 'fa-compress'
            else 'fa-expand'
          "<i class='fa fa-fw #{icon}'></i>"
        updateMethod: 'html'
      '.context-menu .input-name': 'name'
      '.panel        .input-name': 'name'
      '.context-menu .input-link' : 'link'
      '.panel        .input-link' : 'link'
      '.context-menu .input-icon' : 'icon'
      '.panel        .input-icon' : 'icon'
      '.context-menu .input-command' : 'command'
      '.panel        .input-command' : 'command'
      '.context-menu .input-colxs':
        observe: 'colxs'
        onGet: (v) -> @contextColXsSlider.slider('setValue', v); v
        onSet: (v) -> @contextColXsSlider.slider('getValue')
      '.panel        .input-colxs':
        observe: 'colxs'
        onGet: (v) -> @panelColXsSlider.slider('setValue', v); v
        onSet: (v) -> @panelColXsSlider.slider('getValue')
      '.context-menu .input-rowxs':
        observe: 'rowxs'
        onGet: (v) -> @contextRowXsSlider.slider('setValue', v); v
        onSet: (v) -> @contextRowXsSlider.slider('getValue')
      '.panel        .input-rowxs':
        observe: 'rowxs'
        onGet: (v) -> @panelRowXsSlider.slider('setValue', v); v
        onSet: (v) -> @panelRowXsSlider.slider('getValue')
      '.context-menu .input-colsm':
        observe: 'colsm'
        onGet: (v) -> @contextColSmSlider.slider('setValue', v); v
        onSet: (v) -> @contextColSmSlider.slider('getValue')
      '.panel        .input-colsm':
        observe: 'colsm'
        onGet: (v) -> @panelColSmSlider.slider('setValue', v); v
        onSet: (v) -> @panelColSmSlider.slider('getValue')
      '.context-menu .input-rowsm':
        observe: 'rowsm'
        onGet: (v) -> @contextRowSmSlider.slider('setValue', v); v
        onSet: (v) -> @contextRowSmSlider.slider('getValue')
      '.panel        .input-rowsm':
        observe: 'rowsm'
        onGet: (v) -> @panelRowSmSlider.slider('setValue', v); v
        onSet: (v) -> @panelRowSmSlider.slider('getValue')
      '.context-menu .input-colmd':
        observe: 'colmd'
        onGet: (v) -> @contextColMdSlider.slider('setValue', v); v
        onSet: (v) -> @contextColMdSlider.slider('getValue')
      '.panel        .input-colmd':
        observe: 'colmd'
        onGet: (v) -> @panelColMdSlider.slider('setValue', v); v
        onSet: (v) -> @panelColMdSlider.slider('getValue')
      '.context-menu .input-rowmd':
        observe: 'rowmd'
        onGet: (v) -> @contextRowMdSlider.slider('setValue', v); v
        onSet: (v) -> @contextRowMdSlider.slider('getValue')
      '.panel        .input-rowmd':
        observe: 'rowmd'
        onGet: (v) -> @panelRowMdSlider.slider('setValue', v); v
        onSet: (v) -> @panelRowMdSlider.slider('getValue')
      '.context-menu .input-collg':
        observe: 'collg'
        onGet: (v) -> @contextColLgSlider.slider('setValue', v); v
        onSet: (v) -> @contextColLgSlider.slider('getValue')
      '.panel        .input-collg':
        observe: 'collg'
        onGet: (v) -> @panelColLgSlider.slider('setValue', v); v
        onSet: (v) -> @panelColLgSlider.slider('getValue')
      '.context-menu .input-rowlg':
        observe: 'rowlg'
        onGet: (v) -> @contextRowLgSlider.slider('setValue', v); v
        onSet: (v) -> @contextRowLgSlider.slider('getValue')
      '.panel        .input-rowlg':
        observe: 'rowlg'
        onGet: (v) -> @panelRowLgSlider.slider('setValue', v); v
        onSet: (v) -> @panelRowLgSlider.slider('getValue')

    events:
      "click"         : -> @trigger "widget:clicked", @model
      "click .edit"   : -> @trigger "edit:widget:clicked", @model
      "click .delete" : -> @trigger "delete:widget:clicked", @model
      "dblclick .name": "onEditWidgetNameClicked"
      #"blur .input-command": "onCommandBlur"

    modelEvents:
      "change:command": "onCommandChange"
      "change:colxs": -> @$el.attr @attributes()
      "change:colsm": -> @$el.attr @attributes()
      "change:colmd": -> @$el.attr @attributes()
      "change:collg": -> @$el.attr @attributes()
      "change:rowxs": -> @$el.attr @attributes()
      "change:rowsm": -> @$el.attr @attributes()
      "change:rowmd": -> @$el.attr @attributes()
      "change:rowlg": -> @$el.attr @attributes()
      "change:state": -> @$el.attr @attributes()

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

    onCommandChange:(e) =>
      if @model.get('command').startsWith '//' or
          @model.get('command').startsWith 'http://' or
          @model.get('command').startsWith 'https://'
        App.execute "widget:default:show",
          widget: @model
          region: @widgetRegion
      else
        App.execute @model.get('command'),
          widget: @model
          region: @widgetRegion

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
      @panelColXsSlider   = @ui.panelColXsInput.slider()
      @contextColXsSlider = @ui.contextColXsInput.slider()
      @panelRowXsSlider   = @ui.panelRowXsInput.slider()
      @contextRowXsSlider = @ui.contextRowXsInput.slider()
      @panelColSmSlider   = @ui.panelColSmInput.slider()
      @contextColSmSlider = @ui.contextColSmInput.slider()
      @panelRowSmSlider   = @ui.panelRowSmInput.slider()
      @contextRowSmSlider = @ui.contextRowSmInput.slider()
      @panelColMdSlider   = @ui.panelColMdInput.slider()
      @contextColMdSlider = @ui.contextColMdInput.slider()
      @panelRowMdSlider   = @ui.panelRowMdInput.slider()
      @contextRowMdSlider = @ui.contextRowMdInput.slider()
      @panelColLgSlider   = @ui.panelColLgInput.slider()
      @contextColLgSlider = @ui.contextColLgInput.slider()
      @panelRowLgSlider   = @ui.panelRowLgInput.slider()
      @contextRowLgSlider = @ui.contextRowLgInput.slider()
      @ui.icon.contextmenu
        before: ->
          App.vent.trigger 'contextmenu'
          App.vent.on 'contextmenu', =>
            @closemenu()
        onItem: (context, e) ->
          e.stopPropagation()
          if $(e.target).find('input:radio').length
            $(e.target).button('toggle')
            @closemenu()
      @stickit()
      @onCommandChange()


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
