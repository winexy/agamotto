import changed from './changed';
import updateProps from './props/update-prop';
import createElement from './create-element';

export default function updateElement($parent, newNode, oldNode, childNode = $parent.childNodes[0]) {
  if (!oldNode) {
    $parent.appendChild(createElement(newNode));
  } else if (!newNode) {
    $parent.removeChild(childNode);
    return -1;  // suggests that an element has been removed
  } else if (changed(newNode, oldNode)) {
    $parent.replaceChild(createElement(newNode), childNode);
  } else if (newNode.type) {
    updateProps(childNode, newNode.props, oldNode.props);
    const length = Math.max(newNode.children.length, oldNode.children.length);

    let adjustment = 0;
    for (let i = 0; i < length; i++) {
      adjustment += updateElement(
        childNode,
        newNode.children[i],
        oldNode.children[i],
        childNode.childNodes[i + adjustment]
      );
    }
  }
  return 0; // suggest that an element has not been removed
}
