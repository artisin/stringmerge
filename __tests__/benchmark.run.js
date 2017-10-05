const Benchmark                 = require('benchmark');
const benchmarks                = require('beautify-benchmark');
const { merge, mergeGenerator } = require('../dist/stringmerge');

// bench args
const twoDataSet      = ['Gfsa3', 'Mu5I1g5xUmFJ'];
const tenDataSet      = ['Gfsa3xbvQkw4pq16bzOtLceFcoHN', 'Mu5I1g5xUmFJ', '3pwn0pBEFbIWVH0XHzaZuTIsaVMTnW2lo', '8bVsJ08o3U3f7QjPEOv2C31UZO', '44NHG96NeZMA00qCmJoJvD0XsXe4pwR3Vw', 'k62joF9FoVXEmj3cN9hzEOruBsM3Y3dC35dUAjhpzu', 'eKDeHZzOPYCMpWT2', 'sOm3QSFCjfALENt8kDypZzvKh1mxO', 'onyvabYba6PMjdxAVNK0O4QlXMKmdg', 'M0qdFRnOYF'];
const thousandDataSet = require('./benchmarks.50000_dataset.json');


/**
 * 2 arguments
 */
const twoSuite = new Benchmark.Suite;
twoSuite
  .add('merge two arguments', function() {
    merge.apply(null, twoDataSet);
  })
  .add('mergeGenerator two arguments', function() {
    mergeGenerator.apply(null, twoDataSet);
  })
  // add listeners
  .on('cycle', function(event) {
    benchmarks.add(event.target);
  })
  .on('complete', function() {
    benchmarks.log();
  })
  .run();

/**
 * 10 arguments
 */
const tenSuite = new Benchmark.Suite;
tenSuite
  .add('merge ten arguments', function() {
    merge.apply(null, tenDataSet);
  })
  .add('mergeGenerator ten arguments', function() {
    mergeGenerator.apply(null, tenDataSet);
  })
  // add listeners
  .on('cycle', function(event) {
    benchmarks.add(event.target);
  })
  .on('complete', function() {
    benchmarks.log();
  })
  .run();

/**
 * 50000 arguments
 */
const fiftyThSuite = new Benchmark.Suite;
fiftyThSuite
  .add('merge 50000 arguments', function() {
    merge.apply(null, thousandDataSet);
  })
  .add('mergeGenerator 50000 arguments', function() {
    mergeGenerator.apply(null, thousandDataSet);
  })
  // add listeners
  .on('cycle', function(event) {
    benchmarks.add(event.target);
  })
  .on('complete', function() {
    benchmarks.log();
  })
  .run();
