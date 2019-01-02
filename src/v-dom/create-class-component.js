function createClassComponent(Component, props, ...children) {
  let classComponent = new Component({
    props,
    children
  });

  return classComponent;
}


module.exports = createClassComponent;
