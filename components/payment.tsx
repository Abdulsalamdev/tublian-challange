import React from "react";
import Image from "next/image";
import Link from "next/link";
export function PaymentContent() {
  return (
    <div className="bg-[#121212] w-[85%] m-auto py-[clamp(30px,3vw,60px)]">
      <div className="flex justify-between gap-[10px]">
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
    </div>
  );
}
