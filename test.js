var level    = require('level-test')()
  , test     = require('tap').test
  , sublevel = require('level-sublevel')

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

test('nested', function(t) {
  var db = sublevel(level('nested'))

  populate(db, {
    foo: {
      foz: {
        fiz: 'faz'
      },
      fee: 'fong'
    },
    fox: 'news'
  }, function(err) {
    t.notOk(err, 'should not error')
    db.get('fox', function(err, value) {
      t.notOk(err, 'should not error')
      t.equal(value, 'news')
      db.sublevel('foo').get('fee', function(err, value) {
        t.notOk(err, 'should not error')
        t.equal(value, 'fong')
        db.sublevel('foo').sublevel('foz').get('fiz', function(err, value) {
          t.notOk(err, 'should not error')
          t.equal(value, 'faz')
          t.end()
        })
      })
    })
  })
})
