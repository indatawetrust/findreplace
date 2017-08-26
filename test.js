import test from 'ava';
import findReplace from './index';

test('#1', t => {
  
  const data = [{
    a: 1,
    b: 2,
    c: 3
  },{
    a: 2,
    b: 5,
    c: 6
  }]
  
  t.deepEqual([{
    b: 2,
    a: 1,
    c: 10
  },{
    a: 2,
    b: 5,
    c: 6 
  }], findReplace(data, {
    b: 2,
    c: 3
  },{
    c: 10
  }))

});

