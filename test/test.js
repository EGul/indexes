
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

  describe('setIndexPathOf', function () {

    it('should [1, 2, 3, [1, 2, [1, 10]]]', function () {

      var tempArr = [1, 2, 3, [1, 2, [1, 5]]];
      var path = [3, 2, 1];
      var shouldArr = [1, 2, 3, [1, 2, [1, 10]]];

      indexes.setIndexPathOf(tempArr, path, 10);

      assert.deepEqual(shouldArr, tempArr);

    });

  });

  describe('setIndexPathsOf', function () {

    it('should [1, 10, 3, [1, 10, [1, 10]]]', function () {

      var tempArr = [1, 2, 3, [1, 2, [1, 5]]];
      //var paths = [[3, 2, 1], [3, 1], [1]];
      var paths = [[1], [3, 1], [3, 2, 1]];
      var items = 10;

      var shouldArr = [1, 10, 3, [1, 10, [1, 10]]];

      indexes.setIndexPathsOf(tempArr, paths, items);

      assert.deepEqual(shouldArr, tempArr);

    });

    it('should return [1, 10, 3, [1, 11, [1, 12]]]', function () {

      var tempArr = [1, 2, 3, [1, 2, [1, 5]]];
      var paths = [[1], [3, 1], [3, 2, 1]];
      var items = [10, 11, 12];

      var shouldArr = [1, 10, 3, [1, 11, [1, 12]]];

      indexes.setIndexPathsOf(tempArr, paths, items);

      assert.deepEqual(shouldArr, tempArr);

    });

  });

  describe('setIndexesOf', function () {

    it('should return [10, 2, 11, 12, 13]', function () {

      var tempArr = [1, 2, 3, 4, 5];
      var paths = [0, 2, 3, 4];
      var items = [10, 11, 12, 13];

      var shouldArr = [10, 2, 11, 12, 13];

      indexes.setIndexesOf(tempArr, paths, items);

      assert.deepEqual(shouldArr, tempArr);

    });

    it('should return [10, 2, 10, 10, 10]', function () {

      var tempArr = [1, 2, 3, 4, 5];
      var paths = [0, 2, 3, 4];

      var shouldArr = [10, 2, 10, 10, 10];

      indexes.setIndexesOf(tempArr, paths, 10);

      assert.deepEqual(shouldArr, tempArr);

    });

  });

});
