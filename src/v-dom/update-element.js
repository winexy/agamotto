import changed from './changed';
import updateProps from './props/update-prop';
import createElement from './create-element';

export default function updateElement($parent, newNode, oldNode, $child = $parent.childNodes[0]) {
  if (!oldNode) {
    $parent.appendChild(createElement(newNode));
  } else if (!newNode) {
    $parent.removeChild($child);
    return -1;
    // suggests that an element has been removed
  } else if (changed(newNode, oldNode)) {
    $parent.replaceChild(createElement(newNode), $child);
  } else if (newNode.type) {
    updateProps($child || $parent, newNode.props, oldNode.props);
    const length = Math.max(newNode.children.length, oldNode.children.length);

    let adjustment = 0;
    for (let i = 0; i < length; i++) {
      adjustment += updateElement(
        $child,
        newNode.children[i],
        oldNode.children[i],
        $child.childNodes[i + adjustment]
      );
    }
  }
  return 0; // suggest that an element has not been removed
}
