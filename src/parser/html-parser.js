class HTMLParser {

  static tagRegEx = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
  static attrRegEx = /([\w-]+)|['"]{1}([^'"]*)['"]{1}/g;


  static voidElements = {
    source: true,
    param: true,
    track: true,
    embed: true,
    input: true,
    meta: true,
    link: true,
    area: true,
    base: true,
    col: true,
    img: true,
    wbr: true,
    br: true,
    hr: true
  };


  static parse(html, options = {
    components: {}
  }) {
    let result = [];
    let current;
    let level = -1;
    let arr = [];
    let byTag = {};
    let inComponent = false;

    html.replace(HTMLParser.tagRegEx, (tag, index) => {
      if (inComponent) {
        if (tag !== ('</' + current.name + '>')) {
          return;
        } else {
          inComponent = false;
        }
      }
      let isOpen = tag.charAt(1) !== '/';
      let start = index + tag.length;
      let nextChar = html.charAt(start);
      let parent;

      if (isOpen) {
        level++;

        current = HTMLParser.parseTag(tag);
        if (current.type === 'tag' && options.components[current.tagName]) {
          current.type = 'component';
          inComponent = true;
        }

        if (!current.voidElement && !inComponent && nextChar && nextChar !== '<') {
          current.children.push({
            type: 'text',
            content: html.slice(start, html.indexOf('<', start))
          });
        }

        byTag[current.tagName] = current;

        // if we're at root, push new base node
        if (level === 0) {
          result.push(current);
        }

        parent = arr[level - 1];

        if (parent) {
          parent.children.push(current);
        }

        arr[level] = current;
      }

      if (!isOpen || current.voidElement) {
        level--;
        if (!inComponent && nextChar !== '<' && nextChar) {
          // trailing text node
          // if we're at the root, push a base text node. otherwise add as
          // a child to the current node.
          parent = level === -1 ? result : arr[level].children;

          // calculate correct end of the content slice in case there's
          // no tag after the text node.
          let end = html.indexOf('<', start);
          let content = html.slice(start, end === -1 ? undefined : end);
          // if a node is nothing but whitespace, no need to add it.
          if (!/^\s*$/.test(content)) {
            parent.push({
              type: 'text',
              content: content
            });
          }
        }
      }
    });

    return result;
  };


  static parseTag(tag) {
    let i = 0;
    let key;
    let parsed = {
      type: 'tag',
      tagName: '',
      voidElement: false,
      attrs: {},
      children: []
    };

    tag.replace(HTMLParser.attrRegEx, match => {
      if (i % 2) {
        key = match;
      } else {
        if (i === 0) {
          if (HTMLParser.voidElements[match] || tag.charAt(tag.length - 2) === '/') {
            parsed.voidElement = true;
          }
          parsed.tagName = match;
        } else {
          parsed.attrs[key] = match.replace(/['"]/g, '');
        }
      }
      i++;
    });

    return parsed;
  };

}


export default HTMLParser;
