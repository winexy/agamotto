function changed(node1, node2) {

  if (node1.props && node1.props.forceUpdate) return true;

  let a = typeof node1 !== typeof node2;
  let b = typeof node1 !== 'object';
  let c = node1 !== node2;
  let d = node1.type !== node2.type;
  let e = a || b && c || d;

  return e;
}


module.exports = changed;
