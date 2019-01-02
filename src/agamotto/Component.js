const AgamottoDOM = require('../agamotto-dom');


function Component(props, children) {
  this.props = props || {};
  this.children = children;
}


Component.prototype.isAgamottoComponent = true;


Component.prototype.setState = function(newState = {}) {
  this.beforeUpdate();

  let beforeUpdate = this.render();



  this.state = {
    ...this.state,
    ...newState
  };


  const shouldUpdate = this.shouldUpdate();

  if (!shouldUpdate) return;

  let updated = this.render();
  console.log(beforeUpdate);
  console.log(updated);

  console.log(this.$el);
  console.log(this.$el.parentElement);

  AgamottoDOM.render(updated, this.$el.parentElement, beforeUpdate);

  this.updated();
};


Component.prototype.mounted = function() {};


Component.prototype.beforeUpdate = function() {};


Component.prototype.shouldUpdate = function() {
  return true;
};


Component.prototype.updated = function() {};


Component.prototype.render = function() {};


module.exports = Component;
