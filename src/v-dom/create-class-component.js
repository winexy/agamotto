export default function createClassComponent(Component, props) {
  let classComponent = new Component(props);

  return classComponent;
}
