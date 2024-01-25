import axios from "axios";

const URL: string = "http://localhost:1290/api";

export const registerAPI = async (data: any) => {
  try {
    return await axios.post(`${URL}/create-user`, data).then((res) => {
      console.log(res);

      return res?.data;
    });
  } catch (error) {
    return error;
  }
};

export const loginAPI = async (data: any) => {
  try {
    return await axios.post(`${URL}/login-user`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const verifyAPI = async (userID: string, data) => {
  try {
    return await axios.get(`${URL}/verify-user/${userID}`, data).then((res) => {
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
