import Image from "next/image";
import { Inter } from "next/font/google";
import { GetStarted } from "@/components/get-started";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#121212]">
      <GetStarted />
    </div>
  );
}
