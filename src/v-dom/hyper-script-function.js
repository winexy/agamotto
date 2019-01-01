import spreadChildren from './spread-children';
import createFunctionalComponent from './create-functional-component';
import createClassComponent from './create-class-component';

export default function h(...args) {
  let [type, props, ...children] = args;

  if (typeof type === 'string')
    return {
      type,
      props: props || {},
      children: spreadChildren(children)
    };


  if (type.prototype.render) {
    return createClassComponent(...args);
  }

  return createFunctionalComponent(...args);
}

