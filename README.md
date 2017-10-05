# stringmerge → String Alternating Merge
[![npm](https://img.shields.io/npm/l/stringmerge.svg)](https://github.com/artisin/stringmerge/blob/master/LICENSE.txt)
[![npm](https://img.shields.io/npm/v/stringmerge.svg)](https://www.npmjs.com/package/stringmerge)
[![wercker status](https://app.wercker.com/status/a668f191696fe6b304f81c996a083c8c/s/master "wercker status")](https://app.wercker.com/project/byKey/a668f191696fe6b304f81c996a083c8c)
[![David](https://img.shields.io/david/artisin/stringmerge.svg)](https://github.com/artisin/stringmerge/blob/master/package.json)


## Description

Merges multiple strings together alternating through their arguments.

```
merge :: (...String) → String
merge :: ('abc', '123456') -> 'a1b2c3456'
```


## Install

You can either install stringmerge via npm:

```bash
   yarn add stringmerge 
```

Alternatively, you can download/copy one of files in the `/dist` folder depending on your use-case:

+ `dist/stringmerge.js` - The node build for use with webpack and the like
+ `dist/stringmerge-browser.js` - The browser build includes all the various library dependancies
+ `dist/stringmerge-browser.min.js` - The minified version of browser version


## Mode of Operation

The default export `merge` merges string arguments together via a simple `while` loop. Any non-string arguments will be disregarded.

```js
import merge from 'stringmerge'

const mergedString = merge('abc', '123', 123, 'z');
// should(mergeResults).be.eql('a1zb2c3');
```

Alternatively, you can use the `mergeGenerator` export which utilizes a [generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) to iterate through the arguments. This only makes sense if you have a ridiculous amount of arguments around the ballpark of +25000.

```js
import { mergeGenerator } from 'stringmerge'

const mergedString = mergeGenerator('abc', '123', 123, 'z');
// should(mergeResults).be.eql('a1zb2c3');
```


## Npm Sripts

```yaml
scripts:
  build: 'Builds stringmerge → output dist/'
  clean: 'deletes all dist/ files'
  commit: 'commitizen commit'
  dev: 'webpack watch development'
  benchmark: 'runs benchmarks located in __tests__/benchmark.run.js'
  test: 'runs test located in __tests__/tests.run.js'
```


## Benchmarks

```
merge - two arguments          x 325,472 ops/sec ±1.10% (91 runs sampled)
mergeGenerator - two arguments x 247,051 ops/sec ±0.50% (90 runs sampled)
```

```
merge - ten arguments          x 37,848 ops/sec ±0.55% (91 runs sampled)
mergeGenerator - ten arguments x 25,903 ops/sec ±1.96% (89 runs sampled)
```

```
merge 50000 - arguments          x 0.13 ops/sec ±65.16% (5 runs sampled)
mergeGenerator - 50000 arguments x 0.56 ops/sec ±50.97% (6 runs sampled)
```
