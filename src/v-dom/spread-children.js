function spreadChildren(children) {
  return children.reduce((children, child) => {
    if (!child) return children;
    if (Array.isArray(child)) children.push(...child);
    else children.push(child);
    return children;
  }, []);
}

module.exports = spreadChildren;
