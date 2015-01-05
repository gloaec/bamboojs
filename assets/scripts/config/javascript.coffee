Array::insertAt = (index, item) ->
  @splice(index, 0, item)
  @

if typeof String::capitalize != 'function'
  String::capitalize = ->
    @charAt(0).toUpperCase() + @slice(1)

if not String::startsWith
  Object.defineProperty String::, 'startsWith',
    enumerable: false
    configurable: false
    writable: false
    value: (searchString, position = 0) ->
      @lastIndexOf(searchString, position) is position

#if typeof String::startsWith != 'function'
#  String::startsWith = (str) ->
#    @indexOf(str) is 0

Object.defineProperty Number::, 'fileSize',
  value: (a,b,c,d) ->
    a = if a then [1e3,'k','B'] else [1024,'K','iB']
    b = Math
    c = b.log
    d = c(@) / c(a[0]) | 0
    e = if d then (a[1] + 'MGTPEZY')[d-1] + a[2] else 'Bytes'
    "#{(@/b.pow(a[0], d)).toFixed(2)} #{e}"
  writable: false
  enumerable:false

_.mixin _.str.exports()
