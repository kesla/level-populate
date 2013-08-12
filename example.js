
var populate = require('level-populate')

  , input = {
      one: {
        key: 'value1',
        two: {
          three: {
            four: {
              key: 'value2'
            }
          }
        }
      }
    }

// db is a levelup-instance
populate(db, input, function(err) {
  db.sublevel('one').get('key', function(err, value) {
    console.log('value1: %s', value)
  })
  db.sublevel('one').sublevel('two').sublevel('three').sublevel('four').get('key', function(err, value) {
    console.log('value2: %s', value)
  })
})
