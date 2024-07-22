export const generateKey = () => {
  const array = new Uint8Array(6);
  crypto.getRandomValues(array);
  const key = Array.from(array)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
  return key;
};
