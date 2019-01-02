import AgamottoDOM from '../agamotto-dom';

class Component {
  constructor({ props, children }) {
    this.props = props || {};
    this.children = children;
  }

  setState(newState = {}) {
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

    AgamottoDOM.rerender(this.$el, updated, beforeUpdate);

    this.updated();
  }

  mounted() {}

  beforeUpdate() {}

  shouldUpdate() {
    return true;
  }

  updated() {}

  render() {}

}


export default Component;
