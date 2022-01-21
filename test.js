import test from 'ava';
import browser from './index.js';

test('browser return type to be string', t => {
    t.is(typeof browser(), 'string');
});
