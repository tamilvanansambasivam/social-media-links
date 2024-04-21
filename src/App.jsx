import React from "react";
import SocialLink from "./components/SocialLink";

export default function () {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center content-center items-center p-4 w-72 rounded-md space-y-3 ">
        <img
          src="/src/assets/tamilLogo.png "
          alt="My logo"
          className="rounded-xl"
        />
        <div>
          {" "}
          <h1 className="uppercase font-bold">tamilvanan sambasivam</h1>
          <h2>Aspiring Full Stack Developer</h2>
          <h3>Thanjavur, Tamil Nadu, India</h3>
        </div>

        <SocialLink
          className="text-white bg-gradient-to-r from-gray-800 to-gray-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2  w-64"
          linkUrl="https://github.com/tamilvanansambasivam"
          linkname="GitHub"
        />
        <SocialLink
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2 w-64"
          linkUrl="https://www.linkedin.com/in/tamilvanansambasivam/"
          linkname="LinkedIn"
        />

        <SocialLink
          className="text-white bg-gradient-to-r from-red-600 to-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2  w-64"
          linkUrl="https://www.youtube.com/@philomath_tamil"
          linkname="YouTube"
        />

        <SocialLink
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-400  font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2  w-64"
          linkUrl="https://www.twitter.com/@philomath_tamil"
          linkname="Twitter"
        />

        <SocialLink
          className="text-white bg-gradient-to-r from-orange-500 to-rose-400  font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2  w-64"
          linkUrl="https://www.instagram.com/@philomath_tamil"
          linkname="Instagram"
        />
      </div>
    </div>
  );
}
