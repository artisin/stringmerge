import 'babel-polyfill';
import should from 'should';
import {
  merge,
  mergeGenerator,
} from 'dist/stringmerge';


/**
 * Test wrapper to share common tests between libs
 * @param  {fnc} lib -> library export to test
 */
const testWrapper = (lib) => {
  it('should handle single argument', () => {
    should(lib('abc')).be.eql('abc');
  });

  it('should merge two arguments', () => {
    should(lib('abc', '123')).be.eql('a1b2c3');
  });

  it('should merge two arguments of variable length', () => {
    should(lib('abc', '123456')).be.eql('a1b2c3456');
  });

  it('should merge X arguments of variable length', () => {
    const multipleArgs = [
      'kZ5i5ehjNDFsfkq0u7Tst4NXdejgPUHjvGgH9uiP7',
      'Lb7hVRlVTh0yMvphif9L9o',
      'MZ1CBgCIa9TloUcsosI14',
      'jvQkJCKWBe9ErmP3p073Tt3hWB2MWZUcbd',
      'saMLODCTb',
      'sTrHASZAzO6NNZPfaNi8ef',
      'aEfq96JkiAqjvj5K',
      'bve2LSw4RzkBTQitisqh05fPubD12U2fCpyuTNM6hZfoYWB',
      'LsFz82KM1NbhTJSLSLeqS0lhrWcVA4hz8JrjQUZIbJtZ',
      '0tiivxGZ'
    ];
    should(lib(...multipleArgs)).be.eql('kLMjssabL0ZbZvaTEvst571QMrfeFiihCkLHq2zi5VBJOA9L8veRgCDS6S2xhlCKCZJwKGjVIWTAk4MZNTaBbiR1Dh9ezAzNF0T9OqkbsylE6jBhfMorNvTTkvUmNjQJqpcPZ5iS0hs3PKLuiopftS7fs0aiLT9I7NsesL13iqqt948hS4oe00NTflXt5hd3frehPWjWucgBbVP2DAUM14HW2hjZUzvU28GcfJgbCrHdj9pQuyUiuZPTI7bNJMt6ZhZfoYWB');
  });

  it('should omit non string arguments', () => {
    should(lib('abc', false, 123, '123456', undefined, null, [1, 2, 3])).be.eql('a1b2c3456');
  });
};


/**
 * merge export tests
 */
describe('Library "merge" export tests', () => testWrapper(merge));

/**
 * mergeGenerator export tests
 */
describe('Library "mergeGenerator" export tests', () => testWrapper(mergeGenerator));
