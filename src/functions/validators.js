export const validateMinLength = (length) => (val) => {
  return val.trim().length >= length;
}
export const validateEmail = (val) => {
  return /^\S+@\S+\.\S+$/.test(val);
}