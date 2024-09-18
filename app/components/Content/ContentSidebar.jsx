import React from "react";
import Image from "next/image";
import Link from "next/link";
import CarBg from "@/public/images/CarSiderBar.webp";
import HotelBg from "@/public/images/HoteSideBar.jpg";
import SumUmbrellaBg from "@/public/images/SuitcaseSideBar.png";
import Car from "@/public/images/car.png";
import Hotel from "@/public/images/hotel.png";
import SumUmbrella from "@/public/images/sun-umbrella.png";
export default function Sidebar() {
  return (
    <>
      <div className="sticky top-0 ">
        <div className="flex flex-col items-center justify-center gap-10 pb-20 ">
          <div className="relative flex flex-col gap-2 ">
            <Image
              src={CarBg}
              alt="carBg"
              width={400}
              height={400}
              className="-z-10"
            />
            <div className="absolute z-10 translate-y-0 bottom-2 left-5 transla e-x-0 ">
              <Image src={Car} alt="car" width={40} height={40} className="" />
              <p className="font-bold text-white uppercase">Car Rental</p>
            </div>
          </div>
          <div className="relative flex flex-col gap-2 ">
            <Image src={HotelBg} alt="hotelBg" width={400} height={400} />
            <div className="absolute z-10 translate-y-0 bottom-2 left-5 transla e-x-0 ">
              <Image src={Hotel} alt="hotel" width={50} height={50} />
              <p className="font-bold text-white uppercase">Hotels</p>
            </div>
          </div>
          <div className="relative flex flex-col gap-2 ">
            <Image
              src={SumUmbrellaBg}
              alt="sumUmbrellaBg"
              width={400}
              height={400}
            />
            <div className="absolute z-10 translate-y-0 bottom-2 left-5 transla e-x-0 ">
              <Image
                src={SumUmbrella}
                alt="sumUmbrella"
                width={50}
                height={50}
              />
              <p className="font-bold text-white uppercase">Travel Packages</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
