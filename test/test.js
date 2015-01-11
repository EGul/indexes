
var assert = require('assert');
var indexes = require('../index');

describe('indexes', function () {

  describe('indexPathOf', function () {

    it('should return -1', function () {

      var tempArr = [1, 2, 3, 4, 5];
      var should = -1;

      assert.deepEqual(should, indexes.indexPathOf(tempArr, 10));

    });

    it('should return [1]', function () {

      var tempArr = [1, 5, 2, 3, 4];
      var shouldArr = [1];

      assert.deepEqual(shouldArr, indexes.indexPathOf(tempArr, 5));

    });

    it('should return [2, 1, 1]', function () {

      var tempArr = [1, 2, [1, [1, 5, 5], 5], 5];
      var shouldArr = [2, 1, 1];

      assert.deepEqual(shouldArr, indexes.indexPathOf(tempArr, 5));

    });

    it('should return [1]', function () {

      var tempArr = [1, 5, [1, [1, 5]], 5];
      var shouldArr = [1];

      assert.deepEqual(shouldArr, indexes.indexPathOf(tempArr, 5));

    });

  });

});
