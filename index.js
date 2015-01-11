
function indexPathOf(arr, item) {

  var results = [];

  for (var i = 0; i < arr.length; i++) {

    if (!Array.isArray(arr[i])) {
      if (arr[i] == item) {
        results.push(i);
        return results;
       }
    }
    else {
      var result = indexPathOf(arr[i], item);
      if (result.length > 0) {
        results.push(i);
        result.forEach(function (e) {
          results.push(e);
        });
        return results;
      }
    }

  }

  return -1;
}

function indexesOf(arr, item) {

  var results = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == item) results.push(i);
  }

  if (!results.length) return -1;

  return results;
}

module.exports.indexPathOf = indexPathOf;
module.exports.indexesOf = indexesOf;
