import Agamotto from './agamotto';
import AgamottoDOM from './AgamottoDOM';


class App extends Agamotto {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.setSubclass(this);
  }


  test() {
    this.setState({
      counter: this.state.counter + 1
    });
  }


  render() {
    return  `
      <div class="red" onClick="${this.test}">
        <h1>hello, ${ this.props.name } ${ this.state.counter } </h1>
      </div>
    `;
  }
}





AgamottoDOM.render(
  [
    new App({
      name: "Indira"
    }),
    new App({
      name: "Olzhas"
    })
  ],
  '#root'
);





