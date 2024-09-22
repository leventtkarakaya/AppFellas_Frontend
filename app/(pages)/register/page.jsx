"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/Logo.png";
import key from "@/public/images/key-round.png";
import user from "@/public/images/user-round.png";
import emial from "@/public/images/mail.png";
import finger from "@/public/images/fingerprint.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
export default function page() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [value, setValue] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirm: "",
  });

  const handleValueChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleChange = (phone) => {
    setPhoneNumber(phone);
    value.phone = phone;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsloading(true);
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        {
          name: value.name,
          surname: value.surname,
          email: value.email,
          phone: value.phone,
          password: value.password,
          passwordConfirm: value.passwordConfirm,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setIsloading(false);
      console.log("🚀 ~ handleSubmit ~ response:", response.data);
      if (response.status === 201) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data));
        router.push("/login");
      }
    } catch (error) {
      Swal.fire({
        icon: "Hata oluştu",
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
          <form className="bg-white" onSubmit={handleSubmit}>
            <h1 className="mb-1 text-2xl font-bold text-gray-800">Merhaba!</h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Üyelere özel kupon ve fırsatlar seni bekliyor 🤗
            </p>
            <div className="flex items-center px-3 py-2 mb-4 border-2 rounded-2xl">
              <Image src={user} alt="user" width={20} height={20} />
              <input
                id="name"
                name="name"
                value={value.name}
                onChange={handleValueChange}
                type="text"
                placeholder="İsim"
                className="px-24 pl-2 border-none outline-none"
                required
              />
            </div>
            <div className="flex items-center px-3 py-2 mb-4 border-2 rounded-2xl">
              <Image src={finger} alt="finger" width={20} height={20} />
              <input
                id="surname"
                name="surname"
                value={value.surname}
                onChange={handleValueChange}
                type="text"
                placeholder="Soyad"
                className="px-24 pl-2 border-none outline-none"
                required
              />
            </div>
            <div className="flex items-center px-3 py-2 mb-4 border-2 rounded-2xl">
              <Image src={emial} alt="emial" width={20} height={20} />
              <input
                id="email"
                name="email"
                value={value.email}
                onChange={handleValueChange}
                type="text"
                placeholder="Email"
                className="px-24 pl-2 border-none outline-none"
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
                className="px-24 pl-2 border-none outline-none"
                required
              />
            </div>
            <div className="flex items-center px-3 py-2 mt-2 border-2 rounded-2xl">
              <Image src={key} alt="key" width={20} height={20} />
              <input
                id="passwordConfirm"
                name="passwordConfirm"
                value={value.passwordConfirm}
                onChange={handleValueChange}
                type="password"
                placeholder="Şifre Tekrar"
                className="px-24 pl-2 border-none outline-none"
                required
              />
            </div>
            <div className="flex items-center px-3 py-2 mt-2 border-2 rounded-2xl">
              <PhoneInput
                country={"tr"}
                className="w-full rounded-xl"
                value={phoneNumber}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="block w-full py-2 mt-4 mb-2 font-semibold text-white bg-indigo-600 rounded-2xl"
            >
              Üye Ol
            </button>
            <span className="ml-2 text-sm cursor-pointer hover:text-blue-500">
              <Link href="/login">
                <p className="hover:text-[#673AB7]">Zaten üye misiniz?</p>
              </Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}
