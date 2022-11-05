export function isFirst() {
  this.anchors.push([
    1,
    str => '^' + str
  ]);
  
  return this;
}