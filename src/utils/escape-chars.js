export function escapeChars(str) {
  // const s = str.replace(/([!@#$%^&*()+=\-[\]';,./{}|":<>?~_])/g, '\\$1');
  const s = str.replace(/([$*+{}()\[\].?^])/g, '\\$1');
  console.log(s, new RegExp(s));
  return s;
  // /[!@#$%^&*()+=\-[\]\\';,./{}|":<>?~_]/
}