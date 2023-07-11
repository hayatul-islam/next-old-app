import Link from "next/link";
import {
  FaFacebook,
  FaInstagramSquare,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-[#161616] text-[#A9A9A9] px-6">
      <div className="max-w-[1400px] mx-auto py-12">
        <div className="border-b pb-6 md:flex gap-12 space-y-6 md:space-y-0 border-[#474646]">
          <div className="space-y-3 md:w-[400px] lg:w-[500px] xl:w-[800px]">
            <Link href="/" className="flex-shrink-0 text-white">
              <span className="font-bold text-3xl font-primary">
                Relight news
              </span>
            </Link>
            <p>Journalism without fear or favour</p>
          </div>
          <div className="w-full grid md:grid-cols-3 space-y-4 md:space-y-0">
            <div className="space-y-2 md:space-y-3">
              <Link
                className="block text-[18px] font-medium text-white hover:opacity-70 transition"
                href="/"
              >
                Home
              </Link>
              <Link
                className="block text-[18px] font-medium text-white hover:opacity-70 transition"
                href=""
              >
                About Us
              </Link>
              <Link
                className="block text-[18px] font-medium text-white hover:opacity-70 transition"
                href="top-stores"
              >
                Top Stores
              </Link>
            </div>
            <div className="space-y-2 md:space-y-3">
              <Link
                className="block text-[18px] font-medium text-white hover:opacity-70 transition"
                href=""
              >
                Newsletter
              </Link>
              <Link
                className="block text-[18px] font-medium text-white hover:opacity-70 transition"
                href=""
              >
                Privacy Policy
              </Link>
            </div>
            <div className="space-y-2 md:space-y-3">
              <Link
                className="block text-[18px] font-medium text-white hover:opacity-70 transition"
                href=""
              >
                Trams and condition
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-6 grid md:flex justify-between items-center gap-6">
          <div className="order-last md:order-first">
            <p> Copyright © 2023 Relight news - All Rights Reserved.</p>
            <p>Powered by HeyDev</p>
          </div>
          <div className="flex gap-6">
            <Link href="">
              <FaFacebook className="text-[28px] hover:text-white transition" />
            </Link>
            <Link href="">
              <FaYoutube className="text-[28px] hover:text-white transition" />
            </Link>
            <Link href="">
              <FaTwitter className="text-[28px] hover:text-white transition" />
            </Link>
            <Link href="">
              <FaInstagramSquare className="text-[28px] hover:text-white transition" />
            </Link>
            <Link href="">
              <FaPinterest className="text-[28px] hover:text-white transition" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
