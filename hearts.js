console.log('l2v2l6v2'+  'e1l1v3l2'+
'v3e1v7e1v7e1v7e1l2v6e1l4v5'+
'e1l6v4e1l8v3e1l7l3v2e1l9l3v1')
  .replace(/[lve]\d/g,function
    (c){return Array(-~c[1]).
    join({l:' ',v:'Love'
      ,e:'\n'}[c[0
      ]])});

