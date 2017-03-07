let imUndefined,
    imNull = null;

const defaultParameters = param => {
  if(param === undefined) {
    param = "someValueWeSet";
  }
  return param
};
  