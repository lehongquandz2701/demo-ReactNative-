export const isValidEmail = (StringEmail) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(StringEmail);
};
export const isValidPassWord = (stringPassWord) => {
  return stringPassWord.length >= 6;
};
