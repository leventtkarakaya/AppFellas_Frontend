import React from "react";
import Image from "next/image";
import Logo from "@/public/images/Logo.png";
import Link from "next/link";
import { IoInformationCircleOutline } from "react-icons/io5";
export default function page() {
  return (
    <>
      <div className="px-10 py-10">
        {/* header */}
        <div className="flex items-center justify-between gap-10 ">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="Logo"
              width={80}
              height={80}
              className="max-md:w-16 max-md:h-16"
            />
          </Link>
          <div className="flex items-center">
            <nav className="flex items-center justify-center">
              <ul className="flex items-center gap-5">
                <li>
                  <a href="#">Times</a>
                </li>
                <li>
                  <a href="#">Flights</a>
                </li>
                <li>
                  <a href="#">Flights</a>
                </li>
                <li>
                  <a href="#">Flights</a>
                </li>
                <li>
                  <a href="#">Flights</a>
                </li>
                <select className="w-full max-w-xs text-blue-500 outline-none select select-bordered">
                  <option defaultChecked value={"Edit Search"}>
                    Edit Search
                  </option>
                  <option className="text-blue-500">Deneme 1</option>
                  <option className="text-blue-500">Deneme 2</option>
                </select>
              </ul>
            </nav>
          </div>
          <div className="flex gap-10">
            {/* Rating */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col rating">
                <div>
                  <input
                    type="radio"
                    name="rating-2"
                    className="bg-orange-400 mask mask-star-2"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="bg-orange-400 mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="bg-orange-400 mask mask-star-2"
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="rating-2"
                    className="bg-orange-400 mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="bg-orange-400 mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="bg-orange-400 mask mask-star-2"
                  />
                </div>
              </div>
            </div>
            {/* Rating */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col rating">
                <div>
                  <input
                    type="radio"
                    name="rating-3"
                    className="bg-orange-400 mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="bg-orange-400 mask mask-star-2"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="bg-orange-400 mask mask-star-2"
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="rating-3"
                    className="bg-orange-400 mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="bg-orange-400 mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="bg-orange-400 mask mask-star-2"
                  />
                </div>
              </div>
            </div>
            {/* Rating */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col rating">
                <div>
                  <input
                    type="radio"
                    name="rating-4"
                    className="bg-orange-400 mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="bg-orange-400 mask mask-star-2"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="bg-orange-400 mask mask-star-2"
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="rating-4"
                    className="bg-orange-400 mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="bg-orange-400 mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="bg-orange-400 mask mask-star-2"
                  />
                </div>
              </div>
            </div>
            {/* Rating */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col rating">
                <div className="">
                  <input
                    type="radio"
                    name="rating-5"
                    className="bg-orange-400 mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="bg-orange-400 mask mask-star-2"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="bg-orange-400 mask mask-star-2"
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="rating-5"
                    className="bg-orange-400 mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="bg-orange-400 mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="bg-orange-400 mask mask-star-2"
                  />
                </div>
              </div>
            </div>
            {/* Rating */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col rating">
                <div>
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-orange-400 mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-orange-400 mask mask-star-2"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-orange-400 mask mask-star-2"
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-orange-400 mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-orange-400 mask mask-star-2"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="bg-orange-400 mask mask-star-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* input */}
        <div className="flex items-center justify-between px-10 mt-20">
          <div className="flex items-center gap-2">
            <p>{`SortBy:`} </p>
            <select className="w-full max-w-xs font-bold select select-bordered">
              <option defaultChecked>Recommended</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <IoInformationCircleOutline size={25} className="text-blue-500" />
            <span>Avg Fare: $250</span>
          </div>
        </div>
        {/* content */}
        {/* content table */}
        <div className="container p-2 mx-auto mt-10">
          {/* content table 1 */}
          <div className="flex items-center justify-between gap-5 mt-10">
            <div className="flex items-center gap-5">
              <div className="mb-16">
                <Image src={Logo} alt="Logo" width={80} height={80} />
              </div>
              <div className="flex flex-col gap-y-5">
                <span>7:30 AM - 9:12 AM</span>
                <div className="flex items-center gap-x-10">
                  <div className="flex flex-col gap-y-2">
                    <p>Delta Air Lines</p>
                    <select className="w-full max-w-xs text-blue-500 select select-bordered select-sm">
                      <option defaultChecked>Small</option>
                      <option>Deneme 1</option>
                      <option>Deneme 2</option>
                      <option>Deneme 3</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <span>Nonstap</span>
                    <p>1h 15 min</p>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <span>SFO to LAX</span>
                    <p>DL 1443</p>
                  </div>
                </div>
              </div>
            </div>
            {/* content table 2 */}
            <div className="flex gap-28">
              <div className="flex gap-5">
                <div className="flex flex-col gap-2">
                  <span>$156</span>
                  <span>Main</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span>$156</span>
                  <span>Main</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span>$156</span>
                <span>Main</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-5 mt-10">
            <div className="flex items-center gap-5">
              <div className="mb-16">
                <Image src={Logo} alt="Logo" width={80} height={80} />
              </div>
              <div className="flex flex-col gap-y-5">
                <span>7:30 AM - 9:12 AM</span>
                <div className="flex items-center gap-x-10">
                  <div className="flex flex-col gap-y-2">
                    <p>Delta Air Lines</p>
                    <select className="w-full max-w-xs text-blue-500 select select-bordered select-sm">
                      <option defaultChecked>Small</option>
                      <option>Deneme 1</option>
                      <option>Deneme 2</option>
                      <option>Deneme 3</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <span>Nonstap</span>
                    <p>1h 15 min</p>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <span>SFO to LAX</span>
                    <p>DL 1443</p>
                  </div>
                </div>
              </div>
            </div>
            {/* content table 2 */}
            <div className="flex gap-28">
              <div className="flex gap-5">
                <div className="flex flex-col gap-2">
                  <span>$156</span>
                  <span>Main</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span>$156</span>
                  <span>Main</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span>$156</span>
                <span>Main</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-5 mt-10">
            <div className="flex items-center gap-5">
              <div className="mb-16">
                <Image src={Logo} alt="Logo" width={80} height={80} />
              </div>
              <div className="flex flex-col gap-y-5">
                <span>7:30 AM - 9:12 AM</span>
                <div className="flex items-center gap-x-10">
                  <div className="flex flex-col gap-y-2">
                    <p>Delta Air Lines</p>
                    <select className="w-full max-w-xs text-blue-500 select select-bordered select-sm">
                      <option defaultChecked>Small</option>
                      <option>Deneme 1</option>
                      <option>Deneme 2</option>
                      <option>Deneme 3</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <span>Nonstap</span>
                    <p>1h 15 min</p>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <span>SFO to LAX</span>
                    <p>DL 1443</p>
                  </div>
                </div>
              </div>
            </div>
            {/* content table 2 */}
            <div className="flex gap-28">
              <div className="flex gap-5">
                <div className="flex flex-col gap-2">
                  <span>$156</span>
                  <span>Main</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span>$156</span>
                  <span>Main</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span>$156</span>
                <span>Main</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-5 mt-10">
            <div className="flex items-center gap-5">
              <div className="mb-16">
                <Image src={Logo} alt="Logo" width={80} height={80} />
              </div>
              <div className="flex flex-col gap-y-5">
                <span>7:30 AM - 9:12 AM</span>
                <div className="flex items-center gap-x-10">
                  <div className="flex flex-col gap-y-2">
                    <p>Delta Air Lines</p>
                    <select className="w-full max-w-xs text-blue-500 select select-bordered select-sm">
                      <option defaultChecked>Small</option>
                      <option>Deneme 1</option>
                      <option>Deneme 2</option>
                      <option>Deneme 3</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <span>Nonstap</span>
                    <p>1h 15 min</p>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <span>SFO to LAX</span>
                    <p>DL 1443</p>
                  </div>
                </div>
              </div>
            </div>
            {/* content table 2 */}
            <div className="flex gap-28">
              <div className="flex gap-5">
                <div className="flex flex-col gap-2">
                  <span>$156</span>
                  <span>Main</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span>$156</span>
                  <span>Main</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span>$156</span>
                <span>Main</span>
              </div>
            </div>
          </div>
        </div>
        {/* content */}
      </div>
    </>
  );
}
