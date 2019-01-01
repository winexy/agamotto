import { isCustomProp } from './utils';

function removeBooleanProp($target, name) {
  $target.removeAttribute(name);
  $target[name] = false;
}

export default function removeProp($target, name, value) {
  if (isCustomProp(name)) return;

  if (typeof value === 'boolean') {
    removeBooleanProp($target, name);
  } else {
    $target.removeAttribute(name);
  }
}
