const HTML = require('html-parse-stringify');

const fs = require('fs');

const dom = fs.readFileSync('./dom.html', 'utf-8');

console.log(HTML.parse(dom));

// class Agamotto {
//
//   static createElement(tag, params, content) {
//     if (typeof params === 'string' || Array.isArray(params)) {
//       content = params;
//
//       const element = document.createElement(tag);
//
//       let child;
//       if (typeof content === 'string') {
//         child = document.createTextNode(content);
//       }
//
//       element.appendChild(child);
//       return element;
//     }
//   };
//
//
//   static render(createElement, selector) {
//     let root = document.querySelector(selector);
//
//     if (!root) throw new Error(`Can't find ${selector}`);
//
//     root.appendChild(createElement);
//   };
//
// }
//
//
//
//
// Agamotto.render(
//   Agamotto.createElement('div', 'hello, world'),
//   '#root'
// );
//
//
//
