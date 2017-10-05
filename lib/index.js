import 'babel-polyfill';

/**
 * Merge string arguments together via alternating merge
 *   - default export
 * @param  {...[any]} args
 * @return {str}           -> merged alternating string (ab, def, ...) -> adbef...
 */
export const merge = (...args) => {
  //return single argument, nothing to build
  if (args.length === 1) {
    return args.pop();
  }
  //filter any non-string args and create letter sub-array struc
  args = args.filter((arg) => typeof arg === 'string').map(str => str.split(''));

  // //Loop through args and push letters to buildArr
  const buildArr = [];
  let index = 0;
  while(args.length) {
    const arr = args[index];
    const str = arr.shift();
    buildArr.push(str);
    //remove sub array if empty
    if (!arr.length) {
      args.splice(index, 1);
    }
    //next index or reset
    index = args[index + 1] ? ++index : 0;
  }

  //join and return merged results
  return buildArr.join('');
};
export default merge;



/**
 * Alternating merge strings args generator
 * @param {arr} args -> [[str, str], ...]
 * @yield {arr}      -> single merge string array
 */
const mergeStrGen = function *(args) {
  const buildArr = [];
  let index = 0;
  while(args.length) {
    const arr = args[index];
    const str = arr.shift();
    buildArr.push(str);
    //remove sub array if empty
    if (!arr.length) {
      args.splice(index, 1);
    }
    //next index or reset
    index = args[index + 1] ? ++index : 0;

    const reset = yield buildArr;
    if(reset) {
      buildArr.length = 0;
    }
  }
};

/**
 * Merge string arguments together via alternating merge
 *  - Utilizes generator for cases in which the computation is large/expensive
 * @param  {...[any]} args
 * @return {str}           -> merged alternating string (ab, def, ...) -> adbef...
 */
export const mergeGenerator = (...args) => {
  //return single argument, nothing to build
  if (args.length === 1) {
    return args.pop();
  }

  //filter any non-string args, create letter sub-array struc, gen iterator
  const it = mergeStrGen(
    args.filter((arg) => typeof arg === 'string').map(str => str.split(''))
  );

  //cylce through iterator until done
  let next = it.next();
  let buildArr = [];
  while(!next.done && (buildArr = next.value)) {
    next = it.next();
  }

  //join and return merged results
  return buildArr.join('');
};

