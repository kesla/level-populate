
var sublevel = require('level-sublevel')
  , after    = require('after')

  , isObject = function(object) {
      return typeof(object) === 'object' && object !== null
    }

  , populate = function(db, object, callback) {
      var keys = Object.keys(object)
        , done = after(keys.length, callback)

      keys.forEach(function(key) {
        var value = object[key]

        if (isObject(value))
          populate(db.sublevel(key), value, done)
        else
          db.put(key, value, done)
      })
    }

  , start = function(db, object, callback) {
      populate(sublevel(db), object, callback)
    }

module.exports = start

