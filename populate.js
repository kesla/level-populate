
var sublevel = require('level-sublevel')

  , populate = function(db, object, callback) {
      var batch = Object.keys(object).map(function(key) {
            return { type: 'put', key: key, value: object[key] }
          })
      db.batch(batch, callback)
    }

module.exports = populate
