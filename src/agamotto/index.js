import h from '../v-dom/hyper-script-function';
import AgamottoDOM from "../agamotto-dom";


class Component {
  constructor(props) {
    this.props = props || {};
    console.log(this);
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

    AgamottoDOM.rerender(this.$el.parentElement, updated, beforeUpdate);

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


export default {
  Component,
  createElement: h
};
