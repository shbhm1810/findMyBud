const validatePhoneNumber = (number: string) => {
  const regexExp = /^[6-9]\d{9}$/gi;
  return regexExp.test(number);
};

export {validatePhoneNumber};
