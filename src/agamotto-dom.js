const updateElement = require('./v-dom/update-element');

function AgamottoDOM() {}

AgamottoDOM.render = function(component, container, oldComponent) {
  if (!container) throw new Error('Can\'t find root element');
  updateElement(container, component, oldComponent);
};


module.exports = AgamottoDOM;
