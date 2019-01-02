const {
  isEventProp,
  extractEventName
} = require('./props/utils');

function addEventListeners($target, props) {
  Object.keys(props)
    .filter(isEventProp)
    .forEach(event => $target.addEventListener(extractEventName(event), props[event]));
}


module.exports = addEventListeners;
