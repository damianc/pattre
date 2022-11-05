export function group(name, words) {
  const
    groupStart = `(?<${name}>`,
    groupEnd = ')';

  return groupStart + words.join('') + groupEnd;
}