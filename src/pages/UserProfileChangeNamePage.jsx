import React from "react";
import useCookie from "react-use-cookie";
import Container from "../components/Container";
import BreadCrumb from "../components/Breadcrumbs";
import { HiLockOpen, HiMail, HiUser } from "react-icons/hi";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useUserStore from "../stores/useUserStore";

const UserProfileChangeNamePage = () => {
    const {register,handleSubmit,reset,formState:{errors}}=useForm({});
  const [userCookie,setUserCookie] = useCookie("user");
  const { name, email, profile_image } = JSON.parse(userCookie);

  const [token]=useCookie("my_token");

  const{user,setUser}=useUserStore();

  const handleUpdateName=async(data)=>{
console.log(data);
const res=await fetch(import.meta.env.VITE_API_URL + "/user-profile/change-name", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify(data),
});

const json=await res.json();

if (res.status === 200) {
  toast.success(json.message);
//   setToken(json.token);
setUserCookie(JSON.stringify(json.user));
setUser(json.user);
reset();

  console.log(json);
} else {
  toast.error(json.message);
}

  }
  
  return (
    <section>
      <Container>
        <BreadCrumb
          links={[{ title: "User Profile", path: "/dashboard/user-profile" }]}
          currentPageTitle="User Change Name "
        />

        <form
          onClick={handleSubmit(handleUpdateName)}
          className="space-y-4 mb-10 border p-10 flex  items-center gap-5 "
        >
          <div className="mb-5">
            <label
              htmlFor="first_name"
              className={`block mb-2 text-sm font-medium ${
                errors.name ? "text-red-500" : "text-gray-900"
              } dark:text-white`}
            >
              Update Your Name
            </label>
            <input
              {...register("name", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
              type="text"
              className={`bg-gray-50 border ${
                errors.name
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg
              block w-full p-2.5 dark:bg-gray-700
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="eg.su su"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500 text-sm mt-1">
                Product name is required
              </p>
            )}
            {errors.name?.type === "minLength" && (
              <p className="text-red-500 text-sm mt-1">
                Product name must be greater than 3 characters
              </p>
            )}
            {errors.name?.type === "maxLength" && (
              <p className="text-red-500 text-sm mt-1">
                Product name must be less than 30 characters
              </p>
            )}
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-lg  gap-3 bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
          >
            <HiLockOpen />
            Update
          </button>
        </form>
      </Container>
    </section>
  );
};

export default UserProfileChangeNamePage;
