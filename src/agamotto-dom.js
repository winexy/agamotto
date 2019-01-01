import updateElement from './v-dom/update-element';

class AgamottoDOM {

  static render(app, root) {
    if (!root) throw new Error('Can\'t find root element');
    updateElement(root, app);
  };

  static rerender(parent, newApp, oldApp) {
    updateElement(parent, newApp, oldApp);
  }
}


export default AgamottoDOM;
