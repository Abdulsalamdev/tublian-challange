import Link from "next/link";
import Image from "next/image";
import React from "react";

export function AccountSetup() {
  return (
    <div className="bg-[#121212] w-[85%] m-auto py-[clamp(30px,3vw,60px)]">
      <div className="flex justify-between gap-[10px] flex-wrap">
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
          <Link href={"/set-up"} className="linkedcolored whitespace-nowrap">
            3: Account Setup
          </Link>
          <Link href={"/payment"} className="linked whitespace-nowrap">
            4: Payment
          </Link>
        </div>
      </div>
      <div className="text-[#FEFEFE] text-center text-[clamp(20px,1.8vw,24px)] font-Space-Grotesk font-bold pt-[20px]">
        How are you planning to use Tublian?
      </div>
      <p className="flex justify-center text-center m-auto text-[#CFCFCF] text-[16px] font-medium font-Space-Grotesk max-w-[379px] pb-[10px]">
        We will customize your experience based on your option.
      </p>
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap gap-[20px] items-center">
          <div className="planning p-[20px] flex  gap-[10px] sm:flex-col sm:flex-wrap sm:items-center flex-row-reverse">
            <Image
              src={"/images/mark.png"}
              alt={""}
              width={20}
              height={20}
              className="self-center sm:self-end"
            />
            <div className="flex sm:flex-col gap-[12px] items-center">
              <Image
                src={"/images/team-work.png"}
                alt={""}
                width={150}
                height={150}
                className="max-w-[200px] h-auto"
              />
              <div className="flex items-center flex-col">
                <p className="text-[clamp(17px,1.5vw,24px)] text-[#FEFEFE] font-Space-Grotesk font-bold whitespace-nowrap">
                  Team Projects
                </p>
                <p className="text-[#CFCFCF] text-center text-[16px] font-Space-Grotesk font-medium max-w-[210px]">
                  Hire developers for team projects.
                </p>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
