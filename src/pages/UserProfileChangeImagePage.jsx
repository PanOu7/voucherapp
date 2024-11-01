import React, { useRef } from "react";
import useCookie from "react-use-cookie";
import Container from "../components/Container";
import BreadCrumb from "../components/Breadcrumbs";
import { HiCamera, HiLockOpen, HiMail, HiUser } from "react-icons/hi";
 
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useUserStore from "../stores/useUserStore";

const UserProfileChangeImagePage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});
  const [userCookie, setUserCookie] = useCookie("user");
  const { name, email, profile_image } = JSON.parse(userCookie);

  const [token] = useCookie("my_token");

  const { user, setUser } = useUserStore();

  const fileInputRef=useRef();

  const handleUpdateImage = async (e) => {
    // console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append("profile_image",e.target.files[0] );

    const res = await fetch(
      import.meta.env.VITE_API_URL + "/user-profile/change-profile-image",
      {
        method: "POST",
        headers: {
          //  "Content-Type": "application/json",
          // "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: formData, // for image//not string
      }
    );

    const json = await res.json();

    console.log(json);

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
  };

  const handleImageUpload = () => {
    // console.log(fileInputRef);
    fileInputRef.current.click();
  };
  return (
    <section>
      <Container>
        <BreadCrumb
          links={[{ title: "User Profile", path: "/dashboard/user-profile" }]}
          currentPageTitle="User Change Photo "
        />
        <div className="border p-10 flex flex-col items-start gap-2">
          <div className="relative">
            <img
              src={
                profile_image
                  ? profile_image
                  : "https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
              }
              alt="user photo"
              className="size-32 rounded-md mb-3 "
            />
            <button
              onClick={handleImageUpload}
              className="bg-emerald-700 text-whit rounded absolute  -right-2 bottom-2"
            >
              <HiCamera className="text-gray-400 size-3" />
            </button>
          </div>
          <form
            //onSubmit={handleSubmit(handleUpdateImage)}
            className=" mb-10  flex   items-center gap-5 "
          >
            <div className="">
              {/* <label
                htmlFor="profile_image"
                className={`block mb-2 text-sm font-medium ${
                  errors.name ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Update Your Photo
              </label> */}
              <input
                onChange={handleUpdateImage}
                ref={fileInputRef}
                // {...register("profile_image", {
                //   required: true,
                // })}
                type="file"
                className="
                hidden w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="profile_image"
              />
              {errors.profile_image?.type === "required" && (
                <p className="text-red-500 text-sm mt-1">Profile is required</p>
              )}
            </div>
            {/* <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg  gap-3 bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
            >
              <HiLockOpen />
              Update
            </button> */}
          </form>
        </div>
      </Container>
    </section>
  );
};

export default UserProfileChangeImagePage;
