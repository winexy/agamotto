import h from '../v-dom/hyper-script-function';


class Component {
  constructor(props) {
    this.props = props;
  }

  setState(newState = {}) {
    this.state = {
      ...this.state,
      ...newState
    };

    console.log(this.render());
  }

  render() {}

}




export default {
  Component,
  createElement: h
};
