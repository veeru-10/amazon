import {formatCurrency} from '../utils/money.js';

describe('test-suite: formatcurrency', () => {
 it('converts cents to dollers', () => {
  except(formatCurrency(2095)).toEqual('20.95');
 });
});