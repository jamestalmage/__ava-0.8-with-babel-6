import test from 'ava';

require('babel-core/register')({
  presets: ['es2015'],
  plugins: ['transform-es2015-modules-commonjs']
});

const sum = require('./')['default'];

test(t => t.is(sum(3, 4), 7));