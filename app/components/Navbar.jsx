"use client";
import React from "react";
import Image from "next/image";
import Logo from "@/public/images/Logo.png";
import tag from "@/public/images/tag.png";
import earth from "@/public/images/earth.png";
import avatar from "@/public/images/avatar.png";
// ? Modal UI import
import ModalProfile from "./ui/ModalProfile";
import ModalLogout from "./ui/ModalLogout";
import ModalAccDel from "./ui/ModalAccDel";
import { useDispatch } from "react-redux";
import { clearUser } from "@/app/redux/slice/userSlice";
import MenuBtn from "@/app/components/MenuBtn";

export default function Navbar() {
  const user = localStorage.getItem("persist:auth");
  let userPersist = "";
  if (user) {
    const userUpdated = JSON.parse(user);
    const persistedUser = JSON.parse(userUpdated?.user);
    persistedUser ? (userPersist = persistedUser?.user) : null;
  }
  const dispatch = useDispatch();
  return (
    <>
      <div className="p-8 navbar max-md:flex max-md:justify-center max-md:items-center ">
        {/* Logo */}
        <div className="flex-1 gap-5">
          <a href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={80}
              height={80}
              className="max-md:w-16 max-md:h-16"
              priority
            />
          </a>
          <p className="mb-3 text-2xl text-[#4c038c] uppercase">Plane Scape</p>
        </div>
        {/* Icons && Dropdown */}
        <div className="flex-none gap-2 ">
          {/* Icons start */}
          <Image
            src={tag}
            alt="tag"
            width={25}
            height={25}
            className=" max-md:hidden"
          />
          <p className="text-[#4c038c] max-md:hidden">Deals</p>
          <Image
            src={earth}
            alt="earth"
            width={25}
            height={25}
            className=" max-md:hidden"
          />
          <p className="text-[#4c038c] max-md:hidden">Discover</p>
          {/* Icons end */}
          {/* Dropdown start*/}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar max-md:hidden"
            >
              <div className="w-10 rounded-full">
                <Image
                  alt="Kullanıcı avatarı"
                  src={userPersist?.user?.picture || avatar}
                  height={50}
                  width={50}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content flex items-center justify-center flex-col gap-5 bg-base-100 rounded-box z-[1] mt-3 w-48 p-2 shadow"
            >
              {userPersist === null ? (
                <li>
                  <a href="/login" className="px-6 btn btn-primary">
                    Üye Ol
                  </a>
                </li>
              ) : null}
              {userPersist === null ? null : (
                <li>
                  <ModalProfile />
                </li>
              )}
              {userPersist === null ? null : (
                <li>
                  <ModalLogout userClear={clearUser} dispatch={dispatch} />
                </li>
              )}
              {userPersist === null ? null : (
                <li>
                  <ModalAccDel />
                </li>
              )}
              {userPersist === null ? null : (
                <li>
                  <a href="/myflights" className="px-10 btn btn-primary">
                    Uçuşlarım
                  </a>
                </li>
              )}
            </ul>
          </div>
          {/* Dropdown end*/}
          {/* Menu Button start */}
          <div className="md:hidden max-md:mb-3">
            <MenuBtn />
          </div>
          {/* Menu Button end */}
        </div>
      </div>
    </>
  );
}
