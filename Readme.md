#indexes
Array index utilities

##Usage
```js
var indexes = require('indexes');

var tempArr = [1, 2, 3, 4, [1, 2, 3, [1, 2, [1, 5]]]];
var indexPath = indexes.indexPathOf(tempArr, 5); //[4, 3, 2, 1]
```

##API

###indexPathOf(arr, item)
Get first index path of item

###indexPathsOf(arr, item)
Get index paths of item

###indexesOf(arr, item)
Get indexes of item

###setIndexPathOf(arr, path, item)
Set index path to item

###setIndexPathsOf(arr, paths, items)
Set index paths to items

###setIndexesOf(arr, paths, items)
Set indexes to items

##Install
```
npm install temp-name-here/indexes
```
