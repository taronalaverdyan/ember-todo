import { helper } from '@ember/component/helper';

export function addGreet([ param ]) {
  return param + '-greet';
}

export default helper(addGreet);
