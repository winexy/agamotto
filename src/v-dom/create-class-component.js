export default function createClassComponent(Component, props, ...children) {
  let classComponent = new Component({
    props,
    children
  });

  return classComponent;
}
