export function hasNotBefore(p) {
  this.anchors.push([
    2,
    str => `(?<!${p})` + str
  ]);
  
  return this;
}