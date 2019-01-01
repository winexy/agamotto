import updateElement from './v-dom/update-element';

class AgamottoDOM {

  static render(app, root) {
    if (!root) throw new Error('Can\'t find root element');
    updateElement(root, app);
  };

  static rerender(root, newApp, oldApp) {
    if (!root) throw new Error('Can\'t find root element');
    updateElement(root, newApp, oldApp);
  }
}


export default AgamottoDOM;
