const { setProps } = require('./props/set-prop');
const addEventListeners = require('./add-event-listeners');

function createElement(node) {
  if (!node) {
    return document.createTextNode('');
  }


  if (node.render) {
    const renderedNode = node.render();
    const createdElement = createElement(renderedNode);
    node.$el = createdElement;
    return createdElement;
  }

  if (Array.isArray(node)) {
    return node.map(createElement);
  }

  if (typeof node !== 'object') {
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


module.exports = createElement;
