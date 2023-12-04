import { TextInput } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function GetStarted() {
  return (
    <div className="bg-[#121212] flex gap-[40px] h-[100vh]">
      <Image
        src={"/images/home.png"}
        alt={""}
        width={300}
        height={300}
        className="h-[100vh] w-[50vw] md:block hidden"
      />
      <div className="py-[30px] flex flex-col gap-[40px] px-[20px]">
        <div className="flex-col lg:flex gap-[12px]">
          <div className="flex gap-[2.723px] items-center">
            <Image src={"/images/logo.png"} alt={""} width={20} height={20} />{" "}
            <strong className="text-[17px] text-[#FEFEFE] font-Space-Grotesk font-semibold">
              Tublian
            </strong>
          </div>
          <div className="flex gap-[12px] flex-wrap">
            <Link href={"/"} className="linkedcolored whitespace-nowrap">
              1: Get Started
            </Link>
            <Link href={"/login"} className="linked whitespace-nowrap">
              2: Create Account
            </Link>
            <Link href={"/set-up"} className="linked whitespace-nowrap">
              3: Account Setup
            </Link>
            <Link href={"/payment"} className="linked whitespace-nowrap">
              4: Payment
            </Link>
          </div>
        </div>
        <div className="max-w-[400px] flex flex-col">
          <p className="text-[clamp(30px,2.3vw,36px)] text-[white] font-Space-Grotesk font-bold pb-[10px]">
            Get Started
          </p>
          <p className="text-[#CFCFCF] text-[16px] font-medium font-Space-Grotesk pb-[20px]">
            Start recruiting streetcred developers, Today!!
          </p>
          <div className="pb-[15px]">
            <TextInput
              placeholder="First Name"
              styles={{
                input: {
                  padding: "16px",
                  backgroundColor: "#121212",
                  border: "none",
                  borderBottom: "1px solid #888",
                  fontSize: "16px",
                  color: "#696969",
                },
              }}
            />
          </div>
          <div className="pb-[24px]">
            <TextInput
              placeholder="Last Name"
              styles={{
                input: {
                  padding: "16px",
                  backgroundColor: "#121212",
                  border: "none",
                  borderBottom: "1px solid #888",
                  fontSize: "16px",
                  color: "#696969",
                },
              }}
            />
          </div>
          <button className="text-[#121212] text-[16px] font-Space-Grotesk font-medium flex items-center bg-[#FDD649] rounded-[30px] py-[8px] px-[16px] grow justify-center hover:bg-[#f3da7e] ">
            Proceed
          </button>
          <div className="text-[#B7B7B7] text-[16px] font-normal font-Space-Grotesk  pt-[24px]">
            Already have an account{" "}
            <Link href={"/login"} className="text-[white] font-bold underline">
              Log in
            </Link>
          </div>
        </div>
        <div className="text-[#B7B7B7] pt-[100px] text-[16px] gap-[20px] md:flex hidden">
          <span>Privacy Policy</span>
          <span>Terms</span>
        </div>
      </div>
    </div>
  );
}
