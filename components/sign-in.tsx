import React from "react";
import { TextInput } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { TickCircle } from "iconsax-react";
export function SignIn() {
  return (
    <div className=" flex gap-[40px] bg-[#121212]">
      <Image
        src={"/images/sign-up.png"}
        alt={""}
        width={300}
        height={300}
        className="h-[100vh] w-[50vw] md:block hidden"
      />
      <div className="py-[30px] flex flex-col gap-[20px] px-[20px]">
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
            <Link href={"/login"} className="linkedcolored whitespace-nowrap">
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
            Create Account
          </p>
          <p className="text-[#CFCFCF] text-[16px] font-medium font-Space-Grotesk pb-[20px]">
            Creating account for{" "}
            <span className="text-[#4BA3FF]">@John Doe</span>
          </p>
          <div className="pb-[15px]">
            <TextInput
              placeholder="Email"
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
          <div className="pb-[15px]">
            <TextInput
              placeholder="Password"
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
          <div className="flex gap-[24px] items-start pb-[20px]">
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center gap-[8px]">
                <TickCircle size="16" color="#414141" />
                <span className="text-[12px] text-[#888]">
                  8 Characters minimum
                </span>
              </div>
              <div className="flex items-center gap-[8px]">
                <TickCircle size="16" color="#414141" />
                <span className="text-[12px] text-[#888]">
                  One uppercase character
                </span>
              </div>
            </div>
            <div className="flex items-center gap-[8px]">
              <TickCircle size="16" color="#414141" />
              <span className="text-[12px] text-[#888]">
                One symbol character
              </span>
            </div>
          </div>
          <button className="text-[#121212] text-[16px] font-Space-Grotesk font-medium flex items-center bg-[#FDD649] rounded-[30px] py-[8px] px-[16px] grow justify-center hover:bg-[#f3da7e] mt-[20px] mb-[30px]">
            Create Account
          </button>
          <div>
            <div className="bg-[#414141] h-[1px] mb-[18px]"></div>
            <div className="flex justify-center ">
              <span className="text-[#B7B7B7] px-[8px] mt-[-40px] items-center flex justify-center bg-[#121212]">
                Or
              </span>
            </div>
          </div>
          <button className="text-[white] gap-[10px] text-[16px] font-Space-Grotesk font-medium flex items-center rounded-[30px] py-[3px] px-[16px] grow justify-center google">
            <Image src={"/images/google.png"} alt={""} width={20} height={20} />
            <span>Sign up with Google</span>
          </button>
          <div className="text-[#B7B7B7] text-[16px] font-normal font-Space-Grotesk  pt-[10px]">
            Already have an account{" "}
            <Link href={"/login"} className="text-[white] font-bold underline">
              Log in
            </Link>
          </div>
        </div>
        <div className="text-[#B7B7B7]  text-[16px] gap-[20px] md:flex hidden">
          <span>Privacy Policy</span>
          <span>Terms</span>
        </div>
      </div>
    </div>
  );
}
