"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/Logo.png";
import key from "@/public/images/key-round.png";
import emial from "@/public/images/mail.png";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { setUser } from "@/app/redux/slice/userSlice";
import { useDispatch } from "react-redux";
export default function page() {
  /* Istek durumunu tutan state */
  const [isloading, setIsloading] = useState(false);
  /* Redux dispatc erişim */
  const dispatch = useDispatch();
  /* Routelere erişim */
  const router = useRouter();
  /* İnput alanların value ile degerlerini tutan state */
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  /* İnput alanların value ile degerlerini alan fonksiyon */
  const handleValueChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  /*  Giriş yap butonuna tıklandıgında tetiklenen istek fonksiyonu */
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsloading(true);
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        {
          email: value.email,
          password: value.password,
        }
      );
      setIsloading(false);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        dispatch(setUser(response.data.user));
        router.push("/");
      }
    } catch (error) {
      /* Hata mesajıyı ekrana basan fonksiyon */
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };
  return (
    <>
      <div className="h-screen md:flex">
        <div className="relative items-center justify-around hidden w-1/2 overflow-hidden md:flex bg-gradient-to-tr from-blue-800 to-purple-700 i">
          <div>
            <Image src={Logo} alt="Logo" width={200} height={200} priority />
          </div>
          <div className="absolute border-4 border-t-8 rounded-full -bottom-32 -left-40 w-80 h-80 border-opacity-30"></div>
          <div className="absolute border-4 border-t-8 rounded-full -bottom-40 -left-20 w-80 h-80 border-opacity-30"></div>
          <div className="absolute border-4 border-t-8 rounded-full -top-40 -right-0 w-80 h-80 border-opacity-30"></div>
          <div className="absolute border-4 border-t-8 rounded-full -top-20 -right-20 w-80 h-80 border-opacity-30"></div>
        </div>
        <div className="flex items-center justify-center py-10 bg-white md:w-1/2">
          <form className="bg-white" onSubmit={handleOnSubmit}>
            <h1 className="mb-1 text-2xl font-bold text-gray-800">Merhaba!</h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Üyelere özel kupon ve fırsatlar seni bekliyor 🤗
            </p>
            <div className="flex items-center px-3 py-2 mb-4 border-2 rounded-2xl">
              <Image src={emial} alt="emial" width={20} height={20} />
              <input
                id="email"
                name="email"
                value={value.email}
                onChange={handleValueChange}
                type="text"
                placeholder="Email"
                className="pl-2 border-none outline-none"
                required
              />
            </div>
            <div className="flex items-center px-3 py-2 border-2 rounded-2xl">
              <Image src={key} alt="key" width={20} height={20} />
              <input
                id="password"
                name="password"
                value={value.password}
                onChange={handleValueChange}
                type="password"
                placeholder="Şifre"
                className="pl-2 border-none outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="block w-full py-2 mt-4 mb-2 font-semibold text-white bg-indigo-600 rounded-2xl"
            >
              Giriş Yap
            </button>
            <span className="ml-2 text-sm cursor-pointer hover:text-blue-500">
              <Link href="/register">
                <p className="hover:text-[#673AB7]">Hesapınız yok mu?</p>
              </Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}
