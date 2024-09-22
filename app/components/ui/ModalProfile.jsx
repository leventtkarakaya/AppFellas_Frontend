import React, { useState } from "react";
import axios from "axios";
import { X } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
export default function Modal() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [value, setValue] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    userId: "",
    password: "",
    passwordConfirm: "",
  });
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("persist:auth");
  if (user) {
    const userUpdated = JSON.parse(user);
    const persistedUser = JSON.parse(userUpdated?.user);
    if (!persistedUser) {
      const _id = persistedUser?.user._id ? persistedUser?.user._id : null;
      value.userId = _id;
    }
  }
  if (!token) {
    return null;
  }
  const handleChange = (phone) => {
    setPhoneNumber(phone);
    value.phone = phone;
  };
  const handleValueChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const closeBtnClick = () => {
    document.getElementById("my_modal_5").close();
    window.location.reload();
  };
  const handleOnSubmitUserUpdated = async (e) => {
    debugger;
    e.preventDefault();
    try {
      setIsloading(true);
      const reponse = await axios.put(
        "http://localhost:5000/api/v1/auth/accountUpdate",
        {
          name: value.name,
          surname: value.surname,
          email: value.email,
          phone: value.phone,
          password: value.password,
          passwordConfirm: value.passwordConfirm,
          userId: value.userId,
          token: token,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("🚀 ~ handleOnSubmitUserUpdated ~ reponse:", reponse);
      setIsloading(false);
      if (reponse.status === 200) {
        document.getElementById("my_modal_5").close();
        window.location.reload();
      }
    } catch (error) {
      console.log("🚀 ~ handleOnSubmitUserUpdated ~ error:", error);
    }
  };
  return (
    <>
      <button
        className="py-3 px-14 btn bg-[#4a03a0] text-white hover:bg-[#4a03a0] hover:text-white "
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Profil
      </button>
      <dialog
        id="my_modal_5"
        className="flex items-center justify-center modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <div className="p-8 border border-gray-200 realative">
            <X
              className="absolute top-10 right-10 hover:cursor-pointer hover:text-red-500"
              onClick={() => closeBtnClick()}
            />
            <h1 className="text-3xl font-medium">Kullanıcı Profili</h1>
            <p className="mt-6 text-gray-600">
              Kullanıcı bilgilerinizi buradan güncelleyebilirsiniz.
            </p>
            <form onSubmit={handleOnSubmitUserUpdated}>
              <div className="grid gap-4 mt-8 lg:grid-cols-2">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    İsim
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={value.name}
                    onChange={handleValueChange}
                    type="text"
                    className="block w-full px-3 py-1 text-gray-700 bg-gray-100 border border-gray-200 rounded focus:ring-blue-500 focus:border-blue-500"
                    placeholder="İsminizi giriniz"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Soyisim
                  </label>
                  <input
                    id="surname"
                    name="surname"
                    value={value.surname}
                    onChange={handleValueChange}
                    type="text"
                    className="block w-full px-3 py-1 text-gray-700 bg-gray-100 border border-gray-200 rounded focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Soyisminizi giriniz"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    value={value.email}
                    onChange={handleValueChange}
                    type="text"
                    className="block w-full px-3 py-1 text-gray-700 bg-gray-100 border border-gray-200 rounded focus:ring-blue-500 focus:border-blue-500"
                    placeholder="E-mail adresinizi giriniz"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Şifre
                  </label>
                  <input
                    id="password"
                    name="password"
                    value={value.password}
                    onChange={handleValueChange}
                    type="password"
                    className="block w-full px-3 py-1 text-gray-700 bg-gray-100 border border-gray-200 rounded focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Şifrenizi giriniz"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Şifre Tekarı
                  </label>
                  <input
                    id="passwordConfirm"
                    name="passwordConfirm"
                    value={value.passwordConfirm}
                    onChange={handleValueChange}
                    type="password"
                    className="block w-full px-3 py-1 text-gray-700 bg-gray-100 border border-gray-200 rounded focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Şifre tekarınızı giriniz"
                  />
                </div>
                <div className="col-span-2 mx-14">
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Telefon
                  </label>
                  <PhoneInput
                    country={"tr"}
                    className="w-full rounded-xl"
                    value={phoneNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex justify-end mt-8">
                <button
                  type="submit"
                  className="text-white rounded btn btn-success hover:btn-success hover:text-white active:bg-blue-700 disabled:opacity-50"
                >
                  Kaydet
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
