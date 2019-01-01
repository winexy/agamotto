import spreadChildren from "./spread-children";

export default function createClassComponent(Component, props) {
  let classComponent = new Component(props);

  let rendered = classComponent.render();

  rendered.children = spreadChildren(rendered.children);

  return rendered;
}
