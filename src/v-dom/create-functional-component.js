import spreadChildren from "./spread-children";

export default function createFunctionalComponent(Component, props) {
  let component = Component(props);

  component.children = spreadChildren(component.children);
  
  return component;
}
