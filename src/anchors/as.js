export function as(name) {
  if (!name) throw new Error('Capturing group label not passed.');

  this.anchors.push([
    4,
    str => '(?<' + name + '>' + str + ')'
  ]);
  
  return this;
}