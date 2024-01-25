import axios from "axios";

const URL: string = "http://localhost:1290/api";

export const registerAPI = async (email: any, password: any) => {
  try {
    return await axios
      .post(`${URL}/create-user`, { email, password })
      .then((res) => {
        console.log(res);

        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const loginAPI = async (data: any) => {
  try {
    return await axios
      .post(`${URL}/login-user`, data, { withCredentials: true })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const verifyAPI = async (userID: string) => {
  try {
    return await axios.get(`${URL}/verify-user/${userID}`).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

// export const logoutAPI = async () => {
//   try {
//     return await axios
//       .delete(`${URL}/logout`, { withCredentials: true })
//       .then((res) => {
//         return res.data;
//       });
//   } catch (error) {
//     return error;
//   }
// };

// export const userCookieAPI = async () => {
//   try {
//     return await axios
//       .get(`${URL}/reading-user-cookie`, { withCredentials: true })
//       .then((res) => {
//         return res?.data;
//       });
//   } catch (error) {
//     return error;
//   }
// };

export const getUserAPI = async (userID: string) => {
  try {
    return await axios
      .get(`${URL}/read-user/${userID}`, { withCredentials: true })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const getUserNameAPI = async (userID: string, data: any) => {
  try {
    return await axios
      .patch(`${URL}/update-user-name/${userID}`, data)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const getUserPhoneAPI = async (userID: string, data: any) => {
  try {
    console.log("got it: ", data);
    return await axios
      .patch(`${URL}/update-user-phone/${userID}`, { phoneNumber: data })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const hospitalChoiceAPI = async (data: any, userID: string) => {
  try {
    return await axios
      .patch(`${URL}/choose-hospital/${userID}`, data, {
        withCredentials: true,
      })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
