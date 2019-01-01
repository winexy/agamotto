import { setProp } from './set-prop';
import removeProp  from './remove-prop';

function updateProp($target, name, newVal, oldVal) {
  if (!newVal) {
    removeProp($target, name, oldVal);
  } else if (!oldVal || newVal !== oldVal) {
    setProp($target, name, newVal);
  }
}

export default function updateProps($target, newProps, oldProps = {}) {
  const props = {
    ...newProps,
    ...oldProps
  };

  Object.keys(props).forEach(name => {
    updateProp($target, name, newProps[name], oldProps[name]);
  });
}

