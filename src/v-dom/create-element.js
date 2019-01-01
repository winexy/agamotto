import { setProps } from './props/set-prop';
import addEventListeners from './add-event-listeners';

export default function createElement(node) {
  if (Array.isArray(node)) {
    return node.map(createElement)
  }

  if (typeof node === 'string' || typeof node === 'number') {
    return document.createTextNode(node);
  }


  const $el = document.createElement(node.type);
  setProps($el, node.props);
  addEventListeners($el, node.props);

  node.children
    .filter(_ => _)
    .map(createElement)
    .forEach($el.appendChild.bind($el));
  return $el;
}
