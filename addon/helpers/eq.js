import { helper } from '@ember/component/helper';

export function eq(params/*, hash*/) {
  return params[0] === params[1];
}

export default helper(eq);
