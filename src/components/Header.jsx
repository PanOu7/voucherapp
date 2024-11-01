import React from "react";
import Container from "./Container";
import useCookie from "react-use-cookie";
import useUserStore from "../stores/useUserStore";
const Header = () => {

  // const [userCookie] = useCookie("user");
  // const { name, email, profile_image } = JSON.parse(userCookie);
  // console.log(userObj);

  const {user:{name,email,profile_image}}=useUserStore();
  
  return (
    <header className="mb-5">
      <Container>
        <div className="flex items-center justify-between">
          <div className="">
            <h1 className="text-xl font-bold text-sky-700 ">Voucher App</h1>
            <p className="text-md text-emerald-900">MMS Software</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <img
              src={
                profile_image
                  ? profile_image
                  : "https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
              }
              alt=""
              className="size-10 rounded-md object-cover object-top border-white"
            />
            <div>
              <h1 className="text-lg font-bold text-sky-700 ">{name}</h1>
              <p className="text-sm text-emerald-900">{email}</p>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
