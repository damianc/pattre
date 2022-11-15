export function oneOf(words) {
  const
    groupStart = `(?:`,
    groupEnd = ')';

  return groupStart + words.join('|') + groupEnd;
}