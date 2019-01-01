import {
  isEventProp,
  extractEventName
} from './props/utils';

export default function addEventListeners($target, props) {
  Object.keys(props)
    .filter(isEventProp)
    .forEach(event => $target.addEventListener(extractEventName(event), props[event]));
}
