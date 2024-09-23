import React from "react";
import Image from "next/image";
import Logo from "@/public/images/Logo.png";
import Link from "next/link";
import Flight_1 from "@/public/images/UserFlight_1.png";
import Flight_2 from "@/public/images/UserFlight_2.png";
import Flight_3 from "@/public/images/UserFlight_3.png";
import Flight_4 from "@/public/images/UserFlight_4.png";
import Flight_5 from "@/public/images/UserFlight_5.png";
import { IoInformationCircleOutline } from "react-icons/io5";
import MenuBtn from "@/app/components/MenuBtn";
export default function page() {
  return (
    <>
      <div className="container p-8 mx-auto md:py-10 md:px-0 2xl:px-40">
        {/* header */}
        <div className="flex items-center justify-between gap-10 max-sm:flex max-sm:items-center ">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="Logo"
              width={80}
              height={80}
              className="max-md:w-16 max-md:h-16"
            />
          </Link>
          <div className="flex items-center max-sm:hidden">
            <nav className="flex items-center justify-center md:mr-20">
              <ul className="flex items-center font-bold gap-x-12 ">
                <li>
                  <a href="#">Times</a>
                </li>
                <li>
                  <a href="#">Stops</a>
                </li>
                <li>
                  <a href="#">Airlines</a>
                </li>
                <li>
                  <a href="#">Airports</a>
                </li>
                <li>
                  <a href="#">Amenties</a>
                </li>
                <select className="w-full max-w-xs text-blue-500 border-none outline-none select select-bordered">
                  <option defaultChecked value={"Edit Search"}>
                    Edit Search
                  </option>
                  <option className="text-blue-500">Deneme 1</option>
                  <option className="text-blue-500">Deneme 2</option>
                </select>
              </ul>
            </nav>
          </div>
          <div className="flex gap-10 max-lg:hidden max-sm:hidden">
            {/* Rating */}
            <div className="flex flex-col gap-2 ">
              <div className="flex flex-col rating rating-sm ">
                <div className="md:flex">
                  <input
                    type="radio"
                    name="rating-2"
                    className="bg-black mask mask-star-2 text-[10px]"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="bg-black mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="bg-black mask mask-star-2"
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="rating-2"
                    className="bg-black mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="bg-black mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="bg-black mask mask-star-2"
                  />
                </div>
              </div>
            </div>
            {/* Rating */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col rating rating-sm">
                <div className="md:flex">
                  <input
                    type="radio"
                    name="rating-3"
                    className="bg-black mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="bg-black mask mask-star-2"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="bg-black mask mask-star-2"
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="rating-3"
                    className="bg-black mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="bg-black mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="bg-black mask mask-star-2"
                  />
                </div>
              </div>
            </div>
            {/* Rating */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col rating rating-sm">
                <div className="md:flex">
                  <input
                    type="radio"
                    name="rating-4"
                    className="bg-black mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="bg-black mask mask-star-2"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="bg-black mask mask-star-2"
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="rating-4"
                    className="bg-black mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="bg-black mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="bg-black mask mask-star-2"
                  />
                </div>
              </div>
            </div>
            {/* Rating */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col rating rating-sm">
                <div className="md:flex">
                  <input
                    type="radio"
                    name="rating-5"
                    className="bg-black mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="bg-black mask mask-star-2"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="bg-black mask mask-star-2"
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="rating-5"
                    className="bg-black mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="bg-black mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="bg-black mask mask-star-2"
                  />
                </div>
              </div>
            </div>
            {/* Rating */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col rating rating-sm">
                <div className="md:flex">
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-black mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-black mask mask-star-2"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-black mask mask-star-2"
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-black mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-black mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-black mask mask-star-2"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* MenuBtn */}
          <div className="mb-6 md:hidden">
            <MenuBtn />
          </div>
        </div>
        {/* input */}
        <div className="flex items-center justify-between px-10 mt-20 max-sm:flex max-sm:items-center max-sm:gap-x-5 max-sm:flex-col">
          <div className="flex items-center gap-2 max-sm:flex max-sm:flex-col max-sm:w-full ">
            <p className="font-sans text-xl font-semibold">{`SortBy:`} </p>
            <select className="w-full max-w-xs font-bold select ">
              <option defaultChecked>Recommended</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div className="flex items-center gap-2 max-sm:w-full max-sm:flex max-sm:flex-col">
            <IoInformationCircleOutline size={25} className="text-blue-500" />
            <p className="font-sans">
              Avg Fare: <span className="font-bold">$250</span>
            </p>
          </div>
        </div>
        {/* content table */}
        <div className="container p-2 mx-auto mt-10 md:flex md:flex-col md:gap-5 ">
          <div className="flex items-center justify-between gap-5 mt-10 max-sm:flex max-sm:flex-col max-sm:items-start max-sm:px-5 ">
            <div className="flex items-center gap-5 max-sm:flex max-sm:flex-col ">
              {/* Logo */}
              <div className="mb-16 max-sm:-mb-8 ">
                <Image
                  src={Flight_1}
                  alt="Logo"
                  width={150}
                  height={150}
                  className="max-sm:text-xl"
                />
              </div>
              {/* 2 */}
              <div className="flex flex-col md:w-full md:gap-x-10 gap-y-5 ">
                <p className="text-3xl">7:30 AM - 9:12 AM</p>
                <div className="flex items-center gap-x-10 lg:gap-x-28 max-sm:flex-col max-sm:w-full max-sm:gap-y-2">
                  <div className="flex flex-col gap-y-2">
                    <p className="font-bold">Delta Air Lines</p>
                    <select className="w-full max-w-xs text-blue-500 select select-bordered select-sm">
                      <option defaultChecked>Small</option>
                      <option>Deneme 1</option>
                      <option>Deneme 2</option>
                      <option>Deneme 3</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-y-3 ">
                    <p className="font-bold">Nonstap</p>
                    <p>1h 15 min</p>
                  </div>
                  <div className="flex flex-col gap-y-3 max-sm:flex max-sm:flex-col max-sm:gap-y-2 max-sm:items-center">
                    <p className="font-bold">SFO to LAX</p>
                    <p>DL 1443</p>
                  </div>
                </div>
              </div>
            </div>
            {/* content table 2 */}
            <div className="flex gap-40 max-sm:flex max-sm:justify-start max-sm:w-full max-sm:gap-16">
              <div className="flex gap-20 max-sm:gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold">$156</span>
                  <span>Main </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold">$204</span>
                  <span>Confort+</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xl font-bold">$386</span>
                <span>Detla One</span>
              </div>
            </div>
          </div>
          <hr className="text-black border" />
          <div className="flex items-center justify-between gap-5 mt-10 max-sm:flex max-sm:flex-col max-sm:items-start max-sm:px-5 ">
            <div className="flex items-center gap-5 max-sm:flex max-sm:flex-col ">
              {/* Logo */}
              <div className="mb-16 max-sm:-mb-8 ">
                <Image
                  src={Flight_2}
                  alt="Logo"
                  width={150}
                  height={150}
                  className="max-sm:text-xl"
                />
              </div>
              {/* 2 */}
              <div className="flex flex-col md:w-full md:gap-x-10 gap-y-5 ">
                <p className="text-3xl">7:30 AM - 9:12 AM</p>
                <div className="flex items-center gap-x-10 lg:gap-x-28 max-sm:flex-col max-sm:w-full max-sm:gap-y-2">
                  <div className="flex flex-col gap-y-2">
                    <p className="font-bold">Delta Air Lines</p>
                    <select className="w-full max-w-xs text-blue-500 select select-bordered select-sm">
                      <option defaultChecked>Small</option>
                      <option>Deneme 1</option>
                      <option>Deneme 2</option>
                      <option>Deneme 3</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-y-3 ">
                    <p className="font-bold">Nonstap</p>
                    <p>1h 15 min</p>
                  </div>
                  <div className="flex flex-col gap-y-3 max-sm:flex max-sm:flex-col max-sm:gap-y-2 max-sm:items-center">
                    <p className="font-bold">SFO to LAX</p>
                    <p>DL 1443</p>
                  </div>
                </div>
              </div>
            </div>
            {/* content table 2 */}
            <div className="flex gap-40 max-sm:flex max-sm:justify-start max-sm:w-full max-sm:gap-16">
              <div className="flex gap-20 max-sm:gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold">$156</span>
                  <span>Main </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold">$204</span>
                  <span>Confort+</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xl font-bold">$386</span>
                <span>Detla One</span>
              </div>
            </div>
          </div>
          <hr className="text-black border" />
          <div className="flex items-center justify-between gap-5 mt-10 max-sm:flex max-sm:flex-col max-sm:items-start max-sm:px-5 ">
            <div className="flex items-center gap-5 max-sm:flex max-sm:flex-col ">
              {/* Logo */}
              <div className="mb-16 max-sm:-mb-8 ">
                <Image
                  src={Flight_3}
                  alt="Logo"
                  width={150}
                  height={150}
                  className="max-sm:text-xl"
                />
              </div>
              {/* 2 */}
              <div className="flex flex-col md:w-full md:gap-x-10 gap-y-5 ">
                <p className="text-3xl">7:30 AM - 9:12 AM</p>
                <div className="flex items-center gap-x-10 lg:gap-x-28 max-sm:flex-col max-sm:w-full max-sm:gap-y-2">
                  <div className="flex flex-col gap-y-2">
                    <p className="font-bold">Delta Air Lines</p>
                    <select className="w-full max-w-xs text-blue-500 select select-bordered select-sm">
                      <option defaultChecked>Small</option>
                      <option>Deneme 1</option>
                      <option>Deneme 2</option>
                      <option>Deneme 3</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-y-3 ">
                    <p className="font-bold">Nonstap</p>
                    <p>1h 15 min</p>
                  </div>
                  <div className="flex flex-col gap-y-3 max-sm:flex max-sm:flex-col max-sm:gap-y-2 max-sm:items-center">
                    <p className="font-bold">SFO to LAX</p>
                    <p>DL 1443</p>
                  </div>
                </div>
              </div>
            </div>
            {/* content table 2 */}
            <div className="flex gap-40 max-sm:flex max-sm:justify-start max-sm:w-full max-sm:gap-16">
              <div className="flex gap-20 max-sm:gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold">$156</span>
                  <span>Main </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold">$204</span>
                  <span>Confort+</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xl font-bold">$386</span>
                <span>Detla One</span>
              </div>
            </div>
          </div>
          <hr className="text-black border" />
          <div className="flex items-center justify-between gap-5 mt-10 max-sm:flex max-sm:flex-col max-sm:items-start max-sm:px-5 ">
            <div className="flex items-center gap-5 max-sm:flex max-sm:flex-col ">
              {/* Logo */}
              <div className="mb-16 max-sm:-mb-8 ">
                <Image
                  src={Flight_4}
                  alt="Logo"
                  width={150}
                  height={150}
                  className="max-sm:text-xl"
                />
              </div>
              {/* 2 */}
              <div className="flex flex-col md:w-full md:gap-x-10 gap-y-5 ">
                <p className="text-3xl">7:30 AM - 9:12 AM</p>
                <div className="flex items-center gap-x-10 lg:gap-x-28 max-sm:flex-col max-sm:w-full max-sm:gap-y-2">
                  <div className="flex flex-col gap-y-2">
                    <p className="font-bold">Delta Air Lines</p>
                    <select className="w-full max-w-xs text-blue-500 select select-bordered select-sm">
                      <option defaultChecked>Small</option>
                      <option>Deneme 1</option>
                      <option>Deneme 2</option>
                      <option>Deneme 3</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-y-3 ">
                    <p className="font-bold">Nonstap</p>
                    <p>1h 15 min</p>
                  </div>
                  <div className="flex flex-col gap-y-3 max-sm:flex max-sm:flex-col max-sm:gap-y-2 max-sm:items-center">
                    <p className="font-bold">SFO to LAX</p>
                    <p>DL 1443</p>
                  </div>
                </div>
              </div>
            </div>
            {/* content table 2 */}
            <div className="flex gap-40 max-sm:flex max-sm:justify-start max-sm:w-full max-sm:gap-16">
              <div className="flex gap-20 max-sm:gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold">$156</span>
                  <span>Main </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold">$204</span>
                  <span>Confort+</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xl font-bold">$386</span>
                <span>Detla One</span>
              </div>
            </div>
          </div>
          <hr className="text-black border" />
          <div className="flex items-center justify-between gap-5 mt-10 max-sm:flex max-sm:flex-col max-sm:items-start max-sm:px-5 ">
            <div className="flex items-center gap-5 max-sm:flex max-sm:flex-col ">
              {/* Logo */}
              <div className="mb-16 max-sm:-mb-8 ">
                <Image
                  src={Flight_5}
                  alt="Logo"
                  width={150}
                  height={150}
                  className="max-sm:text-xl"
                />
              </div>
              {/* 2 */}
              <div className="flex flex-col md:w-full md:gap-x-10 gap-y-5 ">
                <p className="text-3xl">7:30 AM - 9:12 AM</p>
                <div className="flex items-center gap-x-10 lg:gap-x-28 max-sm:flex-col max-sm:w-full max-sm:gap-y-2">
                  <div className="flex flex-col gap-y-2">
                    <p className="font-bold">Delta Air Lines</p>
                    <select className="w-full max-w-xs text-blue-500 select select-bordered select-sm">
                      <option defaultChecked>Small</option>
                      <option>Deneme 1</option>
                      <option>Deneme 2</option>
                      <option>Deneme 3</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-y-3 ">
                    <p className="font-bold">Nonstap</p>
                    <p>1h 15 min</p>
                  </div>
                  <div className="flex flex-col gap-y-3 max-sm:flex max-sm:flex-col max-sm:gap-y-2 max-sm:items-center">
                    <p className="font-bold">SFO to LAX</p>
                    <p>DL 1443</p>
                  </div>
                </div>
              </div>
            </div>
            {/* content table 2 */}
            <div className="flex gap-40 max-sm:flex max-sm:justify-start max-sm:w-full max-sm:gap-16">
              <div className="flex gap-20 max-sm:gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold">$156</span>
                  <span>Main </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold">$204</span>
                  <span>Confort+</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xl font-bold">$386</span>
                <span>Detla One</span>
              </div>
            </div>
          </div>
        </div>
        {/* content table */}
      </div>
    </>
  );
}
