
class Agamotto {
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


export default Agamotto;
