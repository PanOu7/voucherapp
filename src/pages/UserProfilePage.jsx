import React from 'react';
import useCookie from "react-use-cookie"
import Container from '../components/Container';
import BreadCrumb from '../components/Breadcrumbs';
import { HiLockOpen, HiMail, HiUser } from 'react-icons/hi';
import { AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useUserStore from '../stores/useUserStore';
const UserProfilePage = () => {
    // const [user]=useCookie("user");
    // const {name,email,profile_image}=JSON.parse(user);

    const {user:{name,email,profile_image}}=useUserStore();
  return (
    <section>
      <Container>
        <BreadCrumb currentPageTitle="User Profile " />

        <div className="space-y-4 mb-10 border p-10 flex flex-col items-center gap-2">
          <div className="flex items-end space-x-4">
            <div className="flex items-center relative">
              <img
                src={
                  profile_image
                    ? profile_image
                    : "https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
                }
                alt="user photo"
                className="size-32 rounded-md  "
              />
              <Link
                to="user-change-image"
                className="bg-emerald-700 text-white px-2 py-1 rounded absolute -right-3 -top-3"
              >
                <AiFillEdit />
              </Link>
            </div>
            <div className="">
              <span className="mb-2 inline-block rounded bg-emerald-500 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-emerald-300">
                {" "}
                Your Name
              </span>
              <div className="flex gap-3 items-center justify-center">
                <h2 className=" items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-2xl">
                  {" "}
                  {name}
                </h2>
                <Link
                  to="user-change-name"
                  className="bg-emerald-700 text-white px-2 py-1 rounded"
                >
                  <AiFillEdit />
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <span className="font-semibold text-gray-900 dark:text-white">
              Email Address
            </span>
            <div className="flex items-center gap-3">
              <h2 className="text-gray-500 dark:text-gray-400">{email}</h2>
              <button className="bg-emerald-700 text-white px-2 py-1 rounded">
                <AiFillEdit />
              </button>
            </div>
          </div>
          <Link
            to="user-change-password"
            type="button"
            className="inline-flex w-full items-center justify-center rounded-lg  gap-3 bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
          >
            <HiLockOpen />
            Change Password
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default UserProfilePage;
