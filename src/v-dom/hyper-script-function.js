const spreadChildren = require('./spread-children');
const createFunctionalComponent = require('./create-functional-component');
const createClassComponent = require('./create-class-component');

function h(...args) {
  let [type, props, ...children] = args;

  if (typeof type === 'string')
    return {
      type,
      props: props || {},
      children: spreadChildren(children)
    };


  if (type.prototype.isAgamottoComponent) {
    return createClassComponent(...args);
  }

  return createFunctionalComponent(...args);
}


module.exports = h;

