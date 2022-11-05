export function isWord() {
  this.anchors.push([
    3,
    str => '\\b' + str + '\\b'
  ]);
  
  return this;
}