import HTMLParser from "./parser/html-parser";

class AgamottoDOM {
  static createElement(node, context) {
    if (node.type === 'text') return document.createTextNode(node.content);

    let element = document.createElement(node.tagName);
    element = AgamottoDOM.setAttributes(element, node.attrs, context);

    node.children
      .map(AgamottoDOM.createElement)
      .forEach(child => element.appendChild(child));

    return element;
  };


  static setAttributes(element, attrs, context) {
    Object.entries(attrs).forEach(([ attribute, value ]) => {

      if (attribute.startsWith('on')) {

        let handler = value.normalize();

        console.log(handler);
        element.addEventListener(
          attribute.slice(2).toLowerCase(),
          new Function(`return ${handler}`)().bind(context)
        )
      } else {
        element.setAttribute(attribute, value);
      }
    });

    return element;
  }


  static render(nodes, selector) {

    let root = document.querySelector(selector);
    if (!root) throw new Error(`Can't find ${selector}`);

    nodes.forEach(node => {
      let template = node.render();
      template = HTMLParser.parse(template);
      console.log(template);
      let element = AgamottoDOM.createElement(template[0], node);
      root.appendChild(element);
    });

  };
}


export default AgamottoDOM;
