import test from 'ava';
import calc from './';

test(async t => t.is(await calc.add(3, 4), 7));
test(async t => t.is(await calc.subtract(3, 4), -1));