import axios from "axios";

const URL: string = "http://localhost:1290/api";

export const CreateBlog = async (data: any, userID: string) => {
  try {
    // const config: any ={
    //     "content-type": "multiplepart"
    // }
    return await axios
      .post(`${URL}/create-blog/${userID}`, data)
      .then((res) => {
        console.log(res);

        return res?.data;
      });
  } catch (error) {
    return error;
  }
};
export const ViewAllBlog = async () => {
  try {
    return await axios.post(`${URL}/view-all-blog`).then((res) => {
      console.log(res);

      return res?.data;
    });
  } catch (error) {
    return error;
  }
};
export const ViewOneBlog = async (userID: string) => {
  try {
    return await axios.post(`${URL}/view-my-blog/${userID}`).then((res) => {
      console.log(res);

      return res?.data;
    });
  } catch (error) {
    return error;
  }
};
