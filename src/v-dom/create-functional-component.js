const spreadChildren = require('./spread-children');

function createFunctionalComponent(Component, props) {
  let component = Component(props);

  component.children = spreadChildren(component.children);

  return component;
}


module.exports = createFunctionalComponent;
