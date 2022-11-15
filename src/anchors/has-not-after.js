export function hasNotAfter(p) {
  this.anchors.push([
    2,
    str => str + `(?!${p})`
  ]);
  
  return this;
}