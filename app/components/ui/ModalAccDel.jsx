import React, { useState } from "react";
import axios from "axios";
export default function ModalAccDel() {
  const [isloading, setIsloading] = useState(false);
  const [value, setValue] = useState({
    email: "",
    password: "",
    userId: "",
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

  const handleValueChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const clsBtnHandle = () => {
    document.getElementById("my_modal_7").close();
    window.location.reload();
  };

  const handleOnSubmit = async (e) => {
    debugger;
    e.preventDefault();
    try {
      setIsloading(true);
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/accountDelete",
        {
          email: value.email,
          password: value.password,
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
      setIsloading(false);
      if (response.status === 200) {
        localStorage.removeItem("token");
        localStorage.removeItem("persist:auth");
        window.location.reload();
      }
    } catch (error) {
      console.log("🚀 ~ handleOnSubmit ~ error:", error);
    }
  };
  return (
    <>
      <button
        className="px-10 py-3 btn hover:btn-error hover:text-white"
        onClick={() => document.getElementById("my_modal_7").showModal()}
      >
        <p className="flex items-center justify-center"> Hesapı Sil</p>
      </button>
      <dialog
        id="my_modal_7"
        className="flex items-center justify-center modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box ">
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">
                Hesabınız silmek istediğinize emin misiniz?
              </h1>
              <p className="mt-4 text-gray-500">
                Hesap kalıcı olarak sistemden silinecektir.Firmamız herhangi bir
                mesuliyet sağlamamaktadır.
              </p>
            </div>
            <form
              action="#"
              className="max-w-md mx-auto mt-8 mb-0 space-y-4"
              onSubmit={handleOnSubmit}
            >
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={value.email}
                    onChange={handleValueChange}
                    className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm pe-12"
                    placeholder="Email giriniz"
                  />
                  <span className="absolute inset-y-0 grid px-4 end-0 place-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-400 size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    value={value.password}
                    onChange={handleValueChange}
                    type="password"
                    className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm pe-12"
                    placeholder="Şifrenizi giriniz"
                  />
                  <span className="absolute inset-y-0 grid px-4 end-0 place-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-400 size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-end gap-10 pt-5">
                <button
                  type="submit"
                  className="inline-block px-5 py-3 text-sm font-medium btn hover:btn-error hover:text-white"
                >
                  Hesabı Sil
                </button>
                <button
                  onClick={() => clsBtnHandle()}
                  className="inline-block px-5 py-3 text-sm font-medium text-white rounded-lg bg-primary"
                >
                  Çıkış
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
