import { isCustomProp } from './utils';


export function setProps($target, props) {
  Object.keys(props).forEach(name => {
    setProp($target, name, props[name]);
  });
}


export function setProp($target, name, value) {
  if (isCustomProp(name)) return;

  if (typeof value === 'boolean') {
    setBooleanProp($target, name, value);
  } else if (name === 'style') {
    setStyleProp($target, value);
  } else {
    $target.setAttribute(name, value);
  }
}


function setStyleProp($target, styles) {
  if (typeof styles === 'string')
    return $target.setAttribute('style', styles);

  Object.entries(styles)
    .forEach(([prop, value]) => {
      $target.style[prop] = value;
    });
}


function setBooleanProp($target, name, value) {
  if (value) {
    $target.setAttribute(name, value);
    $target[name] = true;
  } else {
    $target[name] = false;
  }
}
