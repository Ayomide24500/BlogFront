import React from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerAPI } from "../../Api/Api";
const Register = () => {
  const navigate = useNavigate();
  const schema = yup.object({
    // username: yup.string().required("Must be filled"),
    email: yup.string().email().required("Must be filled"),
    password: yup.string().required("Must be filled"),
    // confirm: yup.string().oneOf([yup.ref("password")]),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmiteNow = handleSubmit((data: any, password: any) => {
    console.log(data);
    registerAPI(data, password).then((res) => {
      navigate("/verify");
      return res?.data;
    });
  });
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Register</h2>
          <form onSubmit={handleSubmiteNow}>
            {/* <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                {...register("username")}
              />
              {errors.username?.message && (
                <div className="text-red-700 text-[12px] text-right ">
                  {errors.username?.message}
                </div>
              )}
            </div> */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                {...register("email")}
              />
              {errors.email?.message && (
                <div className="text-red-700 text-[12px] text-right ">
                  {errors.email?.message}
                </div>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                {...register("password")}
              />
              {errors.password?.message && (
                <div className="text-red-700 text-[12px] text-right ">
                  {errors.password?.message}
                </div>
              )}
            </div>
            {/* <div className="mb-6">
              <label
                htmlFor="passwordConfirm"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                {...register("password")}
              />
              {errors.confirm?.message && (
                <div className="text-red-700 text-[12px] text-right ">
                  {errors.confirm?.message}
                </div>
              )}
            </div> */}
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
