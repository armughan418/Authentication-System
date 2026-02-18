const api = () => {
  const local = process.env.REACT_APP_BACKEND_URL;

  const list = {
    registerUser: `${local}/user/register`,
    loginUser: `${local}/user/login`,
    forgetPassword: `${local}/user/forget/password`,
    verifyOtp: `${local}/user/otp/verify`,
    updatePassword: `${local}/user/update/password`,
    getAcess: `${local}/user/get/access`,
  };
  return list;
};
export default api;
