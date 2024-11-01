// import React from "react";
// import useCookie from "react-use-cookie";
// import Container from "../components/Container";
// import BreadCrumb from "../components/Breadcrumbs";
// import { HiLockClosed } from "react-icons/hi";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import useTokenStore from "../stores/useTokenStore"; // Import Zustand store for token
// import { useNavigate } from "react-router-dom";

// const UserProfileChangePasswordPage = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     watch,
//     formState: { errors },
//   } = useForm();
//   const [token] = useCookie("my_token"); // Get token from cookie
//   const { resetToken } = useTokenStore(); // Zustand store for managing token

//   // Watch the new_password field to validate against new_password_confirmation
//   const new_password = watch("new_password");

//   const navigate = useNavigate();
//   const handleChangePassword = async (data) => {
//     console.log("Data sent to API:", data);

//     const res = await fetch(
//       import.meta.env.VITE_API_URL + "/user-profile/change-password",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           Authorization: `Bearer ${token}`, // Authorization header with token
//         },
//         body: JSON.stringify({
//           old_password: data.old_password,
//           new_password: data.new_password,
//           new_password_confirmation: data.new_password_confirmation, // Include if API requires it
//         }),
//       }
//     );
//     // console.log({
//     //   old_password: data.old_password,
//     //   new_password: data.new_password,
//     // });

//     const json = await res.json();

//     if (res.status === 200) {
//       toast.success(json.message);
//       resetToken(); // Reset token after successful password change
//       reset(); // Reset form inputs
//      navigate("/");
//     } else {
//       toast.error(json.message);
//     }
//   };

//   return (
//     <section>
//       <Container>
//         <BreadCrumb
//           links={[{ title: "User Profile", path: "/dashboard/user-profile" }]}
//           currentPageTitle="Change Password"
//         />

//         <form
//           onSubmit={handleSubmit(handleChangePassword)}
//           className="space-y-4 mb-10 border p-10 flex flex-col gap-5"
//         >
//           {/* Old Password Field */}
//           <div className="mb-5">
//             <label
//               htmlFor="old_password"
//               className={`block mb-2 text-sm font-medium ${
//                 errors.old_password ? "text-red-500" : "text-gray-900"
//               } dark:text-white`}
//             >
//               Old Password
//             </label>
//             <input
//               {...register("old_password", {
//                 required: "Old password is required",
//               })}
//               type="password"
//               className={`bg-gray-50 border ${
//                 errors.old_password
//                   ? "border-red-500 focus:ring-red-500 focus:border-red-500"
//                   : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
//               } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
//               placeholder="Enter your old password"
//             />
//             {errors.old_password && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.old_password.message}
//               </p>
//             )}
//           </div>

//           {/* New Password Field */}
//           <div className="mb-5">
//             <label
//               htmlFor="new_password"
//               className={`block mb-2 text-sm font-medium ${
//                 errors.new_password ? "text-red-500" : "text-gray-900"
//               } dark:text-white`}
//             >
//               New Password
//             </label>
//             <input
//               {...register("new_password", {
//                 required: "New password is required",
//                 minLength: {
//                   value: 6,
//                   message: "Password must be at least 6 characters",
//                 },
//                 maxLength: {
//                   value: 30,
//                   message: "Password must be less than 30 characters",
//                 },
//               })}
//               type="password"
//               className={`bg-gray-50 border ${
//                 errors.new_password
//                   ? "border-red-500 focus:ring-red-500 focus:border-red-500"
//                   : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
//               } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
//               placeholder="Enter new password"
//             />
//             {errors.new_password && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.new_password.message}
//               </p>
//             )}
//           </div>

//           {/* Confirm New Password Field */}
//           <div className="mb-5">
//             <label
//               htmlFor="new_password_confirmation"
//               className={`block mb-2 text-sm font-medium ${
//                 errors.new_password_confirmation
//                   ? "text-red-500"
//                   : "text-gray-900"
//               } dark:text-white`}
//             >
//               Confirm New Password
//             </label>
//             <input
//               {...register("new_password_confirmation", {
//                 required: "Please confirm your new password",
//                 validate: (value) =>
//                   value === new_password || "Passwords do not match",
//               })}
//               type="password"
//               className={`bg-gray-50 border ${
//                 errors.new_password_confirmation
//                   ? "border-red-500 focus:ring-red-500 focus:border-red-500"
//                   : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
//               } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
//               placeholder="Confirm new password"
//             />
//             {errors.new_password_confirmation && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.new_password_confirmation.message}
//               </p>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="inline-flex w-full items-center justify-center rounded-lg gap-3 bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 sm:w-auto"
//           >
//             <HiLockClosed />
//             Change Password
//           </button>
//         </form>
//       </Container>
//     </section>
//   );
// };

// export default UserProfileChangePasswordPage;
import React from 'react';

const UserProfileChangePasswordPage = () => {
  return (
    <div>
      Userpass
    </div>
  );
}

export default UserProfileChangePasswordPage;
