"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/Logo.png";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import MenuIcon from "@/public/images/MenuBtnIcon.png";

export default function MenuBtn() {
  const [activeMenu, setActiveMenu] = useState(false);

  const user = localStorage.getItem("persist:auth");
  let userPersist = "";
  if (user) {
    const userUpdated = JSON.parse(user);
    const persistedUser = JSON.parse(userUpdated?.user);
    persistedUser ? (userPersist = persistedUser?.user) : null;
  }
  const handleActiveMenu = () => {
    setActiveMenu(!activeMenu);
    console.log("activeMenu", activeMenu);
  };
  return (
    <>
      <Image
        src={MenuIcon}
        onClick={() => handleActiveMenu()}
        alt="MenuIcon"
        width={30}
        height={30}
        className="cursor-pointer"
      />
      {/* Modal Active */}
      <div
        className={`fixed z-10 inset-0 ${
          activeMenu ? "w-full bg-[rgba(0,0,0,1)]" : "hidden"
        }`}
      >
        <aside className="relative flex flex-col items-center justify-center h-full ">
          <div className="absolute top-16 left-16">
            <X
              size={30}
              onClick={() => handleActiveMenu()}
              className="cursor-pointer text-[#fff] hover:text-red-600"
            />
          </div>
          <div className="mb-10">
            <Image src={Logo} alt="Logo" width={80} height={80} />
          </div>
          <nav className="flex flex-col gap-4">
            <ul className="flex flex-col gap-4 text-white list-none">
              <li>
                <a href="/" className="hover:text-gray-300">
                  Anasayfa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Flights
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Arabalar
                </a>
              </li>
              <li>
                <a href="# " className="hover:text-gray-300">
                  Hoteller
                </a>
              </li>
              {userPersist === null ? (
                <li>
                  <a href="/login" className="hover:text-gray-300">
                    Giriş Yap
                  </a>
                </li>
              ) : null}
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
}
