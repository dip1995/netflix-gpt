export const checkValidate = (name,email,password) => {
  const isEmailValid = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/.test(email);
  const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
  const isNameValid = name === null || name?.length < 3  ? false : true;
  if(!isEmailValid) return {status:false, message:"Email is not valid"};
  if(!isPasswordValid) return {status:false, message:"Password is not valid"};
  if(!isNameValid) return {status:false, message:"Name must be at least 3 characters long"};
  return {status:true, message:null};
}