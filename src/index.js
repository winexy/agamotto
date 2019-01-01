import Agamotto from './agamotto'
import AgamottoDOM from './agamotto-dom';

import SomeComponent from './SomeComponent';

function TodoItem(props) {
  return (
    <div>
      <span>{ props.text }</span>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
}


class App extends Agamotto.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      lastText: '',
      items: []
    };
  }

  onInput(e) {
    debugger;
    this.setState({
      text: e.target.value
    })
  }


  onKeyPress({ key }) {
    if (key !== 'Enter') return;

    this.setState({
      items: [...this.state.items, this.state.text],
      lastText: this.state.text,
      text: '',
    });
  }

  onDelete(id) {
    let items;
    if (id === 0) {
      items = this.state.items.slice(1);
    } else if (id === this.state.items.length - 1) {
      items = this.state.items.slice(0, this.state.items.length - 1);
    } else {
      items = [...this.state.items.slice(0, id), ...this.state.items.slice(id + 1)]
    }

    this.setState({ items });
  }




  render() {
    return (
      <div>
        <input
          type="text"
          style={{
            border: this.state.text.includes('kek') ? '10px solid red' : '1px solid black'
          }}
          onInput={this.onInput.bind(this)}
          onKeyPress={this.onKeyPress.bind(this)}
        />
        {
          this.state.items.map((item, id) =>
            <TodoItem
              onDelete={this.onDelete.bind(this, id)}
              text={item}
              key={id}
            />
          )
        }
        <SomeComponent hello="Asd" />
        <App2 />
      </div>
    );
  }
}


class App2 extends Agamotto.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      lastText: '',
      items: []
    };
  }

  onInput(e) {
    this.setState({
      text: e.target.value
    })
  }


  onKeyPress({ key }) {
    if (key !== 'Enter') return;

    this.setState({
      items: [...this.state.items, this.state.text],
      lastText: this.state.text,
      text: '',
    });
  }

  onDelete(id) {
    let items;
    if (id === 0) {
      items = this.state.items.slice(1);
    } else if (id === this.state.items.length - 1) {
      items = this.state.items.slice(0, this.state.items.length - 1);
    } else {
      items = [...this.state.items.slice(0, id), ...this.state.items.slice(id + 1)]
    }

    this.setState({ items });
  }




  render() {
    return (
      <div>
        <input
          type="text"
          style={{
            border: this.state.text.includes('kek') ? '10px solid red' : '1px solid black'
          }}
          onInput={this.onInput.bind(this)}
          onKeyPress={this.onKeyPress.bind(this)}
        />
        {
          this.state.items.map((item, id) =>
            <TodoItem
              onDelete={this.onDelete.bind(this, id)}
              text={item}
              key={id}
            />
          )
        }
      </div>
    );
  }
}



//
AgamottoDOM.render(
  <App name="Olzhas" age="22"/>,
  document.getElementById('root')
);
