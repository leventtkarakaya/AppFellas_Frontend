import React from "react";
// Next Image
import Image from "next/image";
// Image
import Logo from "@/public/images/Logo.png";
import tag from "@/public/images/tag.png";
import earth from "@/public/images/earth.png";
import avatar from "@/public/images/avatar.png";
export default function Navbar() {
  return (
    <>
      <div className="p-8 navbar">
        {/* Logo */}
        <div className="flex-1 gap-5 ">
          <a href="/">
            <Image src={Logo} alt="Logo" width={80} height={80} />
          </a>
          <p className="mb-3 text-2xl text-[#4c038c] uppercase">Plane Scape</p>
        </div>

        {/* Icons && Dropdown */}
        <div className="flex-none gap-2">
          {/* Icons start */}
          <Image src={tag} alt="tag" width={25} height={25} />
          <p className="text-[#4c038c]">Deals</p>
          <Image src={earth} alt="earth" width={25} height={25} />
          <p className="text-[#4c038c]">Discover</p>
          {/* Icons end */}

          {/* Dropdown start*/}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  alt="Kullanıcı avatarı"
                  src={avatar}
                  height={50}
                  width={50}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 shadow"
            >
              <li>
                <a>Profil</a>
              </li>
              <li>
                <a>Çıkış</a>
              </li>
            </ul>
          </div>
          {/* Dropdown end*/}
        </div>
      </div>
    </>
  );
}
