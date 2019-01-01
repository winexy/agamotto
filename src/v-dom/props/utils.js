export function isCustomProp(name) {
  return isEventProp(name) || name === 'forceUpdate';
}

export function isEventProp(name) {
  return /^on/.test(name);
}

/**
 * Event name consist of "on" and "event"
 * Example: onClick
 * @param name
 * @returns {string}
 */
export function extractEventName(name) {
  return name.slice(2).toLowerCase();
}

