import Agamotto from './agamotto';
import updateElement from './v-dom/update-element';


//------------



// ---------------------------------------------------------------------
function Test(props) {
  return (
    <div
      class="kek"
      style={{ width: '100px', border: '1px solid red' }}
    >
      { props.n }
    </div>
  )
}

class App {
  constructor(props) {
  }

  render() {
    return (
      <div class="App">
        <h1>This is the App</h1>
        <br/>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
        </div>
      </div>
    );
  }
}

function log(e) {
  console.log(e.target.value);
}

const f = (
  <ul style="list-style: none;">
    {
      [1,2,3].map(n => <Test n={n} />)
    }
    privet
    kak
    dela
    <li class="item" onClick={() => alert('hi!')}>item 1</li>
    <li class="item">
      <App name="kek" />
      <Test name="asd" />
      <input type="checkbox" checked={true} />
      <input type="text" onInput={log} />
    </li>
    {/* this node will always be updated */}
    <li forceUpdate={true}>text</li>
  </ul>
);

const g = (
  <ul style="list-style: none;">
    <li class="item item2" onClick={() => alert('hi!')}>item 1</li>
    <li style="background: red;">
      <input type="checkbox" checked={false} />
      <input type="text" onInput={log} />
    </li>
    {/* this node will always be updated */}
    <li forceUpdate={true}>text</li>
  </ul>
);
console.log(g);

const $root = document.getElementById('root');
const $reload = document.getElementById('reload');

updateElement($root, f);
$reload.addEventListener('click', () => {
  updateElement($root, g, f);
});

