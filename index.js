
function indexPathOf(arr, item) {

  for (var i = 0, l = arr.length; i < l; i++) {

    if (!Array.isArray(arr[i])) {
      if (arr[i] == item) {
        return [i];
       }
    }
    else {
      var result = indexPathOf(arr[i], item);
      if (result.length > 0) {
        var results = [];
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

function indexPathsOf(arr, item) {

  var results = [];

  for (var i = 0, l = arr.length; i < l; i++) {
    if (!Array.isArray(arr[i])) {
      if (arr[i] == item) {
        results.push([i]);
      }
    }
    else {

      for (var j = 0, jl = arr[i].length; j < jl; j++) {
        if (!Array.isArray(arr[i][j])) {
          if (arr[i][j] == item) {
            results.push([i, j]);
          }
        }
        else {

          var result = indexPathsOf(arr[i][j], item);

          if (result.length) {
            result.forEach(function (e) {

              results.push([i, j]);

              e.forEach(function (ee) {
                results[results.length - 1].push(ee);
              });

            });
          }

        }

      }

    }

  }

  if (!results.length) {
    return -1;
  }

  return results;
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
module.exports.indexPathsOf = indexPathsOf;
module.exports.indexesOf = indexesOf;
