export function isLast() {
  this.anchors.push([
    1,
    str => str + '$'
  ]);
  
  return this;
}