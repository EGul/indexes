
var assert = require('assert');
var indexes = require('../index');

describe('indexes', function () {

  describe('indexPathOf', function () {

    it('should return -1', function () {

      var tempArr = [1, 2, 3, 4, 5];
      var should = -1;

      assert.deepEqual(should, indexes.indexPathOf(tempArr, 10));

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

  describe('indexPathsOf', function () {

    it('should return -1', function () {

      var tempArr = [1, 2, 3, [1, 2, [1, 2, 3]], 4];
      var should = -1;

      assert.deepEqual(should, indexes.indexPathsOf(tempArr, 10));

    });

    it('should return [[0], [2], [4], [5]]', function () {

      var tempArr = [1, 2, 1, 3, 1, 1, 4, 5];
      var shouldArr = [[0], [2], [4], [5]];

      assert.deepEqual(shouldArr, indexes.indexPathsOf(tempArr, 1));

    });

    it('should return [[3], [4, 1], [4, 2, 2], [4, 2, 3, 1], [5]]', function () {

      var tempArr = [1, 2, 3, 5, [1, 5, [1, 2, 5, [1, 5]]], 5];
      var shouldArr = [[3], [4, 1], [4, 2, 2], [4, 2, 3, 1], [5]];

      assert.deepEqual(shouldArr, indexes.indexPathsOf(tempArr, 5));

    });

  });

  describe('indexesOf', function () {

    it('should return -1', function () {

      var tempArr = [1, 2, 3, 4, 5];
      var should = -1;

      assert.deepEqual(should, indexes.indexesOf(tempArr, 10));

    });

    it('should return [0, 2, 5]', function () {

      var tempArr = [1, 2, 1, 3, 4, 1, 5];
      var shouldArr = [0, 2, 5];

      assert.deepEqual(shouldArr, indexes.indexesOf(tempArr, 1));

    });

  });

});
