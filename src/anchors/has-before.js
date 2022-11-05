export function hasBefore(p) {
  this.anchors.push([
    2,
    str => `(?<=${p})` + str
  ]);
  
  return this;
}