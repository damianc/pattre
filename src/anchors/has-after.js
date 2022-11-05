export function hasAfter(p) {
  this.anchors.push([
    2,
    str => str + `(?=${p})`
  ]);
  
  return this;
}