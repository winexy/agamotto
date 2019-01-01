import Agamotto from './agamotto';
import AgamottoDOM from './agamotto-dom';


class App extends Agamotto.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  onInput(e) {
    this.setState({
      text: e.target.value
    })
  }



  render() {
    return (
      <div>
        <input
          style={{
            border: this.state.text.includes('kek') ? '10px solid red' : '1px solid black'
          }}
          type="text"
          onInput={this.onInput.bind(this)}
        />
        <p>{ this.state.text }</p>
        {
          this.children
        }
      </div>
    );
  }
}


AgamottoDOM.render(
  <App name="Olzhas" age="22">
    <p>1</p>
    <p>2</p>
  </App>,
  document.getElementById('root')
);
