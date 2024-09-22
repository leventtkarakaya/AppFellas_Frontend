import React from "react";

export default function ModalLogout({ userClear, dispatch }) {
  const handleLogout = () => {
    dispatch(userClear());
  };

  return (
    <>
      <button
        className="py-3 px-14 btn hover:btn-error hover:text-white"
        onClick={() => document.getElementById("my_modal_6").showModal()}
      >
        Çıkış
      </button>
      <dialog
        id="my_modal_6"
        className="flex items-center justify-center modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="text-lg font-bold">
            Hesaptan Çıkış yapmak istediğinize emin misiniz?
          </h3>
          <p className="py-4">Çıkış yapmak için tıklayınız.</p>
          <div className="modal-action">
            <form method="dialog">
              <button
                className="bg-[#79797979] text-white btn hover:btn-error hover:text-white"
                onClick={() => handleLogout()}
              >
                Çıkış Yap
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
