var level = require('level-test')()
  , test   = require('tap').test

  , populate  = require('./populate')

test('simple', function(t) {
  var db = level('simple')
  populate(db, {
    foo: 'bar',
    foz: 'baz'
  }, function(err) {
    t.notOk(err, 'should not error')
    db.get('foo', function(err, value) {
      t.notOk(err, 'should not error')
      t.equal(value, 'bar')
      db.get('foz', function(err, value) {
        t.notOk(err, 'should not error')
        t.equal(value, 'baz')
        t.end()
      })
    })
  })
})
