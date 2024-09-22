import React from "react";
import Image from "next/image";
import Facebook from "@/public/images/facebook.png";
import Twitter from "@/public/images/twitter.png";
import Instagram from "@/public/images/instagram.png";
import Linkedin from "@/public/images/linkedin.png";

export default function Footer() {
  return (
    <footer className="relative pt-8 pb-6 bg-gray-200">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <h2 className="text-3xl font-semibold text-gray-400">
              Plane Scape
            </h2>
            <h5 className="mt-0 mb-2 text-lg text-gray-600">
              Uçuşunuza hizmet ediyoruz...
            </h5>
            <div className="flex mt-6 mb-6 gap-x-5 lg:mb-0">
              <button className="flex items-center justify-center w-10 h-10 mr-2 text-blue-400 bg-white rounded-full shadow-lg outline-none focus:outline-none">
                <Image src={Facebook} alt="facebook" width={30} height={30} />
              </button>
              <button className="flex items-center justify-center w-10 h-10 mr-2 text-blue-600 bg-white rounded-full shadow-lg outline-none focus:outline-none">
                <Image src={Twitter} alt="twitter" width={30} height={30} />
              </button>
              <button className="flex items-center justify-center w-10 h-10 mr-2 text-pink-400 bg-white rounded-full shadow-lg outline-none focus:outline-none">
                <Image src={Instagram} alt="instagram" width={30} height={30} />
              </button>
              <button className="flex items-center justify-center w-10 h-10 mr-2 text-gray-800 bg-white rounded-full shadow-lg outline-none focus:outline-none">
                <Image src={Linkedin} alt="linkedin" width={30} height={30} />
              </button>
            </div>
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex flex-wrap mb-6 items-top">
              <div className="w-full px-4 ml-auto lg:w-4/12">
                <span className="block mb-2 text-sm font-semibold text-gray-800 uppercase">
                  Şirketimiz
                </span>
                <ul className="list-none">
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-600 hover:text-gray-800"
                      href="https://www.creative-tim.com/presentation?ref=njs-profile"
                    >
                      Hakkımızda
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-600 hover:text-gray-800"
                      href="https://blog.creative-tim.com?ref=njs-profile"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-600 hover:text-gray-800"
                      href="https://www.github.com/creativetimofficial?ref=njs-profile"
                    >
                      İnsan Kaynakları
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-600 hover:text-gray-800"
                      href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                    >
                      Şirket Gelenegi
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <span className="block mb-2 text-sm font-semibold text-gray-800 uppercase">
                  Tarifeler
                </span>
                <ul className="list-none">
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-600 hover:text-gray-800"
                      href="#"
                    >
                      Uçak Tarifeleri
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-600 hover:text-gray-800"
                      href="#"
                    >
                      Araba Tarifeleri
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-600 hover:text-gray-800"
                      href="#"
                    >
                      Hotel Tarifeleri
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-600 hover:text-gray-800"
                      href="#"
                    >
                      İletişim
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="w-full px-4 mx-auto text-center md:w-4/12">
            <div className="py-1 text-sm font-semibold text-gray-500">
              Copyright © <span id="get-current-year">2024</span>
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className="text-gray-500 hover:text-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                , Place Space
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
