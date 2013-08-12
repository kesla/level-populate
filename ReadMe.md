# level-populate

A simple way to populate a level-database

## Installation

```
npm install level-populate
```

## Example

```javascript
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
```

## Licence

Copyright (c) 2013 David Björklund

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
